import { create, type StateCreator } from "zustand";

type Store = {
  counter: number;
  user: {
    username: string;
  };
};

type Actions = {
  increment: () => void;
  decrement: () => void;
  setUsername: (username: string) => void;
};

function logOperations(
  initializer: StateCreator<Store & Actions, [], []>
): StateCreator<Store & Actions, [], []> {
  return (set, get, api) => {
    const setWithLog: typeof set = (...args) => {
      console.log("set", args);
      set(...args);
    };

    return initializer(setWithLog, get, api);
  };
}

export const useStore = create<Store & Actions>()(
  logOperations((set, get) => ({
    counter: 0,
    user: {
      username: "andreeltonsf",
    },
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
    setUsername: (username) => set((state) => ({ user: { username } })),
  }))
);

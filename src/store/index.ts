import { create } from "zustand";

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

export const useStore = create<Store & Actions>()((set) => ({
  counter: 0,
  //Increment deve ser imutável
  user: {
    username: "andreeltonsf",
  },
  increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
  decrement: () => set((prevState) => ({ counter: prevState.counter - 1 })),
  setUsername: (username: string) => set({
    user:{username}
  })
}));

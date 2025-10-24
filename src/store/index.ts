import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  counter: number;
  user: {
    username: string;
    email: string;
    name: string;
  };
};

type Actions = {
  increment: () => void;
  decrement: () => void;
  setUsername: (username: string) => void;
};

export const useStore = create<Store & Actions>()(
  devtools(
    immer((set, get) => ({
      counter: 0,
      user: {
        username: "andreeltonsf",
        email: "andreeltonsf@gmail.com",
        name: "Andreel Tonsf",
      },
      increment: () =>
        set((state) => {
          state.counter += 1;
        }),
      decrement: () =>
        set((state) => {
          state.counter -= 1;
        }),
      setUsername: (username) =>
        set((prevState) => {
          prevState.user.username = username;
        }),
    }))
  )
);

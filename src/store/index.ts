import { create } from "zustand";
import { createJSONStorage, devtools } from "zustand/middleware";

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

export const useStore = create<Store & Actions>()(
  devtools(
    (set, get) => ({
      counter: 0,
      user: {
        username: "andreeltonsf",
      },
      increment: () =>
        set((state) => ({ counter: state.counter + 1 }), false, "increment"),
      decrement: () =>
        set((state) => ({ counter: state.counter - 1 }), false, "decrement"),
      setUsername: (username: string) =>
        set((prevState) => ({
          user: {
            /** TODO: Utilização para persistir os dados quenão queremos mudar/ */
            ...prevState.user,
            username,
          },
        })),
    }),
    {
      name: "project-zustand",
      storage: createJSONStorage(() => ({
        getItem: (key) => sessionStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: (key) => localStorage.removeItem(key),
      })),
    }
  )
);

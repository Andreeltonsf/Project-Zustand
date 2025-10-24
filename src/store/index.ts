import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  persist(
    (set, get) => ({
      counter: 0,
      user: {
        username: "andreeltonsf",
      },
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
      setUsername: (username) => set((state) => ({ user: { username } })),
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

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

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
    persist(
      (set, get) => ({
        counter: 0,
        user: {
          username: "andreeltonsf",
        },
        increment: () =>
          set((state) => ({ counter: state.counter + 1 }), false, "increment"),
        decrement: () =>
          set((state) => ({ counter: state.counter - 1 }), false, "decrement"),
        setUsername: (username) =>
          set((state) => ({ user: { username } }), false, "setUsername"),
      }),
      {
        name: "project-zustand",
        storage: createJSONStorage(() => ({
          getItem: (key) => sessionStorage.getItem(key),
          setItem: (key, value) => localStorage.setItem(key, value),
          removeItem: (key) => localStorage.removeItem(key),
        })),
      }
    ),
    {
      enabled: import.meta.env.DEV,
      name: "project-zustand",
      store: "GLobal Store",
      anonymousActionType: "GLobal Action",
    }
  )
);

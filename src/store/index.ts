import create from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Store } from "./Store";
import { createCounterSlice } from "./slices/counterSlice";
import { createUserSlice } from "./slices/userSlice";

export const useStore = create<Store>()(
  devtools(
    immer((...params) => ({
      user: createUserSlice(...params),
      counter: createCounterSlice(...params),
    }))
  )
);

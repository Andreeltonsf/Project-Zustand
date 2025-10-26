import type { StoreSlices } from "../Store";

type CounterStore = {
  value: number;
};

type CounterActions = {
  increment: () => void;
  decrement: () => void;
};

export type CounterSlice = CounterStore & CounterActions;

export const createCounterSlice: StoreSlices<CounterSlice> = (set) => ({
  value: 0,
  increment: () => {
    set((prevState) => {
      prevState.counter.value++;
    });
  },
  decrement: () => {
    set((prevState) => {
      prevState.counter.value--;
    });
  },
});

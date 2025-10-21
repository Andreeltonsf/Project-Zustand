import { useStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { Button } from "../ui/button";

export function Counter() {
  const { counter, increment, decrement } = useStore(
    useShallow((state) => ({
      counter: state.counter,
      increment: state.increment,
      decrement: state.decrement,
    }))
  );

  return (
    <div className="space-y-4 space-x-2">
      <h1>Counter: {counter}</h1>
      <Button type="button" onClick={increment}>
        Incrementar
      </Button>
      <Button type="button" onClick={decrement}>
        Decrementar
      </Button>
    </div>
  );
}

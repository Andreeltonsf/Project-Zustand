import { useStore } from "@/store";
import { Button } from "../ui/button";

export function Counter() {
  const counter = useStore((state) => state.counter);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

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

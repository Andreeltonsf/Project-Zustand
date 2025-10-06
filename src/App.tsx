import { useEffect, useReducer } from "react";
import { create } from "zustand";
import { Button } from "./components/ui/button";

const store = create((set, get) => ({
  counter: 0,
  //Increment deve ser imutável
  increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
}));

function App() {
  //Irei forçar o update quando o state mudar
  const forceUpdate = useReducer((c) => c + 1, 0)[1];

  useEffect(() => {
    const unsubcribe = store.subscribe((newState, oldState) => {
      forceUpdate();
    });

    return () => {
      unsubcribe();
    };
  });
  return (
    <div className="justify-center items-center flex min-h-screen">
      <h1>Counter: {store.getState().counter}</h1>
      <Button type="button" onClick={store.getState().increment()}>
        Hello World
      </Button>
    </div>
  );
}

export default App;

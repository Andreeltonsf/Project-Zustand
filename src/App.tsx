import { Counter } from "./components/app/Counter";
import { UserProfile } from "./components/app/UserProfile";

function App() {
  /**
   * ForceUpdate é um hook que é usado para forçar o update do componente
   * quando o state mudar
   *
   */
  //Irei forçar o update quando o state mudar
  /* const forceUpdate = useReducer((c) => c + 1, 0)[1];

  useEffect(() => {
    const unsubcribe = store.subscribe((newState, oldState) => {
      forceUpdate();
    });

    return () => {
      unsubcribe();
    };
  }); */

  return (
    <div className=" min-h-screen p-6 grid place-items-center">
      <Counter />
      <UserProfile />
    </div>
  );
}

export default App;

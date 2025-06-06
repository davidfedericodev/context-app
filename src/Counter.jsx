import { useContext } from "react";
import { CounterContext } from "./store/counter-context";

export default function Counter() {
  const [count, setCount] = useContext(CounterContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded-md">
        Aggiungi 1
      </button>
      <button onClick={() => setCount(count - 1)} className="bg-blue-500 text-white p-2 rounded-md">
        Rimuovi 1
      </button>
    </>
  );
}

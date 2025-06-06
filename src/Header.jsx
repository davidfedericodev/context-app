import { useContext } from "react";
import { CounterContext } from "./store/counter-context";

export default function Header() {
  const [count] = useContext(CounterContext);
  return <div>Header {count}</div>;
}

import { useContext } from "react";
import { CounterContext } from "./store/counter-context";

export default function Footer() {
  const [count] = useContext(CounterContext);
  return <div>Footer {count}</div>;
}

import { useState, useRef } from "react";

export default function Player() {
  const [name, setName] = useState(null);
  const playerName = useRef();

  function handleSubmit() {
    setName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "Unknown Entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}

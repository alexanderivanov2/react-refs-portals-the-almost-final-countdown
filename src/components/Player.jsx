import { useRef, useState } from 'react'

export default function Player() {
  const inputName = useRef();
  const [playerName, setPlayerName] = useState('unknown');


  const handleClick = () => {
    setPlayerName(inputName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={inputName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

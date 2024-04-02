import { useEffect, useRef, useState } from "react"

const RockPagerScissors = () => {
  const [playerResult, setPlayerResult] = useState("");
  const [aiResult, setAIResult] = useState("");
  const playerResultRef = useRef(null);
  const aiResultRef = useRef(null);

  useEffect(() => {
    switch (playerResult) {
      case "BÚA":
        setAIResult("BAO");
        break;
      case "BAO":
        setAIResult("KÉO");
        break;
      case "KÉO":
        setAIResult("BÚA");
        break;
      default:
        setAIResult("");
        break
    }
  }, [playerResult]);

  useEffect(() => {
    console.log(playerResultRef.current, "playerResultRef");
    console.log(aiResultRef.current, "playerResultRef");
    playerResultRef.current.style.color = 'red';
    aiResultRef.current.style.color = 'green';

    aiResultRef.current = ""
  }, [])

  return <div className="game-container">
    <div>
      <h1>Please choose: Rock, Pager, Scissors</h1>
      <button onClick={() => setPlayerResult("BÚA")}>BÚA</button>
      <button onClick={() => setPlayerResult("BAO")}>BAO</button>
      <button onClick={() => setPlayerResult("KÉO")}>KÉO</button>
    </div>

    <div>
      <div>
        <h1>Player</h1>
        <h3 ref={playerResultRef}>{playerResult}</h3>
      </div>

      <hr />

      <div>
        <h1>AI</h1>
        <h3 ref={aiResultRef}>{aiResult}</h3>
      </div>
    </div>
  </div>
}

export default RockPagerScissors

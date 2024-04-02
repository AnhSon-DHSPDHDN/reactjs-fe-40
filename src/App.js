import { useState } from "react";
import "./App.css";
import ComponentLifeCycle from "./components/lifeCycle";
import FuncComponentLifeCycle from "./components/funcLifeCycle";
import RockPagerScissors from "./components/rockPaperScissors";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      {/* <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
      {toggle && <FuncComponentLifeCycle />} */}
      {/* {toggle && <ComponentLifeCycle />} */}
      {/* toggle = true => show ComponentLifeCycle */}
      {/* toggle = false => hide ComponentLifeCycle */}

      <RockPagerScissors />
    </div>
  );
}

export default App;

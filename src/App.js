import "./App.css";
import HeaderComponent from "./components/header";
import MainComponent from "./components/main";
import { useCallback, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => {
    return []; // data = []
  }, []);

  const handleAddTask = useCallback(() => {}, []);

  console.log("App rerender ne!!!!!!!");
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Trigger App rerender</button>
      <HeaderComponent />
      <MainComponent data={data} handleAddTask={handleAddTask} />
    </div>
  );
}

export default App;

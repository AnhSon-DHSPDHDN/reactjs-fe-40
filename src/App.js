import { useState } from "react";
import "./App.css";
import Circle from "./components/circle";

// const dataCircles = [
//   {
//     color: "red",
//     name: "Son",
//   },
//   {
//     color: "yellow",
//     name: "Son1",
//   },
//   {
//     color: "green",
//     name: "Son2",
//   },
// ];

function App() {
  const [dataCircles, setDataCircles] = useState([]);
  const renderCircle = (circles) => {
    return circles.map((circleItem, index) => {
      return (
        <Circle key={index} name={circleItem.name} color={circleItem.color} />
      );
    });
  };

  const handleAddCircle = () => {
    const colors = ["red", "yellow", "green", "pink", "blue", "gray"];

    setDataCircles([
      ...dataCircles,
      {
        color: colors[Math.floor(Math.random() * 6)],
        name: `${"Son"}${Math.floor(Math.random() * 10)}`,
      },
    ]);
  };

  const handleDelCircle = () => {
    const _circlesClone = [...dataCircles];
    // xu ly xoa circle
    _circlesClone.splice(0, 1);
    setDataCircles(_circlesClone);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleAddCircle}>Add Circle</button>
        <button onClick={handleDelCircle}>Del Circle</button>
      </div>
      <div className="circles-container">{renderCircle(dataCircles)}</div>
    </div>
  );
}

export default App;

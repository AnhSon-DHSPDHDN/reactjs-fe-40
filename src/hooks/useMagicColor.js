import { useEffect, useState } from "react";

const chooseColors = ["red", "green", "yellow"];

const useMagicColor = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndexColor = Math.floor(Math.random() * chooseColors.length);
      setColor(chooseColors[randomIndexColor]);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return color;
};

export default useMagicColor;

import { useEffect, useState } from "react";
let isFirstMount = true;
const FuncComponentLifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isFirstMount) {
      return;
    }

    console.log("Component DId update run...");
  }, [count]); // Sẽ chạy lại khi một trong những dependencies thay đổi

  useEffect(() => {
    console.log("Component DId mount run...");
    isFirstMount = false;

    return () => {
      console.log("Component Will Unmount"); // Sẽ khởi chạy khi bị unmount
      isFirstMount = true;
    }
  }, []); // Chỉ chạy 1 lần duy nhất

  console.log("RENDER HTML =======>>>>>>");
  return <div>
    <h1>Func component life Cycle: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Update</button>
  </div>
}

export default FuncComponentLifeCycle

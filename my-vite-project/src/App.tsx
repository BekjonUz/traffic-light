import React, { useEffect, useState } from "react";

const App :React.FC= () => {
const [time, setTime] = useState<number>(10);
const [count, setCount] = useState<number>(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTime(prevTime => {
      if (prevTime <= 0) {
        setCount(prevCount=>prevCount++);
        return 10;
      }
      return prevTime - 1;
    });
  }, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="w-[1200px] mx-auto">
      <div className="bg-red-600 w-[100px] h-[100px] flex justify-center items-center text-red-600 rounded-[50%]">Hello</div>
      <div className="bg-yellow-400 w-[100px] h-[100px] flex justify-center items-center text-yellow-400 rounded-[50%]">Hello</div>
      <div className="bg-green-600 w-[100px] h-[100px] flex justify-center items-center text-green-600 rounded-[50%]">Hello</div>
      <h1>{time}</h1>
      <p>{count}</p>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";

const App :React.FC= () => {
const [time, setTime] = useState<number>(10);
const [count, setCount] = useState<number>(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTime(prevTime => {
      if (prevTime <= 0) {
        setCount(prevCount => prevCount + 1);
        return 10;
      }
      return prevTime - 1;
    });
  }, 1000);
  return () => clearInterval(interval);
}, []);
  
  return (
    <div className="w-[1200px] mx-auto">
      {
        count%2===0?<div className="bg-red-600 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]">{time}</div>:<div className="bg-red-300 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]">Wait</div>
      }
      {
        time>3?<div className="bg-yellow-200 w-[100px] h-[100px] flex justify-center items-center rounded-[50%]"></div>:<div className="bg-yellow-400 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]">{time}</div>
      }
      {
        count%2!==0?<div className="bg-green-600 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]">{time}</div>:<div className="bg-green-300 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]">Wait</div>
      }
      <h1>{time}</h1>
      <p>{count}</p>
    </div>
  );
};

export default App;

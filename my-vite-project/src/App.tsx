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
    <div className="w-[1200px] mx-auto mt-[2rem]">
      <div className="flex items-start">
        <div className="flex items-center">
        <div className="flex flex-col bg-[#000] p-[1rem] gap-[0.3rem]">
        {
        count%2===0 && time>3 ?<div className="bg-red-700 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]"></div>:<div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]"></div>
      }
      {
        time>3?<div className="bg-yellow-300 w-[100px] h-[100px] flex justify-center items-center rounded-[50%]"></div>:<div className="bg-yellow-500 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]"></div>
      }
      {
        count%2!==0?<div className="bg-green-600 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]"></div>:<div className="bg-green-500 w-[100px] h-[100px] flex justify-center items-center text-white rounded-[50%]"></div>
      }
      </div>
      <div className="w-[10rem] h-[5rem] bg-[#00000085]">
      </div>
      <div className="w-[10rem] h-[10rem] bg-[#000000] text-white rounded-2xl justify-center items-center flex text-5xl">
      {time}
      </div>
      <div className="w-[5rem] h-[5rem] bg-[#00000085]">
      </div>
      </div>
      <div className="w-[5rem] mt-[8.2rem] h-[30rem] bg-[#00000085]">
      </div>
      </div>
    </div>
  );
};

export default App;

"use client";

import { useState } from "react";

const Troll = () => {
  const [age, setAge] = useState(0);

  const handleClick = () => {
    // prevent default
    let randomNum = 0;

    // random number between 0 and 100

    randomNum = Math.floor(Math.random() * 100);
    setAge(randomNum);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="text-4xl">Click the button to set your age</p>
      <button className="bg-red-500 rounded text-4xl p-3" onClick={handleClick}>
        Set Age
      </button>
      <p className="text-bold text-4xl">{age}</p>
    </div>
  );
};

export default Troll;

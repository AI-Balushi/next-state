"use client";

import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Counter Display */}
      <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-8">
        {count}
      </h1>
      
      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          className="py-2 px-6 md:px-10 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-all"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="py-2 px-6 md:px-10 bg-red-700 text-white rounded-md hover:bg-red-800 transition-all"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="py-2 px-6 md:px-10 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default State;

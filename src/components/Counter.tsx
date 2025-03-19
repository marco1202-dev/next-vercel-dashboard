"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment, decrement, incrementByAmount } from "@/redux/features/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Redux Counter</h2>
      <div className="text-4xl font-bold text-center mb-4">{count}</div>
      <div className="flex gap-4 justify-center mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 w-20 text-center"
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter; 
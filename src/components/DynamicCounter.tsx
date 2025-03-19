"use client";

import dynamic from "next/dynamic";
import React from "react";

// Import Counter with SSR disabled
const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
  loading: () => (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Redux Counter</h2>
      <div className="text-4xl font-bold text-center mb-4">Loading...</div>
    </div>
  ),
});

const DynamicCounter = () => {
  return <Counter />;
};

export default DynamicCounter;

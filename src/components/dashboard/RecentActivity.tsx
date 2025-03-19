"use client";

import React from "react";

export const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="flex items-center">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
              {num}
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">
                {num % 2 === 0 ? "Counter decreased" : "Counter increased"}
              </p>
              <p className="text-sm text-gray-500">
                {num} minute{num !== 1 ? "s" : ""} ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
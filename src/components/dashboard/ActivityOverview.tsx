"use client";

import React from "react";

interface ActivityOverviewProps {
  count: number;
}

export const ActivityOverview = ({ count }: ActivityOverviewProps) => {
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Activity Overview</h2>
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-blue-50 text-blue-500 text-4xl font-bold mb-4">
            {count}
          </div>
          <p className="text-gray-600 max-w-md">
            This counter value is stored in Redux and shared across all pages. Try changing it and
            navigating between pages.
          </p>
        </div>
      </div>
    </div>
  );
};

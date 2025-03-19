"use client";

import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";

interface DashboardStatsProps {
  count: number;
}

export const DashboardStats = ({ count }: DashboardStatsProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Counter Value</h2>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">{count}</p>
          <div className="text-blue-500">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors text-sm"
          >
            Decrease
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="flex-1 px-3 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors text-sm"
          >
            Increase
          </button>
        </div>
        <p className="mt-2 text-sm text-green-500">+0% vs last period</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Total Articles</h2>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">125</p>
          <div className="text-purple-500">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-sm text-green-500">+0% vs last period</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Total Collections</h2>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">42</p>
          <div className="text-yellow-500">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-sm text-green-500">+0% vs last period</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Analytics</h2>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">87%</p>
          <div className="text-indigo-500">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-sm text-green-500">+0% vs last period</p>
      </div>
    </div>
  );
};

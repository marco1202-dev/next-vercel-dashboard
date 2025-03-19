"use client";

import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { ActivityOverview } from "@/components/dashboard/ActivityOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function Dashboard() {
  // Access the counter value from Redux store
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <div className="mb-4 flex justify-end">
          <Link
            href="/"
            className="px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Stats cards */}
      <DashboardStats count={count} />

      {/* Activity and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <ActivityOverview count={count} />
        <RecentActivity />
      </div>
    </div>
  );
}

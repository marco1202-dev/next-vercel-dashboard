"use client";

import React from "react";
import { NotificationIcon, FilterIcon, ClockIcon } from "@/components/icons";

interface UserMenuProps {
  toggleFilterSection?: () => void;
}

export const UserMenu = ({ toggleFilterSection }: UserMenuProps) => {
  const handleFilterClick = () => {
    if (toggleFilterSection) {
      toggleFilterSection();
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Filter button */}
      <div className="relative">
        <button
          className="flex items-center justify-center text-gray-500 hover:text-gray-900"
          onClick={handleFilterClick}
          aria-label="Toggle filters"
        >
          <FilterIcon />
        </button>
      </div>

      {/* Notification button */}
      <button 
        className="hidden md:flex items-center justify-center text-gray-500 hover:text-gray-900 relative"
        aria-label="Notifications"
      >
        <NotificationIcon />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
      </button>

      {/* History button */}
      <button 
        className="hidden md:flex items-center justify-center text-gray-500 hover:text-gray-900"
        aria-label="History"
      >
        <ClockIcon />
      </button>

      {/* User profile */}
      <button 
        className="flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-8 w-8 font-medium"
        aria-label="User profile"
      >
        AZ
      </button>
    </div>
  );
}; 
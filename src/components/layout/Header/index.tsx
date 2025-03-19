"use client";

import React, { useState } from "react";
import { MenuIcon } from "@/components/icons";
import { SearchBar } from "./SearchBar";
import { FilterSection } from "./FilterSection";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [showFilterSection, setShowFilterSection] = useState(false);

  // Handle mobile menu click
  const handleMenuClick = () => {
    // Menu button clicked
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const toggleFilterSection = () => {
    console.log("Filter section toggled");
    setShowFilterSection(!showFilterSection);
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section - Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={handleMenuClick}
              aria-label="Open menu"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </div>

          {/* Middle section - Search */}
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <SearchBar
              toggleFilterSection={toggleFilterSection}
              showFilterSection={showFilterSection}
            />
          </div>

          {/* Right section - Actions */}
          <UserMenu toggleFilterSection={toggleFilterSection} />
        </div>
      </div>

      {/* Filter section below header */}
      {showFilterSection && <FilterSection />}
    </header>
  );
};

export default Header;

"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleSidebar } from "@/redux/features/uiSlice";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({
  isMobile = false,
  isOpen = false,
  onClose,
}: SidebarProps) => {
  const dispatch = useAppDispatch();
  const sidebarExpanded = useAppSelector((state) => state.ui.sidebarExpanded);

  const toggleSidebarWidth = () => {
    dispatch(toggleSidebar());
  };

  const handleCloseMobile = () => {
    console.log("Closing mobile sidebar");
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-40 w-64 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out md:hidden`
            : `fixed inset-y-0 left-0 z-10 ${
                sidebarExpanded ? "w-64" : "w-20"
              } transition-all duration-300 ease-in-out hidden md:flex md:flex-col`
        } bg-white border-r border-gray-200`}
      >
        <SidebarHeader 
          sidebarExpanded={sidebarExpanded} 
          isMobile={isMobile} 
          toggleSidebarWidth={toggleSidebarWidth} 
        />

        <SidebarNavigation 
          sidebarExpanded={sidebarExpanded} 
          isMobile={isMobile} 
        />

        <SidebarFooter 
          sidebarExpanded={sidebarExpanded} 
          isMobile={isMobile} 
        />
      </div>

      {/* Overlay to close mobile sidebar when clicking outside */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 transition-opacity md:hidden"
          onClick={handleCloseMobile}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Sidebar; 
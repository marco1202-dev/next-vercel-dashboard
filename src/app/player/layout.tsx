"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import MobileFooter from "@/components/layout/MobileFooter";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleMobileSidebar, setMobileSidebarOpen } from "@/redux/features/uiSlice";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const sidebarExpanded = useAppSelector((state) => state.ui.sidebarExpanded);
  const mobileSidebarOpen = useAppSelector((state) => state.ui.mobileSidebarOpen);

  const handleMenuClick = () => {
    console.log("Menu click in layout");
    dispatch(toggleMobileSidebar());
  };

  const closeMobileSidebar = () => {
    dispatch(setMobileSidebarOpen(false));
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar for desktop */}
      <Sidebar isMobile={false} />

      {/* Mobile sidebar */}
      <Sidebar isMobile={true} isOpen={mobileSidebarOpen} onClose={closeMobileSidebar} />

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col overflow-hidden ${
          sidebarExpanded ? "md:ml-64" : "md:ml-20"
        } transition-all duration-300`}
      >
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-4">{children}</main>

        {/* Mobile Footer Navigation */}
        <MobileFooter />
      </div>
    </div>
  );
}

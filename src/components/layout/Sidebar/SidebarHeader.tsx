"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import Image from "next/image";

interface SidebarHeaderProps {
  sidebarExpanded: boolean;
  isMobile: boolean;
  toggleSidebarWidth: () => void;
}

export const SidebarHeader = ({
  sidebarExpanded,
  isMobile,
  toggleSidebarWidth,
}: SidebarHeaderProps) => {
  return (
    <div className="flex items-center h-16 px-4 border-b border-gray-100">
      <Link href="/dashboard" className="flex items-center">
        <div className="flex-shrink-0">
          <Image
            src="https://i.ibb.co/VVPmzb2/SEMI-LOGO.png"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </div>
        {(sidebarExpanded || isMobile) && (
          <>
            <span className="ml-2 text-xl font-semibold text-blue-800">TASK</span>
            <span className="ml-1 text-xl font-semibold text-gray-400">X</span>
          </>
        )}
      </Link>

      {/* Collapse button at the top right */}
      {!isMobile && (
        <button
          onClick={toggleSidebarWidth}
          className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </button>
      )}
    </div>
  );
};

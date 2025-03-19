"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  SearchIcon,
  CollectionsIcon,
  BookmarkIcon,
  LibraryIcon,
  HistoryIcon,
} from "@/components/icons";

interface SidebarNavigationProps {
  sidebarExpanded: boolean;
  isMobile: boolean;
}

export const SidebarNavigation = ({ sidebarExpanded, isMobile }: SidebarNavigationProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex-1 overflow-y-auto py-4">
      {/* EXPLORE section */}
      <div className={`${sidebarExpanded ? "px-4" : "px-2"} mb-4`}>
        {sidebarExpanded && (
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">EXPLORE</h3>
        )}
        <nav className={`${sidebarExpanded ? "mt-2" : ""} space-y-1`}>
          <Link
            href="/dashboard"
            className={`group flex items-center ${
              sidebarExpanded ? "px-2" : "justify-center"
            } py-2 text-sm font-medium rounded-md ${
              isActive("/dashboard")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HomeIcon />
            {(sidebarExpanded || isMobile) && <span className="ml-3">Dashboard</span>}
          </Link>

          <Link
            href="/dashboard/explore"
            className={`group flex items-center ${
              sidebarExpanded ? "px-2" : "justify-center"
            } py-2 text-sm font-medium rounded-md ${
              isActive("/dashboard/explore")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <SearchIcon />
            {(sidebarExpanded || isMobile) && <span className="ml-3">Explore</span>}
          </Link>
        </nav>
      </div>

      {/* LIBRARY section */}
      <div className={`${sidebarExpanded ? "px-4" : "px-2"} mb-4`}>
        {sidebarExpanded && (
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">LIBRARY</h3>
        )}
        <nav className={`${sidebarExpanded ? "mt-2" : ""} space-y-1`}>
          <Link
            href="/dashboard/collections"
            className={`group flex items-center ${
              sidebarExpanded ? "px-2" : "justify-center"
            } py-2 text-sm font-medium rounded-md ${
              isActive("/dashboard/collections")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <CollectionsIcon />
            {(sidebarExpanded || isMobile) && <span className="ml-3">Collections</span>}
          </Link>

          <Link
            href="/dashboard/bookmarks"
            className={`group flex items-center ${
              sidebarExpanded ? "px-2" : "justify-center"
            } py-2 text-sm font-medium rounded-md ${
              isActive("/dashboard/bookmarks")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <BookmarkIcon />
            {(sidebarExpanded || isMobile) && <span className="ml-3">Bookmarks</span>}
          </Link>

          <Link
            href="/dashboard/library"
            className={`group flex items-center ${
              sidebarExpanded ? "px-2" : "justify-center"
            } py-2 text-sm font-medium rounded-md ${
              isActive("/dashboard/library")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <LibraryIcon />
            {(sidebarExpanded || isMobile) && <span className="ml-3">My Library</span>}
          </Link>

          <Link
            href="/dashboard/history"
            className={`group flex items-center ${
              sidebarExpanded ? "px-2" : "justify-center"
            } py-2 text-sm font-medium rounded-md ${
              isActive("/dashboard/history")
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <HistoryIcon />
            {(sidebarExpanded || isMobile) && <span className="ml-3">View History</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
};

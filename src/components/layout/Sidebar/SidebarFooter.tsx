"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlaylistIcon, NotificationIcon, SettingsIcon } from "@/components/icons";

interface SidebarFooterProps {
  sidebarExpanded: boolean;
  isMobile: boolean;
}

export const SidebarFooter = ({ sidebarExpanded, isMobile }: SidebarFooterProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className={`${sidebarExpanded ? "p-4" : "p-2"} border-t border-gray-200`}>
      <nav className="space-y-1">
        {sidebarExpanded || isMobile ? (
          <>
            <Link
              href="/dashboard/playlist"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive("/dashboard/playlist")
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <PlaylistIcon />
              <span className="ml-3">Playlist</span>
            </Link>

            <Link
              href="/dashboard/notifications"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive("/dashboard/notifications")
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <NotificationIcon />
              <span className="ml-3">Notifications</span>
            </Link>

            <Link
              href="/dashboard/settings"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive("/dashboard/settings")
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <SettingsIcon />
              <span className="ml-3">Settings</span>
            </Link>
          </>
        ) : (
          <>
            <div className="flex justify-center py-2">
              <Link href="/dashboard/playlist">
                <PlaylistIcon />
              </Link>
            </div>
            <div className="flex justify-center py-2">
              <Link href="/dashboard/notifications">
                <NotificationIcon />
              </Link>
            </div>
            <div className="flex justify-center py-2">
              <Link href="/dashboard/settings">
                <SettingsIcon />
              </Link>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

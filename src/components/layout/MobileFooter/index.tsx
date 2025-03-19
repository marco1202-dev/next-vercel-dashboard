"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlaylistIcon,
  UserIcon,
} from "@/components/icons";

const MobileFooter = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-800 text-white z-20">
      <div className="flex justify-around items-center h-14">
        <Link
          href="/dashboard"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/dashboard") ? "text-white" : "text-blue-200"
          }`}
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Dashboard</span>
        </Link>

        <Link
          href="/dashboard/explore"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/dashboard/explore") ? "text-white" : "text-blue-200"
          }`}
        >
          <SearchIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Explore</span>
        </Link>

        <Link
          href="/dashboard/library"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/dashboard/library") ? "text-white" : "text-blue-200"
          }`}
        >
          <LibraryIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Library</span>
        </Link>

        <Link
          href="/dashboard/playlist"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/dashboard/playlist") ? "text-white" : "text-blue-200"
          }`}
        >
          <PlaylistIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Playlist</span>
        </Link>

        <Link
          href="/dashboard/profile"
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive("/dashboard/profile") ? "text-white" : "text-blue-200"
          }`}
        >
          <UserIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Me</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter; 
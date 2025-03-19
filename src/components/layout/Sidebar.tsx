import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleSidebar } from "@/redux/features/uiSlice";
import {
  HomeIcon,
  SearchIcon,
  CollectionsIcon,
  BookmarkIcon,
  LibraryIcon,
  HistoryIcon,
  PlaylistIcon,
  NotificationIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons";
import Image from "next/image";

// Add this custom Player icon component
const PlayerIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" 
    />
  </svg>
);

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isMobile = false, isOpen = false, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const sidebarExpanded = useAppSelector((state) => state.ui.sidebarExpanded);

  const toggleSidebarWidth = () => {
    dispatch(toggleSidebar());
  };

  const isActive = (path: string) => {
    return pathname === path;
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
        {/* Logo section */}
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

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* EXPLORE section */}
          <div className={`${sidebarExpanded ? "px-4" : "px-2"} mb-4`}>
            {sidebarExpanded && (
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                EXPLORE
              </h3>
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
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                LIBRARY
              </h3>
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
              
              {/* Add Player link here */}
              <Link
                href="/player"
                className={`group flex items-center ${
                  sidebarExpanded ? "px-2" : "justify-center"
                } py-2 text-sm font-medium rounded-md ${
                  isActive("/player")
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <PlayerIcon />
                {(sidebarExpanded || isMobile) && <span className="ml-3">Player</span>}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`${sidebarExpanded ? "p-4" : "p-2"} border-t border-gray-200`}>
          <nav className="space-y-1">
            {sidebarExpanded && (
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
            )}
            {!sidebarExpanded && !isMobile && (
              <>
                <div className="flex justify-center py-2">
                  <PlaylistIcon />
                </div>
                <div className="flex justify-center py-2">
                  <NotificationIcon />
                </div>
                <div className="flex justify-center py-2">
                  <SettingsIcon />
                </div>
              </>
            )}
          </nav>
        </div>
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
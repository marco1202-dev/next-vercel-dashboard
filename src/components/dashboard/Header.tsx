"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  SearchIcon,
  ChevronDownIcon,
  MenuIcon,
  NotificationIcon,
  ClockIcon,
  DocumentIcon,
  TagIcon,
  FilterIcon,
} from "@/components/icons";

interface HeaderProps {
  onMenuClick?: () => void;
}

// Sample suggestions for autocomplete by category
const SUGGESTIONS = {
  recent: ["Next.js routing", "React hooks"],
  popular: ["Tailwind CSS responsive design", "Redux state management", "TypeScript interfaces"],
  articles: [
    "JavaScript promises explained",
    "Building a dashboard with Next.js",
    "Modern CSS techniques",
  ],
};

// Language options for filter dropdown
const LANGUAGES = [
  "My Language",
  "English",
  "Chinese",
  "Hindi",
  "Spanish",
  "French",
  "Russian",
  "German",
  "Japanese",
  "Korean",
  "Hebrew",
];

// Content options for filter dropdown
const CONTENT_OPTIONS = ["Title & Content", "Title", "Content"];

// Sort options for filter dropdown
const SORT_OPTIONS = ["Best Match", "Popularity", "Newest", "Oldest"];

const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilterSection, setShowFilterSection] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showContentDropdown, setShowContentDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
  const [selectedContent, setSelectedContent] = useState("Title & Content");
  const [selectedSort, setSelectedSort] = useState("Best Match");

  const [filteredSuggestions, setFilteredSuggestions] = useState<{
    recent: string[];
    popular: string[];
    articles: string[];
  }>({ recent: [], popular: [], articles: [] });

  const searchRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Handle mobile menu click
  const handleMenuClick = () => {
    console.log("Mobile menu button clicked in Header");
    // Don't dispatch here, only call the prop function
    if (onMenuClick) {
      onMenuClick();
    }
  };

  // Check if we have any suggestions to show
  const hasAnySuggestions =
    filteredSuggestions.recent.length > 0 ||
    filteredSuggestions.popular.length > 0 ||
    filteredSuggestions.articles.length > 0;

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // Show some default suggestions when the search is empty
      setFilteredSuggestions({
        recent: SUGGESTIONS.recent.slice(0, 2),
        popular: SUGGESTIONS.popular.slice(0, 2),
        articles: SUGGESTIONS.articles.slice(0, 2),
      });
    } else {
      // Filter all categories based on the search term
      const filtered = {
        recent: SUGGESTIONS.recent.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        popular: SUGGESTIONS.popular.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        articles: SUGGESTIONS.articles.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
      setFilteredSuggestions(filtered);
    }
  }, [searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close filter dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target as Node) &&
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        sortRef.current &&
        !sortRef.current.contains(event.target as Node) &&
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
        setShowContentDropdown(false);
        setShowSortDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const toggleFilterSection = () => {
    setShowFilterSection(!showFilterSection);
    // Close all dropdowns when toggling filter section
    setShowLanguageDropdown(false);
    setShowContentDropdown(false);
    setShowSortDropdown(false);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
    setShowContentDropdown(false);
    setShowSortDropdown(false);
  };

  const toggleContentDropdown = () => {
    setShowContentDropdown(!showContentDropdown);
    setShowLanguageDropdown(false);
    setShowSortDropdown(false);
  };

  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
    setShowLanguageDropdown(false);
    setShowContentDropdown(false);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  const selectContent = (content: string) => {
    setSelectedContent(content);
    setShowContentDropdown(false);
  };

  const selectSort = (sort: string) => {
    setSelectedSort(sort);
    setShowSortDropdown(false);
  };

  const resetFilters = () => {
    setSelectedLanguage("All Languages");
    setSelectedContent("Title & Content");
    setSelectedSort("Best Match");
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-16 px-4">
          {/* Left section - Mobile menu */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={handleMenuClick}
              aria-label="Open menu"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>

            {/* Page title - only visible on desktop */}
            <h1 className="hidden md:block text-xl font-semibold text-gray-900 ml-2">Dashboard</h1>
          </div>

          {/* Center - Search bar */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="relative w-full flex items-center" ref={searchRef}>
              {/* Search input with left icon */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search for anything..."
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setShowSuggestions(true)}
                />
                {searchTerm && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setShowSuggestions(false);
                      }}
                      className="focus:outline-none"
                    >
                      <span className="text-gray-400 hover:text-gray-500">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* Articles dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="h-full">
                  <button className="h-full px-3 border border-l-0 border-gray-300 bg-white text-sm text-gray-700 font-medium flex items-center">
                    <span>Articles</span>
                    <ChevronDownIcon />
                  </button>
                </div>
                <button className="h-full px-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Autocomplete suggestions */}
              {showSuggestions && hasAnySuggestions && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-80 overflow-auto">
                  {/* Recent searches */}
                  {filteredSuggestions.recent.length > 0 && (
                    <div>
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                        <div className="flex items-center">
                          <ClockIcon />
                          <span className="ml-2">RECENT SEARCHES</span>
                        </div>
                      </div>
                      <ul>
                        {filteredSuggestions.recent.map((suggestion, index) => (
                          <li
                            key={`recent-${index}`}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 flex items-center"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <ClockIcon />
                            <span className="ml-3">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Popular searches */}
                  {filteredSuggestions.popular.length > 0 && (
                    <div>
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                        <div className="flex items-center">
                          <TagIcon />
                          <span className="ml-2">POPULAR SEARCHES</span>
                        </div>
                      </div>
                      <ul>
                        {filteredSuggestions.popular.map((suggestion, index) => (
                          <li
                            key={`popular-${index}`}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 flex items-center"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <TagIcon />
                            <span className="ml-3">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Articles */}
                  {filteredSuggestions.articles.length > 0 && (
                    <div>
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                        <div className="flex items-center">
                          <DocumentIcon />
                          <span className="ml-2">ARTICLES</span>
                        </div>
                      </div>
                      <ul>
                        {filteredSuggestions.articles.map((suggestion, index) => (
                          <li
                            key={`article-${index}`}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 flex items-center"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <DocumentIcon />
                            <span className="ml-3">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right section - Actions */}
          <div className="flex items-center space-x-4">
            {/* Filter button */}
            <div className="relative" ref={filterRef}>
              <button
                onClick={toggleFilterSection}
                className={`flex items-center justify-center ${
                  showFilterSection ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <FilterIcon />
              </button>
            </div>

            {/* Notification button */}
            <button className="hidden md:flex items-center justify-center text-gray-500 hover:text-gray-900 relative">
              <NotificationIcon />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* History button */}
            <button className="hidden md:flex items-center justify-center text-gray-500 hover:text-gray-900">
              <ClockIcon />
            </button>

            {/* User profile */}
            <button className="flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-8 w-8 font-medium">
              AZ
            </button>
          </div>
        </div>
      </div>

      {/* Filter section below header */}
      {showFilterSection && (
        <div className="border-t border-gray-100 bg-white">
          <div className="px-4 py-3 flex items-center">
            <span className="text-sm font-medium text-gray-700 mr-4">Filter & Sort</span>

            <div className="flex space-x-2">
              <button
                className="px-3 py-1 text-sm border border-gray-300 rounded bg-gray-100 hover:bg-gray-200 flex items-center"
                onClick={resetFilters}
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reset All
              </button>

              <div className="relative" ref={languageRef}>
                <button
                  className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 flex items-center justify-between min-w-[150px]"
                  onClick={toggleLanguageDropdown}
                >
                  <span>{selectedLanguage}</span>
                  <ChevronDownIcon />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute left-0 mt-1 w-[200px] bg-white rounded-md shadow-lg z-30 border border-gray-200">
                    <div className="py-1">
                      <div className="bg-blue-500 text-white px-4 py-2 text-sm font-medium">
                        My Language
                      </div>
                      {LANGUAGES.map((language, index) => (
                        <button
                          key={index}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedLanguage === language
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => selectLanguage(language)}
                        >
                          {language}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={contentRef}>
                <button
                  className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 flex items-center justify-between min-w-[150px]"
                  onClick={toggleContentDropdown}
                >
                  <span>{selectedContent}</span>
                  <ChevronDownIcon />
                </button>

                {showContentDropdown && (
                  <div className="absolute left-0 mt-1 w-[200px] bg-white rounded-md shadow-lg z-30 border border-gray-200">
                    <div className="py-1">
                      <div className="bg-blue-500 text-white px-4 py-2 text-sm font-medium">
                        Title & Content
                      </div>
                      {CONTENT_OPTIONS.map((option, index) => (
                        <button
                          key={index}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedContent === option
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => selectContent(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" ref={sortRef}>
                <button
                  className="px-3 py-1 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 flex items-center justify-between min-w-[150px]"
                  onClick={toggleSortDropdown}
                >
                  <span>{selectedSort}</span>
                  <ChevronDownIcon />
                </button>

                {showSortDropdown && (
                  <div className="absolute left-0 mt-1 w-[200px] bg-white rounded-md shadow-lg z-30 border border-gray-200">
                    <div className="py-1">
                      <div className="bg-blue-500 text-white px-4 py-2 text-sm font-medium">
                        Best Match
                      </div>
                      {SORT_OPTIONS.map((option, index) => (
                        <button
                          key={index}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            selectedSort === option
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => selectSort(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

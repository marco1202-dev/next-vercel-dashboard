"use client";

import React, { useState, useRef, useEffect } from "react";
import { SearchIcon } from "@/components/icons";
import { SearchSuggestions } from "./SearchSuggestions";

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

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const [filteredSuggestions, setFilteredSuggestions] = useState<{
    recent: string[];
    popular: string[];
    articles: string[];
  }>({ recent: [], popular: [], articles: [] });

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-lg lg:max-w-xs relative" ref={searchRef}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search for anything..."
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowSuggestions(true)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div className="h-full">
            <select
              id="search-category"
              name="search-category"
              className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Articles</option>
              <option>Collections</option>
              <option>Users</option>
            </select>
          </div>
        </div>
      </div>

      {/* Search suggestions dropdown */}
      {showSuggestions && hasAnySuggestions && (
        <SearchSuggestions
          filteredSuggestions={filteredSuggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

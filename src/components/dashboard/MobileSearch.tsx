import React, { useState, useEffect, useRef } from "react";
import { SearchIcon, ClockIcon, TagIcon, DocumentIcon } from "@/components/icons";

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

const MobileSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<{
    recent: string[];
    popular: string[];
    articles: string[];
  }>({ recent: [], popular: [], articles: [] });
  const searchRef = useRef<HTMLDivElement>(null);

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

  // Check if we have any suggestions to show
  const hasAnySuggestions =
    filteredSuggestions.recent.length > 0 ||
    filteredSuggestions.popular.length > 0 ||
    filteredSuggestions.articles.length > 0;

  return (
    <div className="p-4 md:hidden">
      <div className="relative" ref={searchRef}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search for anything..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowSuggestions(true)}
        />

        {/* Autocomplete suggestions with categories */}
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
  );
};

export default MobileSearch;

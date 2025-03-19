"use client";

import React from "react";
import { ClockIcon, TagIcon, DocumentIcon } from "@/components/icons";

interface SearchSuggestionsProps {
  filteredSuggestions: {
    recent: string[];
    popular: string[];
    articles: string[];
  };
  handleSuggestionClick: (suggestion: string) => void;
}

export const SearchSuggestions = ({
  filteredSuggestions,
  handleSuggestionClick,
}: SearchSuggestionsProps) => {
  return (
    <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 z-50">
      {/* Recent searches */}
      {filteredSuggestions.recent.length > 0 && (
        <div className="py-2">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 flex items-center">
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
        <div className="py-2 border-t border-gray-100">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500">
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
        <div className="py-2 border-t border-gray-100">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500">
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
  );
};

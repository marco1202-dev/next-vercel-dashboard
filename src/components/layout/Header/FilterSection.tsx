"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@/components/icons";

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

export const FilterSection = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showContentDropdown, setShowContentDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
  const [selectedContent, setSelectedContent] = useState("Title & Content");
  const [selectedSort, setSelectedSort] = useState("Best Match");

  const languageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

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

  return (
    <div
      className="bg-gray-50 border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8"
      ref={filterRef}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-medium text-gray-700 mb-2 sm:mb-0">
          Filter Results
        </div>
        <div className="flex flex-wrap gap-2">
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
                    Select Language
                  </div>
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedLanguage === "All Languages"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => selectLanguage("All Languages")}
                  >
                    All Languages
                  </button>
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
                    Search In
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
                    Sort By
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
  );
}; 
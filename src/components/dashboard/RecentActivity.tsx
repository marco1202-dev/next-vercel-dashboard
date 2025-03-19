import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-medium text-gray-900">Recent Activity</h3>
      </div>
      <div className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start">
              <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-sm sm:text-base">
                {i + 1}
              </div>
              <div className="ml-3">
                <p className="text-xs sm:text-sm font-medium text-gray-900">
                  Counter {i % 2 === 0 ? "increased" : "decreased"}
                </p>
                <p className="text-xs text-gray-500">
                  {i + 1} minute{i !== 0 ? "s" : ""} ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity; 
import React from "react";

interface ActivityPanelProps {
  count: number;
}

const ActivityPanel = ({ count }: ActivityPanelProps) => {
  return (
    <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200">
        <h3 className="text-base sm:text-lg font-medium text-gray-900">Activity Overview</h3>
      </div>
      <div className="p-4 sm:p-6">
        <div className="h-48 sm:h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-500">{count}</div>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-500 px-2 sm:px-0">
              This counter value is stored in Redux and shared across all pages.
              <br className="hidden sm:block" />
              Try changing it and navigating between pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPanel; 
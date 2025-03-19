import React, { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  actions?: ReactNode;
}

const StatCard = ({ title, value, icon, change, actions }: StatCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{value}</h3>
        </div>
        <div className="p-2 bg-blue-50 rounded-md">{icon}</div>
      </div>
      {actions && <div className="flex mt-4 space-x-2 flex-wrap sm:flex-nowrap">{actions}</div>}
      {change && (
        <div className="mt-4">
          <div className="flex items-center">
            <span className="text-sm font-medium text-green-600">{change}</span>
            <span className="ml-2 text-xs text-gray-500">vs last period</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;

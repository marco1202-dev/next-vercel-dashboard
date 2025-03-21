import React from "react";

export const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className || "h-4 w-4 mr-1"} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

export default ClockIcon; 
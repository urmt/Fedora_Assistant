import React from 'react';

const ProgressIndicator = ({ progress = 0, showPercentage = true }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        {showPercentage && (
          <span className="text-sm font-medium text-gray-700">
            {progress}% Complete
          </span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        >
          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>
      </div>
      {progress < 100 && (
        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
          <div className="animate-pulse">●</div>
          <span>Please wait while we set things up...</span>
        </div>
      )}
    </div>
  );
};

export default ProgressIndicator;
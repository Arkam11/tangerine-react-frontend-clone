import React from 'react';
export function MetricCard({
  title,
  value,
  change,
  period,
  days,
  color
}) {
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="text-xs text-gray-500">
          <span>{days} days</span>
          <span className="mx-2">/</span>
          <span>7 days</span>
        </div>
      </div>
      <div className="mb-1">
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <div className={`text-xs ${color === 'blue' ? 'text-blue-500' : color === 'green' ? 'text-green-500' : 'text-orange-500'}`}>
          <span>{change}</span>
          <span className="ml-1 text-gray-500">{period}</span>
        </div>
      </div>
    </div>;
}
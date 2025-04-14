import React from 'react';
import { SearchIcon, BellIcon, SettingsIcon, ChevronRightIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-gray-500 text-sm">
            <span>/ Dashboards</span>
            <span className="mx-1">/</span>
            <span className="text-gray-800">Sales</span>
          </div>
          <button className="ml-6 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <input type="text" placeholder="Search here" className="pl-8 pr-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm" />
            <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <SettingsIcon size={18} />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
            <BellIcon size={18} />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>
      </div>
    </header>;
}
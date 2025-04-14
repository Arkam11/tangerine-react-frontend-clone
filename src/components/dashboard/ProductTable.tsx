import React from 'react';
import { SettingsIcon } from 'lucide-react';
export function ProductTable() {
  return <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-xs uppercase text-gray-500 border-b">
            <th className="pb-3 text-left font-medium">Product</th>
            <th className="pb-3 text-right font-medium">Value</th>
            <th className="pb-3 text-right font-medium">Ads Spent</th>
            <th className="pb-3 text-right font-medium">Refunds</th>
            <th className="pb-3 text-right"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm border-b border-gray-100">
            <td className="py-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-800">
                    Nike v22 Running
                  </div>
                  <div className="text-xs text-gray-500">
                    $130.00 · 2500 orders
                  </div>
                </div>
              </div>
            </td>
            <td className="py-4 text-right font-medium text-gray-800">
              $130,992
            </td>
            <td className="py-4 text-right font-medium text-gray-800">
              $9,500
            </td>
            <td className="py-4 text-right font-medium text-gray-800">13</td>
            <td className="py-4 text-right">
              <button className="text-gray-400">
                <SettingsIcon size={16} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>;
}
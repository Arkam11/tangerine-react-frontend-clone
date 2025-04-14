import React from 'react';
import { MetricCard } from '../dashboard/MetricCard';
import { ChannelsPieChart } from '../dashboard/ChannelsPieChart';
import { RevenueLineChart } from '../dashboard/RevenueLineChart';
import { SalesByAgeChart } from '../dashboard/SalesByAgeChart';
import { CountryTable } from '../dashboard/CountryTable';
import { ProductTable } from '../dashboard/ProductTable';
export function MainContent() {
  return <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
      <div className="mb-4">
        <h2 className="text-sm font-medium text-gray-800 mb-4">Sales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard title="Sales" value="$230,220" change="+55%" period="since last month" days={5} color="blue" />
          <MetricCard title="Customers" value="3,200" change="+12%" period="since last month" days={4} color="green" />
          <MetricCard title="Avg. Revenue" value="$1,200" change="+$213" period="since last month" days={6} color="orange" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ChannelsPieChart />
        <RevenueLineChart />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SalesByAgeChart />
        <CountryTable />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-sm font-medium text-gray-800 mb-4">
          Top Selling Products
        </h2>
        <ProductTable />
      </div>
    </div>;
}
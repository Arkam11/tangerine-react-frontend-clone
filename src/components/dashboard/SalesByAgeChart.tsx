import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const data = [{
  age: '18-24',
  sales: 30
}, {
  age: '25-34',
  sales: 60
}, {
  age: '35-44',
  sales: 40
}, {
  age: '45-54',
  sales: 90
}, {
  age: '55-64',
  sales: 55
}, {
  age: '65+',
  sales: 45
}];
export function SalesByAgeChart() {
  return <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-800 mb-6">Sales by Age</h3>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{
          top: 5,
          right: 30,
          left: 40,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis dataKey="age" type="category" axisLine={false} tickLine={false} width={40} tick={{
            fontSize: 12
          }} />
            <Bar dataKey="sales" fill="#1e3a8a" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>;
}
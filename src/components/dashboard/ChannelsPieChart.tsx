import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { InfoIcon } from 'lucide-react';
const data = [{
  name: 'Facebook',
  value: 30,
  color: '#4267B2'
}, {
  name: 'Direct',
  value: 25,
  color: '#E91E63'
}, {
  name: 'Organic',
  value: 15,
  color: '#FF9800'
}, {
  name: 'Referral',
  value: 30,
  color: '#37474F'
}];
export function ChannelsPieChart() {
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-medium text-gray-800">Channels</h3>
        <button className="text-gray-400">
          <InfoIcon size={18} />
        </button>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={0} outerRadius={70} paddingAngle={0} dataKey="value">
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2">
          {data.map((item, index) => <div key={index} className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full mr-2" style={{
            backgroundColor: item.color
          }}></div>
              <span className="text-xs text-gray-700">{item.name}</span>
            </div>)}
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-600">
        <p>
          More than <span className="font-medium">1,200,000</span> sales are
          made using referral marketing, and{' '}
          <span className="font-medium">700,000</span> are from social media.
        </p>
        <button className="mt-2 text-blue-500 uppercase text-xs font-medium">
          Read More
        </button>
      </div>
    </div>;
}
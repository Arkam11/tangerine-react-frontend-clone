import React from 'react';
const countries = [{
  country: 'United States',
  flag: '🇺🇸',
  sales: 2500,
  revenue: '29.9%'
}, {
  country: 'Germany',
  flag: '🇩🇪',
  sales: 3600,
  revenue: '40.22%'
}, {
  country: 'Great Britain',
  flag: '🇬🇧',
  sales: 1400,
  revenue: '23.44%'
}, {
  country: 'Brasil',
  flag: '🇧🇷',
  sales: 562,
  revenue: '32.14%'
}, {
  country: 'Australia',
  flag: '🇦🇺',
  sales: 400,
  revenue: '56.83%'
}];
export function CountryTable() {
  return <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-sm font-medium text-gray-800 mb-6">
        Sales by Country
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-500 border-b">
              <th className="pb-2 text-left font-medium">Country</th>
              <th className="pb-2 text-right font-medium">Sales</th>
              <th className="pb-2 text-right font-medium">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => <tr key={index} className="text-sm border-b border-gray-100">
                <td className="py-3">
                  <div className="flex items-center">
                    <span className="mr-2 text-lg">{country.flag}</span>
                    <div>
                      <div className="text-xs text-gray-500">Country</div>
                      <div className="font-medium text-gray-800">
                        {country.country}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-right">
                  <div className="text-xs text-gray-500">Sales</div>
                  <div className="font-medium text-gray-800">
                    {country.sales}
                  </div>
                </td>
                <td className="py-3 text-right">
                  <div className="text-xs text-gray-500">Revenue</div>
                  <div className="font-medium text-gray-800">
                    {country.revenue}
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
}
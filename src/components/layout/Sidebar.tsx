import React, { Component } from 'react';
import { LayoutDashboardIcon, LineChartIcon, ShoppingBagIcon, FileTextIcon, SettingsIcon, UsersIcon, KeyIcon, LayersIcon, ClipboardListIcon, PencilIcon } from 'lucide-react';
export function Sidebar() {
  return <div className="w-[125px] min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-center">
          <FileTextIcon className="h-6 w-6 text-white" />
          <span className="text-xs ml-2 text-white font-medium">
            Material Dashboard PRO
          </span>
        </div>
      </div>
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
            B
          </div>
          <span className="text-sm ml-2 text-white">Brooklyn Miro</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="py-2">
          <div className="px-4 py-2 text-xs text-gray-500 uppercase">Main</div>
          <SidebarItem icon={<LayoutDashboardIcon size={18} />} label="Dashboards" active />
          <SidebarItem icon={<LineChartIcon size={18} />} label="Analytics" />
          <SidebarItem icon={<ShoppingBagIcon size={18} />} label="Sales" />
        </div>
        <div className="py-2">
          <div className="px-4 py-2 text-xs text-gray-500 uppercase">Pages</div>
          <SidebarItem icon={<FileTextIcon size={18} />} label="Pages" />
          <SidebarItem icon={<LayersIcon size={18} />} label="Applications" />
          <SidebarItem icon={<UsersIcon size={18} />} label="Ecommerce" />
          <SidebarItem icon={<KeyIcon size={18} />} label="Authentication" />
        </div>
        <div className="py-2">
          <div className="px-4 py-2 text-xs text-gray-500 uppercase">Docs</div>
          <SidebarItem icon={<ClipboardListIcon size={18} />} label="Basic" />
          <SidebarItem icon={<SettingsIcon size={18} />} label="Components" />
          <SidebarItem icon={<PencilIcon size={18} />} label="Change Log" />
        </div>
      </div>
    </div>;
}
function SidebarItem({
  icon,
  label,
  active = false
}) {
  return <div className={`flex flex-col items-center px-4 py-3 text-xs ${active ? 'bg-blue-900 text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
      <div className="flex items-center justify-center">{icon}</div>
      <span className="mt-1">{label}</span>
    </div>;
}
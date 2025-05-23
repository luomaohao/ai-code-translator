import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

interface TabListProps {
  tabs: Tab[];
  onTabChange: (tabId: string) => void;
  activeTab: string;
  className?: string;
}

export default function TabList({ tabs, onTabChange, activeTab, className = '' }: TabListProps) {
  return (
    <div className={`flex bg-gray-200 rounded-md p-1 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center justify-center px-4 py-2 rounded text-sm font-medium transition-all ${
            activeTab === tab.id
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
} 
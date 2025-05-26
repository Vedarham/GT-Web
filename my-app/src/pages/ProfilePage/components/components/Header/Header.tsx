import React from 'react';
import { Bell, Settings, Wallet } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-white animate-pulse">
            GamersHub
          </div>
          <Navigation />
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Bell className="w-6 h-6 text-white hover:text-blue-200 transition-colors cursor-pointer" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </div>
          <Settings className="w-6 h-6 text-white hover:text-blue-200 transition-colors cursor-pointer" />
          <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-1">
            <Wallet className="w-5 h-5 text-white" />
            <span className="text-white font-medium">₹500</span>
          </div>
        </div>
      </div>
    </header>
  );
}
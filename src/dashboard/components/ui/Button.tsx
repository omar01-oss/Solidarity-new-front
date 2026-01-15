import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-5 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left Section - Welcome Message */}
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Welcome back, Omar</h1>
          <p className="text-gray-600 text-sm mt-1">Here's what's happening with your mental health journey</p>
        </div>
        
        {/* Right Section - Search, Notifications, Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search appointments, therapists..." 
              className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-72 transition-all duration-300"
            />
          </div>
          
          {/* Notification Bell */}
          <button className="relative p-2.5 rounded-xl bg-gray-100 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 group">
            <Bell size={20} className="text-blue-900 group-hover:text-orange-600" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse shadow-lg"></span>
          </button>

          {/* Profile Section */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer group">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Omar" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-orange-500 group-hover:border-orange-600 transition-all duration-300"
            />
            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-blue-900 group-hover:text-orange-600 transition-colors">Omar Ben Ali</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
            <ChevronDown size={16} className="text-gray-400 group-hover:text-orange-600 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
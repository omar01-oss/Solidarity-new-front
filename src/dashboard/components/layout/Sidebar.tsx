import React from "react";
import { NavLink } from "react-router-dom";
import { BarChart3, Calendar, MessageSquare, Users, Settings, Heart, Activity, HelpCircle } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 shadow-2xl z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
          <Heart className="text-white" size={20} />
        </div>
        <span className="text-2xl font-bold">Solidarity</span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-orange-500 text-white shadow-lg transform scale-105" 
                : "text-blue-100 hover:bg-blue-800/50"
            }`
          }
        >
          <BarChart3 size={20} />
          <span className="font-medium">Overview</span>
        </NavLink>

        <NavLink
          to="/dashboard/appointments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-orange-500 text-white shadow-lg transform scale-105" 
                : "text-blue-100 hover:bg-blue-800/50"
            }`
          }
        >
          <Calendar size={20} />
          <span className="font-medium">Appointments</span>
        </NavLink>

        <NavLink
          to="/dashboard/community"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-orange-500 text-white shadow-lg transform scale-105" 
                : "text-blue-100 hover:bg-blue-800/50"
            }`
          }
        >
          <MessageSquare size={20} />
          <span className="font-medium">Community</span>
        </NavLink>

        <NavLink
          to="/dashboard/therapists"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-orange-500 text-white shadow-lg transform scale-105" 
                : "text-blue-100 hover:bg-blue-800/50"
            }`
          }
        >
          <Users size={20} />
          <span className="font-medium">Therapists</span>
        </NavLink>

        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-orange-500 text-white shadow-lg transform scale-105" 
                : "text-blue-100 hover:bg-blue-800/50"
            }`
          }
        >
          <Activity size={20} />
          <span className="font-medium">Analytics</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive 
                ? "bg-orange-500 text-white shadow-lg transform scale-105" 
                : "text-blue-100 hover:bg-blue-800/50"
            }`
          }
        >
          <Settings size={20} />
          <span className="font-medium">Settings</span>
        </NavLink>
      </nav>

      {/* Help Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-blue-800/50 rounded-xl p-4 border border-blue-700">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle size={18} className="text-blue-200" />
            <p className="text-sm text-blue-200 font-medium">Need Help?</p>
          </div>
          <button className="w-full mt-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
        
        <div className="text-xs text-blue-300 mt-4 text-center">
          v2.0 • Solidarity Platform
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
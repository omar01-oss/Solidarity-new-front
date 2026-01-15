import React from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MoodStatsWidget from "./components/widgets/MoodStatsWidget";
import AppointmentsWidget from "./components/widgets/AppointmentsWidget";
import TherapyProgressWidget from "./components/widgets/TherapyProgressWidget";
import CommunityWidget from "./components/widgets/CommunityWidget";
import StatsWidget from "./components/widgets/StatsWidget";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import type { LucideIcon } from "lucide-react";
import { Heart, Calendar, Award, Clock, TrendingUp, Activity, Bell } from "lucide-react";

const DashboardPage: React.FC = () => {
  // Sample chart data
  const weeklyMoodData = [65, 78, 82, 75, 88, 92, 85];
  const maxMood = Math.max(...weeklyMoodData);

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20">
      {/* Sidebar - Fixed */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="ml-72">
        {/* Header - Sticky */}
        <Header />
        
        {/* Dashboard Content */}
        <main className="p-8 space-y-6">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsWidget 
              icon={Heart}
              title="Mood Score"
              value="8.4/10"
              change="+12%"
              trend="up"
              color="orange"
            />
            <StatsWidget 
              icon={Calendar}
              title="Sessions Completed"
              value="24"
              change="+3"
              trend="up"
              color="blue"
            />
            <StatsWidget 
              icon={Award}
              title="Goals Achieved"
              value="18/25"
              change="72%"
              trend="up"
              color="teal"
            />
            <StatsWidget 
              icon={Clock}
              title="Streak Days"
              value="14"
              change="+2"
              trend="up"
              color="purple"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Weekly Mood Tracker - Spans 2 columns */}
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-blue-900">Weekly Mood Tracker</h2>
                  <p className="text-gray-600 text-sm mt-1">Your emotional journey this week</p>
                </div>
                <Button variant="ghost" className="text-sm py-2 px-4">
                  View Details
                </Button>
              </div>
              
              {/* Chart Visualization */}
              <div className="space-y-4">
                <div className="flex items-end gap-2 h-48 px-4">
                  {weeklyMoodData.map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gray-100 rounded-t-xl overflow-hidden flex-1 flex items-end">
                        <div 
                          className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-xl transition-all duration-1000 hover:from-orange-600 hover:to-orange-500 cursor-pointer relative group"
                          style={{ height: `${(value / maxMood) * 100}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {value}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between text-sm text-gray-500 px-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day} className="flex-1 text-center font-medium">{day}</span>
                  ))}
                </div>
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-1">Average</p>
                  <p className="text-2xl font-bold text-blue-900">8.1</p>
                  <div className="mt-2 flex items-center justify-center gap-1 text-green-600">
                    <TrendingUp size={14} />
                    <span className="text-xs font-semibold">+5%</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-1">Best Day</p>
                  <p className="text-2xl font-bold text-orange-600">Sat</p>
                  <p className="text-xs text-gray-500 mt-2">92% mood</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-1">Trend</p>
                  <p className="text-2xl font-bold text-green-600">↗</p>
                  <p className="text-xs text-gray-500 mt-2">Improving</p>
                </div>
              </div>
            </Card>

            {/* Appointments Widget */}
            <AppointmentsWidget />
          </div>

          {/* Secondary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Mood Stats */}
            <MoodStatsWidget />
            
            {/* Therapy Progress */}
            <TherapyProgressWidget />

            {/* Quick Actions Card */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-md">
                  <Activity className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-blue-900">Quick Actions</h3>
              </div>

              <div className="space-y-3">
                <button className="w-full p-4 bg-gradient-to-r from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-xl text-left hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-blue-900 group-hover:text-blue-700">Log Your Mood</p>
                      <p className="text-sm text-gray-600 mt-1">Track how you're feeling today</p>
                    </div>
                    <div className="text-2xl">😊</div>
                  </div>
                </button>

                <button className="w-full p-4 bg-gradient-to-r from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-xl text-left hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-blue-900 group-hover:text-orange-700">Start Exercise</p>
                      <p className="text-sm text-gray-600 mt-1">5-min breathing meditation</p>
                    </div>
                    <div className="text-2xl">🧘</div>
                  </div>
                </button>

                <button className="w-full p-4 bg-gradient-to-r from-teal-50 to-teal-100/50 border-2 border-teal-200 rounded-xl text-left hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-blue-900 group-hover:text-teal-700">Join Community</p>
                      <p className="text-sm text-gray-600 mt-1">Connect with others</p>
                    </div>
                    <div className="text-2xl">👥</div>
                  </div>
                </button>
              </div>
            </Card>
          </div>

          {/* Community Widget - Full Width */}
          <CommunityWidget />

          {/* Notifications Banner */}
          <Card className="p-6 bg-gradient-to-r from-blue-900 to-blue-800 border-blue-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Bell className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Stay Connected</h3>
                  <p className="text-blue-200 text-sm mt-1">Enable notifications to never miss a session or community update</p>
                </div>
              </div>
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                Enable Now
              </Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
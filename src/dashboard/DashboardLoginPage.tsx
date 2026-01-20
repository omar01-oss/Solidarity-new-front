import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../pages/auth/components/LoginForm";

const DashboardLoginPage: React.FC = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center px-2">
    <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl p-6">
      {/* Header */}
      <div className="mb-5 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-indigo-400 mb-1">
          Admin
        </p>
        <h1 className="text-xl font-bold text-white">Dashboard Login</h1>
        <p className="text-xs text-slate-400 mt-1">
          Sign in with your administrator account.
        </p>
      </div>

      {/* Form */}
      <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-4">
        <LoginForm />

        {/* Links */}
        <div className="mt-4 space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <Link
              to=""
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.25em]">
              <span className="px-2 bg-slate-900 text-slate-500">
                Other access
              </span>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center w-full py-2.5 px-3 border border-slate-700 hover:border-indigo-500 rounded-lg text-xs font-medium text-slate-100 hover:bg-slate-900/70 transition-all duration-200"
            >
              Go to regular user login
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-4 text-[11px] text-center text-slate-500">
        Admin access only.
      </p>
    </div>
  </div>
);

export default DashboardLoginPage;


import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-950">
    <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md shadow-lg">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">Sign In</h2>
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;

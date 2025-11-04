import React from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-950">
    <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">Sign Up</h2>
      <RegisterForm />
    </div>
  </div>
);

export default RegisterPage;

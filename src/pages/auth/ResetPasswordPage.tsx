import React from "react";
import ResetPasswordForm from "./components/ResetPasswordForm";

const ResetPasswordPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-950">
    <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">Reset Password</h2>
      <ResetPasswordForm />
    </div>
  </div>
);

export default ResetPasswordPage;

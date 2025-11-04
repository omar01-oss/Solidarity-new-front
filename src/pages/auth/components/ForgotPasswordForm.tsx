import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const ForgotPasswordForm: React.FC = () => {
  const { forgotPassword, loading, error } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    forgotPassword(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 rounded bg-gray-800 text-white"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-600 hover:bg-yellow-700 py-2 rounded text-white font-semibold"
      >
        {loading ? "Sending..." : "Send Reset Link"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </form>
  );
};

export default ForgotPasswordForm;

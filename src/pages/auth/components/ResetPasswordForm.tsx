import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useParams } from "react-router-dom";

const ResetPasswordForm: React.FC = () => {
  const { resetPassword, loading, error } = useAuth();
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(token || "", password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="password"
        placeholder="New Password"
        className="w-full p-3 rounded bg-gray-800 text-white"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
      >
        {loading ? "Updating..." : "Reset Password"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </form>
  );
};

export default ResetPasswordForm;

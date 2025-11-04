import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginForm: React.FC = () => {
  const { login, loading, error } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
        value={form.email}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={handleChange}
        value={form.password}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded text-white font-semibold transition-colors duration-200"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </form>
  );
};

export default LoginForm;

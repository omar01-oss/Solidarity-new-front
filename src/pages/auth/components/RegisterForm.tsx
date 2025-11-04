import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const RegisterForm: React.FC = () => {
  const { register, loading, error } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-3 rounded bg-gray-800 text-white"
        onChange={handleChange}
        value={form.name}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 rounded bg-gray-800 text-white"
        onChange={handleChange}
        value={form.email}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-3 rounded bg-gray-800 text-white"
        onChange={handleChange}
        value={form.password}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 py-2 rounded text-white font-semibold"
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </form>
  );
};

export default RegisterForm;

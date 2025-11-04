// src/pages/auth/services/auth.service.ts
import axios from "axios";
import type { User, AuthResponse } from "../auth.types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";

export const authService = {
  register: async (user: User): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/register`, user, { withCredentials: true });
    return response.data;
  },
  login: async (credentials: { email: string; password: string }): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/login`, credentials, { withCredentials: true });
    return response.data;
  },
  forgotPassword: async (email: string): Promise<{ message: string }> => {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  },
  resetPassword: async (token: string, password: string): Promise<{ message: string }> => {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
    return response.data;
  },
};

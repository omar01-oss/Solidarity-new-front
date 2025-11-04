// src/pages/auth/auth.types.ts

export interface User {
  _id?: string;
  name?: string;
  email: string;
  password?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

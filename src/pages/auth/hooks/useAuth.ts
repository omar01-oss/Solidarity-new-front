// src/pages/auth/hooks/useAuth.ts
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { loginUser, registerUser, forgotPasswordUser, resetPasswordUser, logout } from "../../../redux/slices/auth.slice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  return {
    user: auth?.user ?? null,
    loading: auth?.loading ?? false,
    error: auth?.error ?? null,
    login: (data: { email: string; password: string }) => dispatch(loginUser(data)),
    register: (data: { name: string; email: string; password: string }) => dispatch(registerUser(data)),
    forgotPassword: (email: string) => dispatch(forgotPasswordUser({ email })),
    resetPassword: (token: string, password: string) => dispatch(resetPasswordUser({ token, password })),
    logout: () => dispatch(logout()),
  };
};

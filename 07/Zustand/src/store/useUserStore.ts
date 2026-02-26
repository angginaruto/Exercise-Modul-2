import { create } from "zustand";

interface UserState {
  email: string;
  password: string;
  isLoggedIn: boolean;
  setUser: (email: string, password: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  email: "",
  password: "",
  isLoggedIn: false,
  setUser: (email, password) => set({ email, password, isLoggedIn: true }),
  logout: () => set({ email: "", password: "", isLoggedIn: false }),
}));

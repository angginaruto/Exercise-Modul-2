import React, { useState } from "react";
import { useUserStore } from "../store/useUserStore";

export default function SignIn() {
  // 1. Deklarasi State (Cukup satu kali saja untuk masing-masing)
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  // 2. Ambil fungsi setUser dari Zustand
  const setUser = useUserStore((state) => state.setUser);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputEmail && inputPassword) {
      // Mengirimkan DUA argumen ke store
      setUser(inputEmail, inputPassword);
    } else {
      alert("Email dan Password harus diisi!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
      <h2 className="text-[#494C6B] text-2xl font-bold mb-6 font-josefin">
        SIGN IN
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        {/* INPUT EMAIL */}
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border border-[#E3E4F1] rounded outline-none text-[#494C6B] font-josefin"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          required
        />

        {/* INPUT PASSWORD (Baru ditambahkan agar variabel inputPassword ada isinya) */}
        <input
          type="password"
          placeholder="Enter your password"
          className="p-3 border border-[#E3E4F1] rounded outline-none text-[#494C6B] font-josefin"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-[#55DDFF] to-[#C058F3] text-white p-3 rounded font-bold hover:opacity-90 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}

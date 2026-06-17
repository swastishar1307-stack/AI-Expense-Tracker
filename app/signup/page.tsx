"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "../ThemeContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isDark, setIsDark } = useTheme();

  const handleSignup = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const bgPage = isDark ? "bg-[#15131f]" : "bg-[#f3f4f8]";
  const cardBg = isDark ? "bg-[#1f1c2e]" : "bg-[#f0eefb]";
  const cardBorder = isDark ? "border-[#2e2a45]" : "border-[#e3dff7]";
  const titleColor = isDark ? "text-white" : "text-[#3c3489]";
  const subColor = isDark ? "text-[#7f77dd]" : "text-[#534ab7]";
  const inputBg = isDark ? "bg-[#15131f]" : "bg-white";
  const inputBorder = isDark ? "border-[#2e2a45]" : "border-[#d9d4f0]";
  const inputText = isDark ? "text-[#afa9ec]" : "text-[#7f77dd]";
  const btnBg = isDark ? "bg-[#7f77dd]" : "bg-[#cecbf6]";
  const btnText = isDark ? "text-[#eeedfe]" : "text-[#3c3489]";

  return (
     <div className={`flex min-h-screen items-center justify-center ${bgPage} transition-colors duration-300`}>
      
      <div className={`fixed top-6 right-6 flex items-center rounded-full p-1 gap-1 ${cardBg} border ${cardBorder}`}>
  <button
    onClick={() => setIsDark(true)}
    className={`w-9 h-9 rounded-full flex items-center justify-center text-base transition-colors ${
      isDark ? btnBg : "opacity-40"
    }`}
  >
    🌙
  </button>
  <button
    onClick={() => setIsDark(false)}
    className={`w-9 h-9 rounded-full flex items-center justify-center text-base transition-colors ${
      !isDark ? btnBg : "opacity-40"
    }`}
  >
    ☀️
  </button>
</div>

      <div className={`w-full max-w-sm rounded-2xl ${cardBg} border ${cardBorder} p-8 shadow-xl transition-colors duration-300`}>
        
        <h1 className={`text-2xl font-bold text-center mb-2 ${titleColor}`}>
          NOXTRACK
        </h1>
        <p className={`text-center mb-6 ${subColor}`}>
          Create your account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full mb-4 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full mb-4 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full mb-6 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />

        <button
          onClick={handleSignup}
          className={`w-full rounded-lg ${btnBg} ${btnText} py-3 font-semibold transition`}
        >
          Sign Up
        </button>

        <p className={`text-center text-sm mt-4 ${subColor}`}>
      Already have an account?{" "}
     <Link href="/" className="underline">Login</Link>
        </p>
      </div>
      </div>
  );
}
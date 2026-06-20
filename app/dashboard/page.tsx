"use client";

import { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function Dashboard() {
  const { isDark, setIsDark } = useTheme();

  // Sample data for now — Yashika will connect real data later
  const [totalSpent] = useState(8450);
  const [budget] = useState(15000);
  const remaining = budget - totalSpent;

  const transactions = [
    { id: 1, title: "Lunch at canteen", amount: 120, category: "Food" },
    { id: 2, title: "Metro recharge", amount: 200, category: "Travel" },
    { id: 3, title: "Notebook & pens", amount: 350, category: "College" },
    { id: 4, title: "Movie night", amount: 450, category: "Entertainment" },
  ];

  const bgPage = isDark ? "bg-[#15131f]" : "bg-[#f3f4f8]";
  const cardBg = isDark ? "bg-[#1f1c2e]" : "bg-[#f0eefb]";
  const cardBorder = isDark ? "border-[#2e2a45]" : "border-[#e3dff7]";
  const titleColor = isDark ? "text-white" : "text-[#3c3489]";
  const subColor = isDark ? "text-[#7f77dd]" : "text-[#534ab7]";
  const btnBg = isDark ? "bg-[#7f77dd]" : "bg-[#cecbf6]";
  const btnText = isDark ? "text-[#eeedfe]" : "text-[#3c3489]";

  return (
    <div className={`min-h-screen ${bgPage} transition-colors duration-300 p-6`}>

      {/* Theme toggle */}
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

      <h1 className={`text-2xl font-bold mb-6 ${titleColor}`}>
        Dashboard
      </h1>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        
        <div className={`rounded-2xl ${cardBg} border ${cardBorder} p-6`}>
          <p className={`text-sm mb-1 ${subColor}`}>Total Spent</p>
          <p className={`text-3xl font-bold ${titleColor}`}>₹{totalSpent}</p>
        </div>

        <div className={`rounded-2xl ${cardBg} border ${cardBorder} p-6`}>
          <p className={`text-sm mb-1 ${subColor}`}>Remaining Budget</p>
          <p className={`text-3xl font-bold ${titleColor}`}>₹{remaining}</p>
        </div>

      </div>

      {/* Recent transactions */}
      <div className={`rounded-2xl ${cardBg} border ${cardBorder} p-6`}>
        <h2 className={`text-lg font-semibold mb-4 ${titleColor}`}>
          Recent Transactions
        </h2>

        <div className="flex flex-col gap-3">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center border-b pb-2 last:border-b-0"
              style={{ borderColor: isDark ? "#2e2a45" : "#e3dff7" }}
            >
              <div>
                <p className={`text-sm font-medium ${titleColor}`}>{t.title}</p>
                <p className={`text-xs ${subColor}`}>{t.category}</p>
              </div>
              <p className={`text-sm font-semibold ${titleColor}`}>₹{t.amount}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
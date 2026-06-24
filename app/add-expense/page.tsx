"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "../ThemeContext";

export default function AddExpense() {
  const { isDark, setIsDark } = useTheme();
  const router = useRouter();

  const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("Food");
const [date, setDate] = useState("");
const [note, setNote] = useState("");

  const categories = ["Food", "Travel", "Shopping", "Recharge", "Entertainment", "College"];

  const handleAddExpense = () => {
  console.log("Title:", title);
  console.log("Amount:", amount);
  console.log("Category:", category);
  console.log("Date:", date);
  console.log("Note:", note);
  router.push("/dashboard");
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
    <div className={`min-h-screen ${bgPage} transition-colors duration-300 flex items-center justify-center p-6`}>

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

      <div className={`w-full max-w-md rounded-2xl ${cardBg} border ${cardBorder} p-8 shadow-xl`}>

        <h1 className={`text-2xl font-bold text-center mb-6 ${titleColor}`}>
          Add Expense
        </h1>

        <label className={`text-sm mb-1 block ${subColor}`}>Amount (₹)</label>
        <input
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`w-full mb-4 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />
           
<label className={`text-sm mb-1 block ${subColor}`}>Title</label>
            <input
              type="text"
               placeholder="e.g. Lunch at canteen"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className={`w-full mb-4 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />



        <label className={`text-sm mb-1 block ${subColor}`}>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`w-full mb-4 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label className={`text-sm mb-1 block ${subColor}`}>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full mb-4 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />

        <label className={`text-sm mb-1 block ${subColor}`}>Note</label>
        <input
          type="text"
          placeholder="e.g. Maggie + Coffee"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={`w-full mb-6 rounded-lg ${inputBg} border ${inputBorder} px-4 py-3 ${inputText} outline-none`}
        />

        <button
          onClick={handleAddExpense}
          className={`w-full rounded-lg ${btnBg} ${btnText} py-3 font-semibold transition`}
        >
          Add Expense
        </button>

      </div>
    </div>
  );
}
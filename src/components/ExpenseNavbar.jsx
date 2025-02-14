import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaPiggyBank } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const ExpenseNavbar = () => {
  const tabs = [
    { name: "Real Expenses", path: "/", icon: <FaWallet /> },
    { name: "Shown Expenses", path: "/shown", icon: <IoEyeOutline /> },
    { name: "Savings", path: "/savings", icon: <FaPiggyBank /> },
    { name: "Weekly View", path: "/weekly-view", icon: <FaRegCalendarAlt /> },
  ];

  return (
    <div className="flex items-center justify-between p-4 border shadow-sm mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mr-5">Expense Manager</h1>
      <div className="flex gap-3">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={tab.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive ? "bg-green-600 text-white" : "bg-white border text-gray-800"
              }`
            }
          >
            {tab.icon}
            <span>{tab.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ExpenseNavbar;

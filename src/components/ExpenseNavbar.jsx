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
    <div className='p  py-6 w-full  items-center  bg-green-50  gap-5 justify-between rounded-2xl '>
     <div className="flex items-center flex-wrap justify-between   shadow-sm ">
      <h1 className="text-2xl font-bold text-gray-900 mr-5">Expense Manager</h1>
      <div className="flex gap-3">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={tab.path}
            className={({ isActive }) =>
              `flex items-center gap-2  rounded-lg transition-all duration-300 ${
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
   </div>
  );
};

export default ExpenseNavbar;

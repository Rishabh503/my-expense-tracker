import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaWallet, FaPiggyBank } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const ExpenseNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const tabs = [
    { name: "Real Expenses", path: "/", icon: <FaWallet /> },
    { name: "Shown Expenses", path: "/shown", icon: <IoEyeOutline /> },
    { name: "Savings", path: "/savings", icon: <FaPiggyBank /> },
    { name: "Weekly View", path: "/weekly-view", icon: <FaRegCalendarAlt /> },
  ];

  return (
    <div className='px-10 py-4 sm:flex sm:justify-between bg-green-50 shadow-md rounded-xl w-full'>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Expense Manager</h1>
        <button 
          className="lg:hidden text-2xl focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={`lg:flex ${isOpen ? "block" : "hidden"} mt-3 lg:mt-0 lg:gap-3`}>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-3">
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
    </div>
  );
};

export default ExpenseNavbar;

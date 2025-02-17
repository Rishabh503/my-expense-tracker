import React from "react";

const FrontPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 relative">
      {/* Start Button */}
      

      {/* Main Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          YOUR ONE STOP SOLUTION FOR ALL YOUR EXPENSES
        </h1>

        {/* Money-related Theme */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Manage Your Money Smartly</h2>
          <p className="text-lg mt-2">Track, Save & Invest with Ease!</p>
        </div>

        {/* Features */}
        <p className="text-xl font-semibold text-gray-700">
          ADD • WITHDRAW • SAVE • ENJOY
        </p>

        {/* Quotes Section */}
        <div className="space-y-4 text-gray-600">
          <p>"Do not save what is left after spending, but spend what is left after saving." – Warren Buffett</p>
          <p>"A budget is telling your money where to go instead of wondering where it went." – Dave Ramsey</p>
          <p>"Financial freedom is available to those who learn about it and work for it." – Robert Kiyosaki</p>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

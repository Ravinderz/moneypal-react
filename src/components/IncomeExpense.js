import React from "react";

export const IncomeExpense = () => {
  return (
    <div className="incomeExpense shadow bg-white w-auto">
      <div className="income w-100 text-center">
        <h4>Income</h4>
        <span>0.00</span>
      </div>
      <div className = "expense w-100 text-center">
        <h4>Expense</h4>
        <span>0.00</span>
      </div>
    </div>
  );
};

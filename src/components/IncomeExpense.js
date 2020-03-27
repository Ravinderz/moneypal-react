import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

export const IncomeExpense = () => {

  const { transactions } = useContext(GlobalContext);

  let credit = 0;
  let debit = 0;

  transactions.forEach(element => {
    if (element.type === "credit") {
      credit += element.amount;
    } else {
      debit -= element.amount;
    }
  });

  return (
  
    <div className="incomeExpense shadow bg-white w-auto">
      <div className="income w-100 text-center">
        <h4>Income</h4>
        <span>&#x20B9;{credit}</span>
      </div>
      <div className="expense w-100 text-center">
        <h4>Expense</h4>
        <span>&#x20B9;{debit}</span>
      </div>
    </div>
  );
};

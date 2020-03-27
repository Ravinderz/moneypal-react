import React from "react";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  return (
    <div className="transactionList">
      <h3>History</h3>
      <hr/>
      <ul>
          <Transaction />
          <Transaction />
      </ul>
    </div>
  );
};

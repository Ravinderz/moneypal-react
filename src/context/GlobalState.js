import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { uuid } from 'uuidv4';

const initialState = {
  transactions: [
    { id: uuid(), text: "credit card", amount: 2000, type: "debit" },
    { id: uuid(), text: "atmWithdrawl", amount: 500, type: "debit" },
    { id: uuid(), text: "transfer from Bharath", amount: 500, type: "credit" },
    { id: uuid(), text: "Transfer from amit", amount: 330, type: "credit" }
  ]
};

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }


  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction,addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

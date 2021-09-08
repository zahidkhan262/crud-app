import React, { createContext, useReducer } from "react";
import AppReducers from "./AppReducers";

// initial State

const initialState = {
  users: [],
};

// create Context\\
export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducers, initialState);

  //  Action
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      playload: id,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      playload: user,
    });
  };
  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      playload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, editUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

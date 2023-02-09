import React, { createContext, useContext, useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import Context from "./Context";
import User from "./components/user";
import Books from "./components/books";
import Movies from "./components/movies";
import userReducer from "./reducers/user_reducer";
import booksReducer from "./reducers/books_reducer";
import moviesReducer from "./reducers/movies_reducer";
import UseEffectDemo from "./useEffectDemo";
import UseMemoDemo from './useMemoDemo'
import UseRefDemo from "./useRefDemo";

const store = {
  user: null,
  boosk: null,
  movies: null,
};

const obj = {
  ...userReducer,
  ...booksReducer,
  ...moviesReducer,
};
function reducer(state, action) {
  const fn = obj[action.type];
  if (fn) {
    return fn(state, action);
  } else {
    throw new Error("报错了");
  }
}
/*
const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
    case "setBooks":
      return { ...state, books: action.books };
    case "setMovies":
      return { ...state, movies: action.movies };
    default:
      throw new Error();
  }
};
*/
function App() {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <Context.Provider value={{ state: state, dispatch: dispatch }}>
      <User />
      <hr />
      <Books />
      <Movies />
    </Context.Provider>
  );
}

const div = document.getElementById("root");
ReactDOM.render(<UseRefDemo />, div);

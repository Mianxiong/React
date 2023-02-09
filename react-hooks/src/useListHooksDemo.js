import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import useList from "./hooks/useList";

function UseListHooksDemo() {
  const { list, deleteIndex, addItem } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  deleteIndex(index);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ol>
      ) : (
        "加载中..."
      )}
    </div>
  );
}
export default UseListHooksDemo;

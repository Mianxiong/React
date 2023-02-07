import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from './App';
let div = document.getElementById("root");

let _state = [];
let index = 0;
const myUseState = (initialValue) => {
  const currentIndex = index;
  console.log("myUseState run");
  _state[currentIndex] =
    _state[currentIndex] === undefined ? initialValue : _state[currentIndex];
  const setState = (newValue) => {
    _state[currentIndex] = newValue;
    render();
  };
  index += 1;
  return [_state[currentIndex], setState];
};

const render = () => {
  index = 0;
  ReactDOM.render(<App />, div);
};

function App() {
  console.log("App 运行了");
  const [n, setN] = myUseState(0);
  const [m, setM] = myUseState(0);
  console.log(`n: ${n}`);
  return (
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={() => setN(n + 1)}>+1</button>
      </p>
      <p>{m}</p>
      <p>
        <button onClick={() => setM(m + 1)}>+1</button>
      </p>
    </div>
  );
}

ReactDOM.render(<App1 />, div);

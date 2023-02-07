import React, { useEffect, useState } from "react";
import "./App.css";

// const App = (props) => {
// const [n, setN] = useState(0);
// const [m, setM] = useState(0);
// const onClickN = () => {
//   setN(n + 1);
// };
// const onClickM = () => {
//   setM(m + 1);
// };
// useEffect(() => {
//   console.log("use effect");
// }, []); //[]只在第一次渲染的时候调用

// useEffect(() => {
//   console.log("n或者m 变了");
// }, [n,m]);
// return (
// <div>
//   {n}
//   <button onClick={onClickN}>n+1</button>
//   <hr />
//   {m}
//   <button onClick={onClickM}>m+1</button>
// </div>
// );
const X = () => {
  const n = 1 + 1;
  return <div>xx</div>;
};
const Y = () => {
  const n = 1+1
  return <div>y</div>
}
const App = (props) => {
  const [childVisible, setChildVisible] = useState(true);
  const hide = () => {
    setChildVisible(false);
  };
  const show = () => {
    setChildVisible(true);
  };
  return (
    // <div>
    //   {childVisible ? (
    //     <button onClick={hide}>hide</button>
    //   ) : (
    //     <button onClick={show}>show</button>
    //   )}
    //   {childVisible ? <Child /> : null}
    // </div>
    <React.Fragment>
      <X></X>
      <Y></Y>
    </React.Fragment>
  );
};

const Child = (props) => {
  useEffect(() => {
    return () => {
      console.log("Child销毁了");
    };
  });
  return <div>Child</div>;
};
export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import useUpdate from "./useUpdate";

// function App() {
//     const [n, setN] = React.useState(0)
//     return (
//         <div className="App">
//             <p>{n}</p>
//             <p>
//                 <button onClick={()=>setN(n+1)}>+1</button>
//             </p>
//         </div>
//     )
// }
import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";

// useState
function App1() {
  const [n, setN] = useState(0);
  const onClick = () => {
    // setN(n + 1);
    // setN(n + 1); // 你会发现 n 不能加 2
    setN(i=>i+1)
    setN(i=>i+1)
  };
  return (
    <div className="App">
      <h1>n: {n}</h1>
      <button onClick={onClick}>+2</button>
    </div>
  );
}

//useReducer
const initial = {n:0}
// const reducer = (state, action) => {
//     if(action.type === 'add') {
//         return {n: state.n + action.number}
//     } else if(action.type === 'multi') {
//         return {n: state.n * 2}
//     } else {
//         throw new Error('unknown type')
//     }
// }
function App2() {
    const [state, dispatch] = useReducer(reducer, initial)
    const {n} = state
    const onClick = ()=>{
        dispatch({type: 'add', number:1})
    }
    const onClick2 = ()=>{
        dispatch({type: 'add', number: 2})
    }
    return (
        <div className="App">
            <h1>n: {n}</h1>
            <button onClick={onClick}>+1</button>
            <button onClick={onClick2}>+2</button>
        </div>
    )
}

const initFormData = {
  name: "",
  age: 18,
  nationality: "汉族",
};

function reducer(state, action) {
  switch (action.type) {
    case "patch":
      return { ...state, ...action.formData };
    case "reset":
      return initFormData;
    default:
      throw new Error();
  }
}

function App3() {
  const [formData, dispatch] = useReducer(reducer, initFormData);
  // const patch = (key, value)=>{
  //   dispatch({ type: "patch", formData: { [key]: value } })
  // }
  const onSubmit = () => {};
  const onReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      <div>
        <label>
          姓名
          <input
            value={formData.name}
            onChange={(e) =>
              dispatch({ type: "patch", formData: { name: e.target.value } })
            }
          />
        </label>
      </div>
      <div>
        <label>
          年龄
          <input
            value={formData.age}
            onChange={(e) =>
              dispatch({ type: "patch", formData: { age: e.target.value } })
            }
          />
        </label>
      </div>
      <div>
        <label>
          民族
          <input
            value={formData.nationality}
            onChange={(e) =>
              dispatch({
                type: "patch",
                formData: { nationality: e.target.value },
              })
            }
          />
        </label>
      </div>
      <div>
        <button type="submit">提交</button>
        <button type="reset">重置</button>
      </div>
      <hr />
      {JSON.stringify(formData)}
    </form>
  );
}



// const rootElement = document.getElementById("root");
// ReactDOM.render(<App3 />, rootElement);


export default App3;
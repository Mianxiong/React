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



import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
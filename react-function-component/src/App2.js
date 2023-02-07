import React, { useEffect, useState } from "react";
import "./App.css";
import useUpdate from "./useUpdate";


const App = (props) => {
  const [n, setN] = useState(0);
  const onClick = () => {
    setN(n + 1);
  };

  
  useUpdate(() => {
    console.log("变了");
  }, [n]);

  return (
    <div>
      {n}
      <button onClick={onClick}>+1</button>
    </div>
  );
};

export default App;

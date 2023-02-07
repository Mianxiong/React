import React, { useEffect, useState } from "react";
import "./App.css";
import useUpdate from "./useUpdate";

function App() {
    const [n, setN] = React.useState(0)
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={()=>setN(n+1)}>+1</button>
            </p>
        </div>
    )
}

export default App;
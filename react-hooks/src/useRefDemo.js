import React, { useEffect, useMemo, useRef } from "react";

function UseRefDemo() {
    console.log("App 执行");
    const count = useRef(0);
    const [n, setN] = React.useState(0);
    const onClick = ()=>{
        setN(n+9);
    }
    useEffect(()=>{
        count.current += 1;
        console.log(count.current);
    })
    return (
        <div className="App">
            <div>
                <button onClick={onClick}>update n {n}</button>
            </div>
        </div>
    )
}

export default UseRefDemo;
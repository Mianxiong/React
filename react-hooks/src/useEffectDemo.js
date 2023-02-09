import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";


function UseEffectDemo() {
    const [n, setN] = useState(0);
    const onClick = ()=>{
        setN(i => i + 1)
    }
    const afterRender = useEffect;
    afterRender(() => {
        console.log("第一次渲染之后执行这一句话");
    },[])
    afterRender(()=>{
        console.log("任何一个state变化时都执行");
    })
    afterRender(()=>{
        console.log("n变化了");
    },[n])
    return (
        <div>
            n:{n}
            <button onClick={onClick}>+1</button>
        </div>
    )
}

export default UseEffectDemo;
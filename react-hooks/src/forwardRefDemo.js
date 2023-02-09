import React, { useEffect, useMemo, useRef } from "react";

function ForwardRefDemo() {
    const buttonRef = useRef(null);
    return (
        <div className="App">
            <Button3 ref={buttonRef}>按钮</Button3>
        </div>
    )
}

const Button3 = React.forwardRef((props, ref) => {
    console.log('ref',ref);
    return <button className="red" ref={ref} {...props}/>
})

export default ForwardRefDemo;
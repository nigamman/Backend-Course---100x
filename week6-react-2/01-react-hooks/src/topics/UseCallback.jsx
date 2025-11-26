import { useState, useCallback, memo } from "react";

function UseCallback() {
    const [count, setCount] = useState(0);

    const onClick = useCallback(() => {
        console.log("Child clicked")
    }, []);

    return (
        <div>
            <Child onCLick={onClick} />
            <button onClick={() => {
                setCount(count+1)
            }}> Click me {count} </button>
        </div>
    )
}

const Child = memo(({onClick}) => {
    console.log("child render")

    return (
        <div>
            <button onClick={onClick}> Button Clicked </button>
        </div>
    )
})

export default UseCallback;
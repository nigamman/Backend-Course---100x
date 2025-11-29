import {useCallback, useState, memo } from "react";

export function Ass4UseCallback() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(function() {
        setCount(function(currentCount) {
            return currentCount + 1;
        })
    },[]);

    const handleDecrement = useCallback(function() {
        setCount(function(currentCount) {
            return currentCount - 1;
        })
    },[]);
    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons 
                onIncrement={handleIncrement} 
                onDecrement={handleDecrement} 
            />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
  
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <br></br>
      <br></br>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
})

export default Ass4UseCallback;

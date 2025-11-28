import { useMemo, useState } from "react";

export function Ass1UseMemo() {
    const  [input, setInput] = useState(0);
    
    const calValue = useMemo(() => {
        let value = 1;
        for (let i=1; i<=input; i++) {
            value = value * i;
        }
        return value;
    }, [input]);

    return (
        <div>
            <input
                type = "number"
                value= {input}
                onChange = {(e) => setInput(Number(e.target.value))}
            />
            <p>Factorial of {input} is {calValue}</p>    
        </div>
    )
}
export default Ass1UseMemo;
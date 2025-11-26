import { useState, useEffect, useRef } from "react";

function UseRef() {
    const [incomeTax, setIncomeTax] = useState(2000);
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = 10;
        }, 5000);
    }, [])

    return (
        <div>
            <span>Your income tax returns are: </span>
            <span ref={divRef}>{incomeTax}</span>
        </div>
    );
}

export default UseRef;
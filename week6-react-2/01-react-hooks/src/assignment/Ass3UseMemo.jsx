import { useMemo, useState } from "react";

export const Ass3UseMemo = () => {
    const [items, setItems] = useState([
        {name: 'Choclate', value: 10},
        {name: 'Onions', value: 30},
        {name: 'Chips', value: 80},
        {name: 'Tomato', value: 90},
    ]);

    const totalValue = useMemo(() => {
        let totalValue = 0;
        for(let i=0; i<items.length; i++) {
            totalValue = totalValue + items[i].value;
        }
        return totalValue;
    }, [items]);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key = {index}> {item.name} - Price: ${item.value} </li>
                ))}
            </ul>
            <p>Total Value: {totalValue} </p>
        </div>
    );
};

export default Ass3UseMemo;
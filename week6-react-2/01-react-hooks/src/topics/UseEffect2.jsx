import { useEffect, useState } from "react";
import axios from "axios";

function UseEffect2() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <div>
            <button onClick={() => setSelectedId(1)}>1</button>
            <br></br>
            <button onClick={() => setSelectedId(2)}>2</button>
            <button onClick={() => setSelectedId(3)}>3</button>

            <Todo id={selectedId} />
        </div>
    );
}

function Todo({ id }) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setTodo(response.data);
            });
    }, [id]);

    return (
        <div>
            <h1>Todo Id: {todo.id}</h1>
            <h1>Title: {todo.title}</h1>
        </div>
    );
}

export default UseEffect2;
 

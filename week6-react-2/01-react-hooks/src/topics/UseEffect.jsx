import { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
            setTodos(response.data);  
        })
    }, []);

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo.id} title={todo.title}  description={"Completed: " + todo.completed} />
            ))}
        </div>
    );
}

function Todo({title, description}) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    );
}

export default UseEffect;

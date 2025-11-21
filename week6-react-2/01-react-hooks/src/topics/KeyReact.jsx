import React, {Fragment} from "react"
import { useState } from "react"

let counter = 4;

function KeyReact() {
    const [todos, setTodos] = useState([{
        id:1,
        title: "title1",
        description: "desc1"
    }, {
        id:2,
        title: "title2",
        description: "desc2"
    }, {
        id:3,
        title: "title3",
        description: "desc3"
    }])

    function addTodo() {
        setTodos([...todos, {
            id: counter++,
            title: Math.random(),
            description: Math.random()
        }])
    }

    return (
        <div>
            <button onClick={addTodo}> Add a todo </button>

            {/* both syntax are same */}
            {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
            
            {/* {todos.map(function(todo) {
                return <Todo title={todo.title} description={toso.description} />
            })} */}
        </div>    
    )
}

function Todo({title, description}) {
    return <div>
        <h3> {title} </h3>
        <h4> {description} </h4>
    </div>
} 

export default KeyReact;
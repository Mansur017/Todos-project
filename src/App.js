import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";


function App() {

    const [todos, setTodos] = useState([

        {
            id: Math.random().toString(36).substr(2,9),
            task: "Изучить JavaScript",
            complete:false
        },
        {   
            id: Math.random().toString(36).substr(2,9),
            task: "Изучить паттерны проектирования",
            complete:false

        },
        {   
            id: Math.random().toString(36).substr(2,9),
            task: "Redux (redux-observable, redux-saga)",
            complete:false

        }
    ])


    return(
        <div className="App">
            <header>
                <h1>Количество задач № {todos.length} </h1>
            </header>  
            <Todos
                todos={todos}
                setTodos={setTodos}
            />
            <TodoForm
               todos={todos}
               setTodos={setTodos}
            />
        </div>
    )

}

export default App;
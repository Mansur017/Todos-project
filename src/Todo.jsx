import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

export default function Todo({index,todo,removeTask,todos,setTodos}) {


    const completeTask = () => {
        const todosCopy = [...todos];
        todosCopy[index].complete = !todo.complete;
        setTodos(todosCopy)
        

    }

    
    return (
        <div className="todo-block">
        <div className={todo.complete ? "todo overline" : "todo"}   onClick={completeTask} >
            {todo.task}
        </div>
        <button onClick={() => (removeTask(index))}>
            <IoCloseSharp className="icon"/>
         </button>
         </div>
    )
}




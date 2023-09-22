import React from 'react'
import Todo from './Todo'



export default function Todos({todos,setTodos}) {

    const removeTask = (index) => {
        const todosCopy = [...todos];
        todosCopy.splice(index, 1);
        setTodos(todosCopy)
    }


    return (
        <div className="todos">
            {
                todos.map((todo, index)  => {
                    return(
                        <Todo 
                            index={index}
                            todo={todo}
                            todos={todos}
                            removeTask={removeTask}
                            key={todo.id}
                            setTodos={setTodos}
                        />
                    )
                })
            }  
        </div> 
    )
}

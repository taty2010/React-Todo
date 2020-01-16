import React from 'react';
import ToDo from './Todo';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = props =>{
    return(
        <div>
            {props.toDo.map(todo =>(
                <ToDo 
                    key = {todo.id}
                    item={todo}
                />
            ))}
        </div>
    )
}

export default ToDoList
import React from 'react';
import ToDo from './Todo';
import styled from 'styled-components';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = props =>{

    return(
        <div>
                {props.toDo.map(todo =>(
                    <ToDo 
                        key = {todo.id}
                        item={todo}
                        togglePurchase={props.togglePurchase}
                    />
                ))}
                <button onClick={props.clearItem}>Clear Items</button>
        </div>
    )
}

export default ToDoList
import React from 'react';
import ToDo from './Todo';
import styled from 'styled-components';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const ToDoList = props =>{

    const Wrapper = styled.div `
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    `;

    const List = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 80vw;
    margin: 10% 0;
    `;

    const Button = styled.button`
    margin: 0 2vw;
    background-color: purple;
    border: none;
    padding: 1vh;
    color: #00ffe7;
    text-shadow: 0 0 3px #d8fbf8;
    width: 30vw;

`;
    return(
        <Wrapper>
            <List>
                {props.toDo.map(todo =>(
                    <ToDo 
                        key = {todo.id}
                        item={todo}
                        togglePurchase={props.togglePurchase}
                    />
                ))}
            </List>
                <Button onClick={props.clearItem}>CLEAR ITEMS</Button>
        </Wrapper>
    )
}

export default ToDoList
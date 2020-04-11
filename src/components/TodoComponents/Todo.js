import React from 'react';
import styled from 'styled-components';


const ToDo = props =>{

    const Card = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: pink;
        width: 35vw;
        height: 5vh;
        padding: 1%;
        margin: 2%;
        text-decoration: none;
        border-radius: 30px;
        :hover{
            box-shadow: 5px 3px 0px 0px #1c7386;
        }
            p{
                color: purple;
                font-family: 'Audiowide', cursive;
                :hover{
                text-shadow: 1px 3px 0px #dd80f4;}
            }
        }
    `;
    console.log(props)
    return(
        <Card
            onClick={event => props.togglePurchase(props.item.id)}
            className={`item ${props.item.completed ? "completed" : ""}`}>
            <p>{props.item.task}</p>
        </Card>
    )
}

export default ToDo
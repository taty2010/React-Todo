import React from 'react';
import styled from 'styled-components';


const ToDo = props =>{

    const Wrapper = styled.div`
    width: 50vw;
    height: auto;
    margin: 2%;
`;

    const Card = styled.div`
        display: flex;
        justify-content: center;
        background-color: pink;
        width: 12vw;
        height: 5vh;
        margin: 2%;
    `;

    return(
        <Card
            onClick={event => props.togglePurchase(props.item.id)}
            className={`item${props.item.purchased ? "purchased" : ""}`}>
            <p>{props.item.task}</p>
        </Card>
    )
}

export default ToDo
import React from 'react';
import styled from 'styled-components';

class ToDoForm extends React.Component {

    constructor(){
        super();
        this.state = {
            newItem: ""
        };
    }

    handleChanges = e => {
        this.setState({...this.state, newItem: e.target.value})
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
    };

    render(){
        const Button = styled.button`
            margin: 0 2vw;
            background-color: purple;
            border: none;
            padding: 1vh;
            color: #00ffe7;
            text-shadow: 0 0 3px #d8fbf8;

        `;

        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange = {this.handleChanges}
                value={this.state.newItem}
                type='text' 
                name='item'/>
                <Button>ADD ITEM</Button>
            </form>
        )
    }
}

export default ToDoForm
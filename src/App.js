import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm'
import styled from 'styled-components'

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  

    state = {
      toDoList: list
    }

  togglePurchase = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(item =>{
        if(item.id === id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    };
    this.setState(newState)
  }

  addNewItem = item => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {task: item, completed: false, id: Date.now()}
      ]
    };
    this.setState(newState);
  }

  render() {
    const Wrapper = styled.div`
    background-image: url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
    `;
    return (
      <Wrapper>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addNewItem={this.addNewItem} />
        <ToDoList addNewItem={this.addNewItem} togglePurchase={this.togglePurchase} toDo={this.state.toDoList}/>
      </Wrapper>
    );
  }
}

export default App;

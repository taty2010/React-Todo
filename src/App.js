import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm'
import styled from 'styled-components';
import './components/TodoComponents/Todo.css';

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
  },
  {
    task: 'Study',
    id: 1528817085358,
    completed: false
  },
  {
    task: 'Exercise',
    id: 1528817086358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      toDoList: list
    };
}
    // state = {
    //   toDoList: list
    // }

  togglePurchase = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(item =>{
        if(item.id === id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    };
    this.setState(newState)
    console.log(newState)
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

  clearItem = () => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.filter(item =>{
        return !item.completed
      })
    };
    this.setState(newState)
  }

  render() {
    const Wrapper = styled.div`
      display: flex;
      flex-flow: column;
      justify-content: left;
      align-items: center;
      color: pink;
      width: 90vw;
      height: auto;
      padding: 2% 0;
    margin: 10vh auto;
    background-color: rgba(79, 57, 77, 0.73);
      h1{
        padding: 4vh 0;
        text-shadow: 4px 2px 3px #c734a0;
}
      }
    `;
    return (
      <Wrapper>
        <h1>Welcome to your Todo App!</h1>
        <ToDoForm addNewItem={this.addNewItem} />
        <ToDoList clearItem={this.clearItem} addNewItem={this.addNewItem} togglePurchase={this.togglePurchase} toDo={this.state.toDoList}/>
      </Wrapper>
    );
  }
}

export default App;

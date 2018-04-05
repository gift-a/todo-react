import React, { Component } from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default class App extends Component {
  state = {
    tasks: []
  }

  handleTaskAdd = (task) => {
    this.setState(state => {
      return {
        tasks: state.tasks.concat(task)
      }
    })
  }

  render() {
    return (
      <div>
        <TodoForm 
          onTaskAdd={this.handleTaskAdd} 
          numTasks={this.state.tasks.length}
        />
        <TodoList tasks={this.state.tasks} />    
      </div>
    );
  }
}

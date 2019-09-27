import React from 'react';
import './App.css';
import { Task } from './models/tasks';
import { NewTaskForm } from './todo-components/NewTaskForm';
import { TasksList } from './todo-components/TasksList';

interface State{
  newTask: Task,
  tasks: Task[]
}

class App extends React.Component<{}, State>{

  state ={
    newTask:{
      id: 1,
      name: ""
    },
    tasks: []
  };

  render(){
    return (
      <div className="mainDiv">
        <h1>Hello React!!</h1>
        <NewTaskForm 
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TasksList
          tasks={this.state.tasks}
          onDelete={this.deleteTask}
        />
      </div>
    );
  }
  
  private addTask = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    this.setState(previousState => ({
      newTask:{
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  }

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({
      newTask:{
        ...this.state.newTask,
        name: event.target.value
      }
    })
  }

  private deleteTask = (taskToDelete: Task) =>{
    this.setState(previousState => ({
      tasks:[
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)]
        //filter(return) task.id that not equal taskToDelete.id
    }));
  }
}

export default App;

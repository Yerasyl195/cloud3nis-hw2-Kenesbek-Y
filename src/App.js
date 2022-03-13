import React from "react";
import Task from "./components/Task";
import TaskAdd from "./components/TaskAdd";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {id: 0, name: 'Сделать домашку по ПАПС', description: 'Домашняя работа N4', complete: false},
        {id: 1, name: 'Сделать курсовой проект', description: 'Документация: ПЗ, ПМИ', complete: false},
        {id: 2, name: 'Сделать майнор', description: 'Домашняя работа(магнетизм и спинотроника)', complete: true}
      ]
    }
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0,
        name: task,
        description: '',
        done: false
      });
      return tasks;
    });
  }

  completeTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].complete = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const {tasks} = this.state;
    const activeTasks = tasks.filter(task => !task.complete)
    const completeTasks = tasks.filter(task => task.complete)

    return (
        <div>
          <h1 className="top">Active Tasks: {activeTasks.length}</h1>
          {[...activeTasks, ...completeTasks].map(task => (
              <Task
                  completeTask={() => this.completeTask(task.id)}
                  deleteTask={() => this.deleteTask(task.id)}
                  task={task}
                  key={task.id}
              />
          ))}
          <TaskAdd addTask={this.addTask}/>
        </div>
    );
  }
}

export default App;

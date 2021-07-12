import React, { Component } from 'react';
import './App.css';
import TaskForm from './TodoList/TaskForm';
import Search from './TodoList/Search';
import TaskList from './TodoList/TaskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      isDisplayForm: false
    }
  }
  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }
  render() {
    var { isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}></TaskForm> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1> Quản lý công việc</h1> <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
            {/* Form*/}
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span> Thêm Công Việc</button>
            <div className="row mt-15 mb-15">
              {/*search*/}
              <Search></Search>
            </div>
            { /* List*/}
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

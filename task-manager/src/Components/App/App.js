import logo from './logo.svg';
import React from 'react';

// import Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import Components
import Welcome from '../Welcome/Welcome';
import Task from '../Task/Task';
import { NavigationBar } from '../NavigationBar/NavigationBar';
<<<<<<< HEAD
import { TaskList } from '../../Components/TaskList/TaskList';
=======
import TaskList from '../../Components/TaskList/TaskList';
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
import { Hamburger } from '../../Components/Hamburger/Hamburger';
import { Clock } from '../../Components/Clock/Clock';
import { AddTask } from '../../Components/AddTask/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      task: {
        done: false,
      },
=======
      task: {},
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
      allTasks: [],
      rightColStatus: false,
    }
    this.toggleRight = this.toggleRight.bind(this)
<<<<<<< HEAD
    // this.handleChangeSubject = this.handleChangeSubject.bind(this)
    // this.handleChangeTime = this.handleChangeTime.bind(this)
    // this.handleChangeLocation = this.handleChangeLocation.bind(this)
    this.handleChange = this.handleChange.bind(this)
=======
    this.handleChangeSubject = this.handleChangeSubject.bind(this)
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  toggleRight() {
    this.setState({
      rightColStatus: !this.state.rightColStatus
    })
  } 

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      allTasks: this.state.allTasks.concat(this.state.task),
<<<<<<< HEAD
      task: {
        done: false
      },
      rightColStatus: !this.state.rightColStatus
    })
    console.log(this.state.allTasks)
  }

  handleChange(e) {
    this.setState({
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value,
=======
      task: {},
      rightColStatus: !this.state.rightColStatus
    })
  }

  handleChangeSubject(e) {
    let newTitle = e.target.value
    this.setState({
      task: {
        title: newTitle,
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
      }
    })
  }

<<<<<<< HEAD
  

=======
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
  render() {
    return (
      <div className="App wrapper">


        <header>
          {/* <!-- Start of Navigation Bar --> */}

          <NavigationBar onClick={this.toggleRight} rightColState={this.state.rightColStatus}/>

          {/* <!-- End of Navigation Bar --> */}


        </header>


        {/* <!-- Start of main container --> */}
        <main className="py-5">
          <div className="mx-auto h-100">
            {/* <!-- Start of main row --> */}
            <div className="row h-100">
              {/* <!-- Start of left column --> */}
              <div className="col-md-6 d-none d-md-block">
                {/* <Welcome /> */}
                <TaskList allTasks={this.state.allTasks}/>
              </div>
              {/* <!-- End of left column --> */}

              {/* Start of right column */}
              <div className='col-md-6'>

<<<<<<< HEAD
                {this.state.rightColStatus && 
                <AddTask  onClick={this.handleSubmit}
                          onChange={this.handleChange}
                />}
=======
                {this.state.rightColStatus && <AddTask onClick={this.handleSubmit} onChange={this.handleChangeSubject}/>}
>>>>>>> 29d5e1c29a2bf63564040e228f37b1109589958b
              </div>
              {/* End of right column */}
            </div>
          </div>
        </main>


      </div>
    )
  }
}

export default App;
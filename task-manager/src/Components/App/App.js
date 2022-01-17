import logo from './logo.svg';
<<<<<<< HEAD
import React from 'react';

// import Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import Components
import Welcome from '../Welcome/Welcome';
import Task from '../Task/Task';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import TaskList from '../../Components/TaskList/TaskList';
import { Hamburger } from '../../Components/Hamburger/Hamburger';
import { Clock } from '../../Components/Clock/Clock';
import { AddTask } from '../../Components/AddTask/AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {},
      allTasks: [],
      rightColStatus: false,
    }
    this.toggleRight = this.toggleRight.bind(this)
    this.handleChangeSubject = this.handleChangeSubject.bind(this)
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
      task: {},
      rightColStatus: !this.state.rightColStatus
    })
  }

  handleChangeSubject(e) {
    let newTitle = e.target.value
    this.setState({
      task: {
        title: newTitle,
      }
    })
  }

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

                {this.state.rightColStatus && <AddTask onClick={this.handleSubmit} onChange={this.handleChangeSubject}/>}
              </div>
              {/* End of right column */}
            </div>
          </div>
        </main>


=======
import './App.css';
import { Hamburger } from '../../Components/Hamburger/Hamburger.js';
import { Clock } from '../../Components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.openHamburger 
  }
  openHamburger() {
    this.setState()
  }
  render(){
    return (
      <div>
        <Clock />
        <Hamburger />
>>>>>>> 76d8f75adb46b2506ff89f4093676e1ba54916fa
      </div>
    )
  }
}

export default App;
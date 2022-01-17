<<<<<<< HEAD
import React from "react";
import "./Hamburger.css";

export class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamWidth: "0px",
    };
    this.openHamburger = this.openHamburger.bind(this);
    this.closeHamburger = this.closeHamburger.bind(this);
  }
  openHamburger() {
    this.setState({ hamWidth: "45%" });
  }
  closeHamburger() {
    this.setState({ hamWidth: "0px" });
  }
  render() {
    return (
      <div>
        <button className="openbtn" onClick={this.openHamburger}>
          ☰
        </button>
        <div
          id="mySidepanel"
          className="sidepanel"
          style={{ width: this.state.hamWidth }}
        >
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeHamburger}
            value="x"
          >
            ×
          </a>
          <a href="#" value="main">
            Main
          </a>
          <a href="#" value="today">
            Today
          </a>
          <a href="#" value="scheduled">
            Scheduled
          </a>
          <a href="#" value="allTasks">
            All Tasks
          </a>
          <a href="#" value="starred">
            Starred
          </a>
          <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
=======
import React from 'react';
import './Hamburger.css';

export class Hamburger extends React.Component {
    constructor(props){
        super(props);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    openNav(e) {
        var text = e.target.value;
        this.props.
        document.getElementById("mySidepanel").style.width = "250px";
    }
    closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
    render() {
        return (
            <div>
                <button className="openbtn" onclick={this.openNav()}>☰</button>
                <div id="mySidepanel" className="sidepanel">
                    <a href="javascript:void(0)" className="closebtn" onclick={this.closeNav()} value="x">×</a>
                    <a href="#" value="main">Main</a>
                    <a href="#" value="today">Today</a>
                    <a href="#" value="scheduled">Scheduled</a>
                    <a href="#" value="allTasks">All Tasks</a>
                    <a href="#" value="starred">Starred</a>
                    <li className="active">
                        <a href="#subList" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" value="list">List</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#" value="list1">List 1</a>
                            </li>
                            <li>
                                <a href="#" value="list2">List 2</a>
                            </li>
                            <li>
                                <a href="#" value="list3">List 3</a>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        )
    }
}
>>>>>>> 76d8f75adb46b2506ff89f4093676e1ba54916fa

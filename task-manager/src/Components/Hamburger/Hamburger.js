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
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
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

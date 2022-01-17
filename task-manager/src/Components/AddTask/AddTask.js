// import React
import React from "react";
import { useState } from "react";

// import stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddTask.css';

import { NavigationBar } from "../NavigationBar/NavigationBar";


export default class AddTask extends React.Component {
  render() {
    return (
      
        <form >
          {/*<!-- Start of upper part: Title -->*/}
          <div className="row title-row">
            <div className="col pb-2 border-bottom"> 
              {/* New Task Title Input */}

              <input  className="mt-2 border-0 new-task-title w-100" 
                      type="text" 
                      placeholder="New Task Title" 
                      style={{lineHeight: 0, overflow: "hidden"}} 
                      name="title" 
                      value={this.props.title}
                      onChange={this.props.onChange}
              >
              </input>

   
        
            </div>
          </div>
          {/*<!-- End of upper part: Title -->*/}

          {/*<!-- Start of lower part: List -->*/}
          <div className="row">
            <div className="col mt-4 note-col">

              {/* Input notes */}
              <input className="w-100 add-task  subtitle mt-5" type="text" placeholder="Notes"></input>
              
              {/* Assign to list (dropdown menu)*/}
              <select className="w-100 add-task mt-5 notes-list" name="cars" id="list">
                {/* dropdown menu placeholder */}
                <option value="" disabled selected>Assign to</option>
                {/* Options hardcode */}
                <option value="Daily">Daily</option>
                <option value="grocesory">Grocesory</option>
                <option value="final-project">Final Project</option>
                <option value="work">Work</option>
              </select>

              
              <div className="mt-5">
                {/* date icon */}
                <i class="fas fa-calendar-alt small-icon details-icon"></i>
                {/* Input date */}
                <input  id="date" 
                        className="add-task ms-2 input-boxs details-text" 
                        type="date" 
                        name="date"
                        value={this.props.date} 
                        placeholder="Date" 
                        onfocus="(this.type = 'date')" onblur="(this.type='text')" 
                        onChange={this.props.onChange}
                        />
              </div>

              <div className="mt-5">
                {/* time icon */}
                <i className="fas fa-clock small-icon details-icon"></i>
                {/* Input time */}
                <input  className="add-task ms-2 input-box details-text" 
                        name="time"
                        type="time"
                        placeholder="time"
                        onfocus="(this.type = 'time')" onblur="(this.type='text')"
                        value={this.props.time}
                        // onChange={this.props.handleChangeTime}
                        onChange={this.props.onChange}
                        >
                </input>

              </div>
              <div className="mt-5">
                {/* location icon */}
                <i className="fas fa-map-marker-alt small-icon details-icon" ></i>
                {/* Input location */}
                <input  className="add-task ms-2 input-boxs details-text"
                        name="location"
                        value={this.props.location}
                        type="text"
                        placeholder="Location"
                        onChange={this.props.onChange}
                        // onChange={this.props.handleChangeLocation}
                        >
                </input>

                <br></br>
                
                {/* <div className="col"></div> */}
              </div>
              
              <div className="mt-5">
                <i className="fas fa-plus"></i>
                {/* Add task button */}
                <button className="add-task ms-2 input-boxs submit-btn" type="submit" onClick={this.props.onClick}>
                  Add Task
                </button>
              </div>
            </div>
          </div>
          {/*<!-- End of lower part: Task List -->*/}
        </form>

      

    )
  }
}


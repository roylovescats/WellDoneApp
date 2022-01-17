import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Task.css'
import {Tick} from '../../Components/ticktick/ticktick.js';


export default function Task(props) {
    return (
        <div>
            {/* <!-- Start of item row --> */}
            <div className="row">
                {/* <!-- icon column --> */}
                <div className="col-1">
                {/* <!-- icon --> */}
                <Tick className="task-icon"/>
                {/* <i className="fas fa-check task-icon"></i> */}
                </div>
                {/* <!-- Start of Task column --> */}
                <div className="col-10 task-description">
                {/* <!-- Start of Task row --> */}
                <div className="row">
             
                    <p className="task-title">
                        {props.title}
                    </p> 
                </div>
                {/* <!-- Description row --> */}
                <div className="row">
                    <p className="text-secondary task-details">7:00am ‧ Home</p>
                </div>
                {/* <!-- End of Task column --> */}
                </div>
                {/* <!-- End of item row --> */}
            </div>
        </div>
            ) 
}
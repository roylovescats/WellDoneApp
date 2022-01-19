// import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Task.css'

// const [button, setButton] = useState(true);
// const [complete, setComplete] = useState(false);

export default function Task({ task }) {
    const details = [];
    const time = task.time
    const location = task.location
    const date = task.date
    if (date) {
        details.push(date)
    }
    if (time) {
        details.push(time)
    }
    if (location) {
        details.push(location)
    }

    const [done, setDone] = useState(task.done);
    const handleDone = () => {
        setDone(!done)
        console.log(done)
    }

    const [expand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!expand)
    }

    // const changeColor = () => {
    //     setButton(!button)
    // }

    // const changeState = (event) => {
    //     let value = event.target.value;
    //     if (event.target.name === 'complete') {
    //         value = event.target.checked
    //     }
    //     setComplete({ [event.target.name]: value })
    // }


    //state for changing bg color after tick(mark as done)
    // const [color, setColor] = useState();
    // const divStyle = { backgroundColor: color };

    //state for expanding list when ... clicked for details
    // const [expandList, setExpandList] = useState('auto');
    // const containerHeight = {height: expandList};

    const handleToggle = () => {
        task.done = !task.done;
        console.log(task.done)
    }

    return (
        <div>
            {/* <!-- Start of item row --> */}
            <div className="row task-card">
                {/* <!-- icon column --> */}
                <div className="col-1">
                    {/* <!-- icon --> */}
                    <div className="mx-auto w-100 h-100">
                        {/* <button name="complete" checked={complete} onChange={changeState} className={button ? "buttonTrue" : "buttonFalse"}
                            onClick={changeColor}
                        > */}
                        {/* <button class="w-100"  onClick={handleDone}> */}
                        <i onClick={handleDone} className={done ? 'fas fa-check buttonTrue' : 'fas fa-check buttonFalse'}></i>

                        {/* </button> */}
                        {/* </button> */}
                    </div>
                    {/* <i className="fas fa-check task-icon"></i> */}
                </div>

                {/* Start of Task column */}
                <div className="col-10 task-description" id="testing">
                    {/* <!-- Start of Task row --> */}
                    <div className="row">
                        {/* <p name="name" className={'task-title' + (complete ? ' complete ' : '')} onChange={changeState}> */}
                        {/* Andison:<input name="name" type="text" class={'taskTitle' +(this.state.complete ? ' complete ' : '')} value={this.state.name} onChange={this.changeState} /> */}
                        <p>
                            {task.title}
                        </p>
                    </div>

                    {/* Description row */}
                    <div className="row">
                        <p className="text-secondary task-details">
                            {details.join(' ‧ ')}
                        </p>
                        {/* click to show input of notes */}
                        <p onClick={handleExpand}>...</p>
                        <p className={expand ? 'noteShowTrue' : 'noteShowFalse'}>{task.note}</p>
                    </div>
                    {/* <!-- End of Task column --> */}
                </div>
                {/* <!-- End of item row --> */}
            </div>
        </div>
    )
}
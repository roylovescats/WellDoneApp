import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Task.css'


export default function Task(props) {
    const [button, setButton] = useState(true);
    const [complete, setComplete] = useState(false);
    const details = [];
    const time = props.task.time
    const location = props.task.location
    const date = props.task.date
    if (date) {
        details.push(date)
    }
    if (time) {
        details.push(time)
    }
    if (location) {
        details.push(location)
    }
    const changeColor = () => {
        setButton(!button)
    }
    // Andison:changeColor() {
    //     this.setState({
    //       button: !this.state.button
    //     })
    //   }
    const changeState = (event) => {
        let value = event.target.value;
        if (event.target.name === 'complete') {
            value = event.target.checked
        }
        setComplete({ [event.target.name]: value })
    }
    // Andison:changeState(event){
    //     let value = event.target.value
    //     if (event.target.name === "complete"){
    //         value = event.target.checked
    //     }
    //     this.setState({[event.target.name]:value})
    //  }

//state for changing bg color after tick(mark as done)
    const [color, setColor] = useState();
    const divStyle = { backgroundColor: color };

//state for expanding list when ... clicked for details
    const [expandList, setExpandList] = useState('auto');
    const containerHeight = {height: expandList};


    // const [done, setDone] = useState();

    const handleClick = () => {
    //     e.target.style.color == 'rgb(181, 181, 181)' ? setColor('white') : setColor('rgb(181, 181, 181)');
    }

    return (
        <div>
            {/* <!-- Start of item row --> */}
            <div className="row">
                {/* <!-- icon column --> */}
                <div className="col-1">
                    {/* <!-- icon --> */}
                    <div className="container task-icon">
                        <button name="complete" checked={complete} onChange={changeState} className={button ? "buttonTrue" : "buttonFalse"}
                            onClick={changeColor}
                        >
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                    {/* Andison:<div className="container">
                        <button name="complete" checked={this.state.complete} onChange={this.changeState} className={this.state.button ? "buttonTrue" : "buttonFalse"}
                            onClick={this.changeColor}><i class="fas fa-check"></i></button>
                    </div> */}


                    {/* <i className="fas fa-check task-icon"></i> */}
                </div>
                {/* <!-- Start of Task column --> */}
                <div className="col-10 task-description" id="testing" 
                // style={divStyle}
                >
                    {/* <!-- Start of Task row --> */}
                    <div className="row">

                        <p name="name" className={'task-title' + (complete ? ' complete ' : '')} onChange={changeState}>
                        {/* Andison:<input name="name" type="text" class={'taskTitle' +(this.state.complete ? ' complete ' : '')} value={this.state.name} onChange={this.changeState} /> */}
                            {props.task.title}
                            {/* {props.title} */}
                        </p>
                    </div>
                    {/* {props.task.done.toString()} */}
                    {/* <!-- Description row --> */}
                    <div className="row">
                        <p className="text-secondary task-details" style={containerHeight}>
                            {details.join(' ‧ ')}
                            {/* {Object.values(props.task).join(' ‧ ')} */}

                            {/* 7:00am ‧ Home */}
                        </p>
                        {/* <p  onClick={() => setExpandList('500px')}>...</p> */}
                    </div>
                    {/* <!-- End of Task column --> */}
                </div>
                {/* <!-- End of item row --> */}
            </div>
        </div>
    )
}

// constructor(props) {
//     super(props);
//   this.state = {
//     complete: false
//   }
//   this.changeState = this.changeState.bind(this);
//   }
//   changeState(event){
//     let value = event.target.value
//     if (event.target.name === "complete"){
//         value = event.target.checked
//     }
//     this.setState({[event.target.name]:value})
//  }
//  render() {
//   return (
//     <div>

//       <input name="complete" type="checkbox"
//         checked={this.state.complete}
//         onChange={this.changeState} />

//         <input name="name" type="text" placeholder="Type Something Here…"
//                   class={'taskTitle' +
//                       (this.state.complete ? ' complete ' : '')}
//                   value={this.state.name}
//                   onChange={this.changeState} />
//     </div>
//   )
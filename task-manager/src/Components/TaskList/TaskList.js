import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskList.css';
import Task from '../Task/Task';


export default function TaskList(props) {
    return (
        <div>
            <div>
                {/* <!-- Start of upper part: Title --> */}
                <div className="row title-row">
                    <div className="col mt-2 pb-2 border-bottom">
                        <h3 className="mb-0 mt-1 title">All Tasks</h3>
                    </div>
                </div>
                {/* <!-- End of upper part: Title --> */}
    
                {/* <!-- Start of lower part: List --> */}
                <div className="row">
                    {/* <!-- Start of main column --> */}
                    <div className="col mt-4 main-column">
                        {/* <!-- Start of the list --> */}
                        <ul className="list-group list-group-flush w-100">
                            
                            {/* <!-- Task Item(s) --> */}
                        {props.allTasks.map(task => <li className="list-group-item"><Task title={task.title}/></li>)}

        

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
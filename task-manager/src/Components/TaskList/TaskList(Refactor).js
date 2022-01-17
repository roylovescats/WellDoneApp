// import React
import React from "react";

// import stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskList.css';

// import task component
import Task from '../Task/Task';

export default function TaskList ({ allTasks }) {
    return (
        <div className="row h-100">
            <div className="col">
                {/* <!-- Start of upper part: Title --> */}
                <div className="row border-bottom title-row">
                    <div className="col">
                        <h3 className="mb-0 mt-2 title">
                            ALL TASKS
                        </h3>
                    </div>
                </div>
                {/* <!-- End of upper part: Title --> */}

                {/* <!-- Start of lower part: List --> */}
                <div className="row">
                <div className="btnClass">
                    <div className="dropdown">
                        <button className="dropbtn  fas fa-chevron-down">SORT BY</button>
                        <div className="dropdown-content">
                        <a href="#">A-Z</a>
                        <a href="#">Z-A</a>
                        </div>
                    </div>
                    <div className="remove">
                        <button className="removebtn">REMOVE DONE</button>
                    </div>
                </div>
                    {/* <!-- Start of main column --> */}
                    <div className="col mt-4 main-column">
                        {/* <!-- Start of the list --> */}
                        <ul className="list-group list-group-flush w-100">
                        {/* <!-- Task Item(s) --> */}
                        {allTasks.map(task => <li className="list-group-item"><Task task={task}/></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


// export class TaskList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.sortByAZ = this.sortByAZ.bind(this);
//         this.sortByZA = this.sortByZA.bind(this);
//     }
//     sortByAZ(a, b) {
//         if (a.text > b.text) {
//             return 1;
//         } else if (a.text == b.text) {
//             return 0;
//         } else {
//             return -1;
//         }
//     }
//     sortByZA(a, b) {
//         if (a.text < b.text) {
//             return 1;
//         } else if (a.text == b.text) {
//             return 0;
//         } else {
//             return -1;
//         }
//     }

// }
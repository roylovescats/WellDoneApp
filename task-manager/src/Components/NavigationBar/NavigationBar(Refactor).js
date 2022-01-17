import React from "react";
import { Hamburger } from "../Hamburger/Hamburger";
import { AddTask } from "../AddTask/AddTask"

import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.css'


export default function NavigationBar ({rightCol, handleToggle}) {
    return (
        <div className="mx-auto">
            <div className="py-3">
                <div className="row">

                    <nav className="navbar navbar-expand-lg navbar-light bg-0">

                        <div className="col-6">
                            <Hamburger />
                        </div>

                        <div className="col-6">
                            <div className="row">
                                <div className="col-3 border-right my-auto">
                                    <a className="menu-item" href="#">All Tasks</a>
                                </div>
                                <div className="col-3 my-auto">
                                    <a className="menu-item ms-5" href="#">Lists</a>
                                </div>

                                <div className="col-6 text-end">
                                    {/* <a className="text-center" id="addTask" href="#" onClick={this.openAdd}> */}
                                    <a className="text-center" href="#" onClick={handleToggle}>
                                        {!rightCol && <i className="fas fa-plus"></i>}
                                    </a>
                                </div>

                            </div>
                        </div>

                    </nav>

                </div>
            </div>
        </div>
    )
}

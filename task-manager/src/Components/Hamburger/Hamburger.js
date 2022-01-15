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
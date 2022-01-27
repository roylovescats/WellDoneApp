import React, { useState } from 'react';
import styled from 'styled-components';

//import Searcg bar component
import SearchBar from './SearchBar';

import Task from './Task'
import TaskList from './TaskList';


const Container = styled.div`
    height: 100vh; 
    width: 100%;
    padding: 0;
    min-height: 850px;
    position: relative;
`
const DateAndTime = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PirorityDot = styled.div`
display: inline-block ; border-radius: 50%; height: 8px; width: 8px; background: #C05757;
`

function HomePage({allTasksList, allTasks, handleRemoveDone}) {





    return (
        <Container className='col-12' id="Home">
            <div className="row h-100">
                {/* Start of left column */}
                <div className="col-5 d-none d-md-block left-column">

                    {/* start of upper part: Welcome */}
                    <div className="row mx-4" style={{height:"30%"}}>
                        <DateAndTime className='col-12'>
                                {/* text: date & time & task left */}
                            <div>
                                    {/* date & time */}
                                <div className="date-n-time">
                                    <h3>2022 FEB 11, Friday</h3>
                                    <h3>09:09am</h3>
                                </div>
                                <h1 className="mt-4">You've got 1 task to-do</h1>
                            </div>
                                {/* search bar */}
                                <SearchBar />
                        </DateAndTime>
                    </div>
                    {/* end of upper part: Welcome */}

                    {/* start of lower part: pinned list */}
                    <div className="py-5 mx-4" style={{height: "70%"}}>   
                        <div className="w-100 h-100 pinned-list px-3 pt-4">
                                {/* title div */}
                            <div className="row title-border">
                                    {/* title row */}
                                <div className="pb-3" style={{display: "flex"}}>
                                        {/* pin icon */}
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.22 4.38498C15.182 2.35398 17.866 1.88898 19.455 3.47798L24.938 8.96098C26.528 10.551 26.062 13.234 24.031 14.196L18.641 16.749C18.2347 16.9416 17.9182 17.2832 17.757 17.703L16.168 21.833C16.0633 22.1049 15.8923 22.3464 15.6705 22.5356C15.4488 22.7247 15.1833 22.8554 14.8982 22.9159C14.6131 22.9764 14.3174 22.9647 14.038 22.882C13.7585 22.7992 13.5042 22.648 13.298 22.442L10.166 19.31L4.47602 25H3.41602V23.94L9.10602 18.25L5.97402 15.118C5.76802 14.9118 5.61678 14.6575 5.53401 14.378C5.45125 14.0986 5.43958 13.8029 5.50008 13.5178C5.56057 13.2327 5.69131 12.9672 5.88043 12.7455C6.06954 12.5237 6.31105 12.3527 6.58302 12.248L10.713 10.658C11.133 10.498 11.474 10.181 11.666 9.77498L14.219 4.38498H14.22ZM18.394 4.53898C18.1957 4.34066 17.9527 4.19291 17.6854 4.10815C17.4181 4.02339 17.1343 4.00412 16.858 4.05195C16.5816 4.09979 16.3209 4.21333 16.0976 4.38301C15.8743 4.5527 15.6951 4.77355 15.575 5.02698L13.022 10.417C12.6647 11.1713 12.031 11.7592 11.252 12.059L7.12202 13.647C7.08309 13.6618 7.04849 13.6862 7.02136 13.7178C6.99424 13.7494 6.97545 13.7873 6.96671 13.8281C6.95796 13.8688 6.95954 13.9111 6.9713 13.9511C6.98305 13.9911 7.00461 14.0275 7.03402 14.057L14.358 21.381C14.3875 21.4104 14.4238 21.432 14.4637 21.4438C14.5036 21.4557 14.5459 21.4573 14.5866 21.4487C14.6273 21.44 14.6653 21.4214 14.6969 21.3943C14.7286 21.3673 14.7531 21.3328 14.768 21.294L16.357 17.164C16.6568 16.385 17.2447 15.7512 17.999 15.394L23.389 12.841C23.6426 12.7209 23.8637 12.5417 24.0335 12.3183C24.2033 12.095 24.3169 11.8341 24.3647 11.5576C24.4126 11.2811 24.3932 10.9972 24.3084 10.7298C24.2235 10.4624 24.0755 10.2192 23.877 10.021L18.394 4.53998V4.53898Z" fill="black"/>
                                    </svg>
                                    <h3 className="ms-3 my-auto">Pinned</h3>
                                </div>
                            </div>

                                {/* start of list container */}
                            <div className="row pt-4 " style={{overflow: "scroll"}}>
                                <div className="col-12">
                                        {/* start of pinned task */}
                                    <div className="w-100 my-3 px-1 pinned-task" >
                                            {/* start of pinned item */}
                                        <div className="pinned-task-title">
                                                {/* pirority dot */}
                                                <PirorityDot />
                                                {/* task title */}
                                            <p className="ms-2">
                                                Feed the cats
                                            </p>
                                        </div>                                                        
                                        <p style={{display: "inline-block", fontWeight: 200}}>Today</p>
                                    </div>
                                        {/* end of pinned tas */}
                                </div>
                            </div>
                                {/* end of list container */}
                        </div>
                    </div>
                    {/* end of lower part: pinned lis */}
                </div>
                {/* End of left column */}




                {/* Start of right column */}
                <div className="right-column col-md-7 py-5 ps-4 pe-5">

                    <div className="mx-3 all-tasks">
                        {/* start of title row*/}
                        <div className="row mx-5 title-border" style={{height: "10%"}}>
                                <h3 className="pt-4 my-auto ">ALL TASKS</h3>
                        </div>
                        {/* end of title row*/}
                        
                        {/* start of function row */}
                        <div className="row px-5" style={{height: "10%"}}>
                            <div className="col-4 my-auto">
                                <p style={{fontSize: 25}}>
                                    Sort by
                                </p>
                            </div>
                            <div className="col my-auto text-end">
                                <a href="#" style={{fontSize: 25}}
                                    onClick={handleRemoveDone}
                                >
                                    Remove done
                                </a>
                            </div>
                        </div>
                        {/* end of function row */}

                        {/* start of task list */}
                        <div className="row pt-4 task-list">
                            <div className="col-12">
                                
                                {/* start of task container */}
                                <div className="mx-5">
                                    {/* start of task item */}
                                    {allTasksList.map(taskId => 
                                        <Task task={allTasks[taskId]}/>)
                                    }  
                                    {/* end of task item */}

                                    

                                </div>
                                {/* end of task container */}

                            </div>
                        </div>
                        {/* end of task list */}


                    </div>

                </div>
                {/* End of right column */}









            </div>
        </Container>
    );
}

export default HomePage;
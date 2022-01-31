import React, { useState } from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from './Task';

import styled from 'styled-components';

const TasksContainer = styled.div`
    overflow: hidden;
`


function AllTaskList({ columns, onDragEnd, allTasks, handleEditTask, handleToggleDone, handleRemoveTask }) {

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div className="row task-list" style={{maxHeight: 645}}>
            {/* start of task list */}
            <div className="col-12">

                {/* start of task container */}
                    <Droppable
                        droppableId="all-tasks"
                        type="all-tasks"
                    >
                    {(provided, snapshot) => (
                        <TasksContainer
                            className='mx-5 h-100'
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            // isDraggingOver={snapshot.isDraggingOver}    
                        >
                            {columns['all-tasks'].taskIds.map((taskId, index) => 
                                <Task 
                                    key={allTasks[taskId].id}
                                    index={index}
                                    task={allTasks[taskId]}
                                    handleEditTask={handleEditTask}
                                    handleToggleDone={handleToggleDone}
                                    handleRemoveTask={handleRemoveTask}
                                />)
                            }

                            {provided.placeholder}
                        </TasksContainer>  

                    )}

                    </Droppable>
        
                {/* end of task container */}

            </div>
            {/* end of task list */}
        </div>
        </DragDropContext>

    );
}

export default AllTaskList;
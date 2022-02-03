import React from 'react';
import TaskColumn from './TaskColumn';

import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
    display: inline-flex;
    flex-wrap: none;
    width: auto
`


function ColumnsSlider({ columns, columnOrder, onDragEnd, allTasks, handleAddColumn }) {
    const handleClick = e => {
        e.preventDefault();
        handleAddColumn()
    }



    return (
        <div className="slider w-100 h-100">

        {/* task lists contatiner */}
        <div className="slider-inner pt-md-4 ps-4">
            

        <DragDropContext
            onDragEnd={onDragEnd}
        >
        <Droppable
            type='columns'
            droppableId="all-columns"
            direction="horizontal"
        >
        {(provided, snapshot) => (
            <Container
                {...provided.droppableProps}
                ref={provided.innerRef}
                // isDraggingOver={snapshot.isDraggingOver}    
            >
                {columnOrder.map((columnId, index) => 
                    <TaskColumn key={columnId} column={columns[columnId]} index={index} allTasks={allTasks}/>
                )}
                {provided.placeholder}
            </Container>
        )}
        </Droppable>


            {/* add list button */}
            <div className="pt-5 me-3" style={{width: 315, display: "inline-block"}}>
                {/* Task list Title */}

                {/* button body */}
                <div    className="w-100" 
                        style={{background: "rgba(43, 43, 43, 0.377)",
                                borderRadius: 2,
                                flexDirection: "column",
                                display: "flex",
                                borderRadius: 3,
                                marginTop: 35.59
                                }}
                >

                    {/* list Draggable handle */}
                    <div style={{width: "100%", height: 48, position: "relative"}}>
                        <button onClick={handleClick} className="w-100 btn bg-0 h-100" style={{color: "white", position: "absolute", top: 0}}>+ NEW LIST</button>
                    </div>

                 
                </div>
                {/* end of task list */}

            </div>
        </DragDropContext>

            {/* <TaskColumn /> */}
            {/* end of task list */}


            </div>




    </div>
    );
}

export default ColumnsSlider;
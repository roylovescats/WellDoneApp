import React from 'react';
import TaskColumn from './TaskColumn';

function ColumnsSlider({ columns, columnsOrder }) {
    return (
        <div className="slider w-100 h-100">

        {/* task lists contatiner */}
        <div className="slider-inner pt-md-4 ps-4">


            {/* start of task List */}
                
                {columnsOrder.map(columnsId => 
                    <TaskColumn column={columns[columnsId]} />
                

                )}

            {/* <TaskColumn /> */}
            {/* end of task list */}

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
                        <button className="w-100 btn bg-0 h-100" style={{color: "white", position: "absolute", top: 0}}>+ NEW LIST</button>
                    </div>

                 
                </div>
                {/* end of task list */}


            </div>


            </div>




    </div>
    );
}

export default ColumnsSlider;
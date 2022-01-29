import React from 'react';
import TaskCard from './TaskCard';

function TaskColumn() {
    return (
        <div 
            className="pt-md-5 me-3"
            style={{
                width: 315,
                display: "inline-block"
            }}
        >
            {/* Task list Title */}
            <h3>PROJECT</h3>

            {/* Task list Container */}
            <div 
                className="w-100 task-list"
                style={{ 
                    borderRadius: 2,
                    flexDirection: "column",
                    display: "flex",
                    borderRadius: 3
                }}
            >

                {/* list Draggable handle */}
                <div style={{
                        padding: 24,
                        position: "relative"
                    }}
                >
                    {/* remove list icon */}
                    <svg style={{position: "absolute", right: 15, top: 15}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6875 11.25H16.3125C16.4156 11.25 16.5 11.3344 16.5 11.4375V12.5625C16.5 12.6656 16.4156 12.75 16.3125 12.75H7.6875C7.58437 12.75 7.5 12.6656 7.5 12.5625V11.4375C7.5 11.3344 7.58437 11.25 7.6875 11.25Z" fill="#70bbae"/>
                        <path d="M12 1.5C17.7984 1.5 22.5 6.20156 22.5 12C22.5 17.7984 17.7984 22.5 12 22.5C6.20156 22.5 1.5 17.7984 1.5 12C1.5 6.20156 6.20156 1.5 12 1.5ZM12 20.7188C16.8141 20.7188 20.7188 16.8141 20.7188 12C20.7188 7.18594 16.8141 3.28125 12 3.28125C7.18594 3.28125 3.28125 7.18594 3.28125 12C3.28125 16.8141 7.18594 20.7188 12 20.7188Z" fill="#70bbae"/>
                    </svg>
                    
                </div>

                {/* start of task item */}
                <div style={{
                    padding: 8,
                    transition: "background 0.2 ease",     
                    flexGrow: 0,
                    minHeight: 100,
                    borderBottomLeftRadius: 3,
                    borderBottomRightRadius: 3
                    }}
                >

                    {/* Task */}
                    <TaskCard />
                </div>
                {/* end of task item */}

            </div>
            {/* end of task list */}


        </div>
    );
}

export default TaskColumn;
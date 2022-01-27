import React, { useState } from 'react';

function Task({task}) {
    const details = [];
    const time = task.time
    const location = task.location
    const date = task.date
    if (date) {
        details.push(date)
    }
    if (time) {
        details.push(time)
    }
    if (location) {
        details.push(location)
    }

    const [done, setDone] = useState(task.done);
    const handleDone = () => {
        setDone(!done)
        task.done = !task.done
        console.log(done)
    }

    return (
        <div    
        className="task-item accordion-item" 
        style={{borderRadius: 12,
                marginBottom: 8}}
                

    >
        {/* start of upper row */}
        <div className="row">

            {/* Done icon */}
            <div className="col-1 m-auto">
                <i  
                    onClick={handleDone}
                    // onClick={() => {task.done = !task.done}}
                    className="m-auto d-block fas fa-check p-1"
                    style={{
                        fontSize: 16,
                        color: task.done ? 'black' : 'lightGrey',
                        }}
                    >    
                </i>
            </div>

            {/* Event title */}
            <div 
                className="col my-auto"
                type="button"
                data-bs-toggle="collapse" data-bs-target={"#all" + task.id}
                aria-expanded="false" aria-controls="collapseTwo"
            
            >
                <p 
                    style={{
                        fontSize: 22,
                        textDecoration: task.done ? "line-through" : "none"
                    }}
                >
                    {task.title}
                    {/* Feed the cats */}
                </p>
            </div>



            {/* edit task button */}
            <button className="col-1 my-auto">
                <svg width="22" height="22" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.5208 5.77777L19.4444 1.68055C19.1751 1.41254 18.8105 1.26208 18.4305 1.26208C18.0505 1.26208 17.686 1.41254 17.4166 1.68055L2.96526 16.1111L1.64581 21.8055C1.6003 22.0137 1.60186 22.2294 1.65038 22.4369C1.6989 22.6444 1.79316 22.8384 1.92627 23.0048C2.05938 23.1712 2.22798 23.3057 2.41975 23.3986C2.61152 23.4915 2.82162 23.5404 3.0347 23.5417C3.13399 23.5517 3.23403 23.5517 3.33331 23.5417L9.09026 22.2222L23.5208 7.80555C23.7888 7.53618 23.9393 7.17165 23.9393 6.79166C23.9393 6.41167 23.7888 6.04714 23.5208 5.77777V5.77777ZM8.39581 20.9722L2.99998 22.1042L4.22915 16.8125L15.0416 6.04166L19.2083 10.2083L8.39581 20.9722ZM20.1389 9.20138L15.9722 5.03471L18.3889 2.63194L22.4861 6.7986L20.1389 9.20138Z" fill="black"/>
                </svg>    
            </button>
            {/* delete task button */}
            <button  className="col-1 my-auto">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.04688 10.3125H14.9531C15.0477 10.3125 15.125 10.3898 15.125 10.4844V11.5156C15.125 11.6102 15.0477 11.6875 14.9531 11.6875H7.04688C6.95234 11.6875 6.875 11.6102 6.875 11.5156V10.4844C6.875 10.3898 6.95234 10.3125 7.04688 10.3125Z" fill="black"/>
                    <path d="M11 1.375C16.3152 1.375 20.625 5.68477 20.625 11C20.625 16.3152 16.3152 20.625 11 20.625C5.68477 20.625 1.375 16.3152 1.375 11C1.375 5.68477 5.68477 1.375 11 1.375ZM11 18.9922C15.4129 18.9922 18.9922 15.4129 18.9922 11C18.9922 6.58711 15.4129 3.00781 11 3.00781C6.58711 3.00781 3.00781 6.58711 3.00781 11C3.00781 15.4129 6.58711 18.9922 11 18.9922Z" fill="black"/>
                </svg>  
            </button>
        </div>
        {/* end of upper row */}

        {/* start of lower row */}
        <div className="row" style={{alignItems: "center"}}>

            {/* pirority icon */}
            <div className="col-1">
                <div className="me-auto ms-2"
                    style={{borderRadius: "50%", height: 10, width: 10, background: "#C05757"}}>
                </div>
            </div>

            {/* date & time */}
            <div className="col">
                <p className="text-secondary" style={{fontSize: 18}}>
                    {/* 7:00am ‧ Home  */}
                    {details.join(' ‧ ')}
                </p>
            </div>
        </div>
        {/* end of lower row */}

        {/* drop down notes */}
        <div id={"all" + task.id} className="accordion-collapse collapse"
            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body row">
                <div className="col offset-1 pt-3 h-auto">
                    <p style={{fontSize: 20}}>{task.notes}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Task;
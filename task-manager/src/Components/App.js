import { useState, useEffect } from 'react';

import $ from 'jquery';

// import styled components
import styled from'styled-components';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


// import Toggle Task Form Button
import TaskFormToggle from './TaskFormToggle';

//import Sidebar
import SideBar from './SideBar';
import Overview from './Overview/Overview';
import TaskForm from './TaskForm';
import ListsPage from './Lists/ListsPage';

import MobileNav from './MobileNav';


const MainRow = styled.div`
  height: 100vh;
  overflow: hidden
`

function App() {

	// state of new task input
	const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState({});

  // lists for dnd
  // const [list, setList] = useState({})
  const [columns, setColumns] = useState({
    'all-tasks': {
      id: 'all-tasks',
      taskIds: []
    },
  })
  const [columnOrder, setColumnOrder] = useState([])


  // add column
  const handleAddColumn = () => {
    const id = Date.now();
    setColumns(prev => ({
      ...prev,
      [id]: {
        id: id,
        title: 'New List',
        taskIds: [],
      }
    }))

    setColumnOrder(prev => ([
      ...prev,
      id
    ]))
  }


  // reorder tasks order on drag end
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if ( 
      // if item is dropped outside of the droppable area or...
      !destination ||
      (
          // if item is dropped at the same position as its place
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        )
      ) 
    {
      // terminate function
      return;
    }


    if(type === 'columns') {
      const newColumnOrder = Array.from(columnOrder);

      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setColumnOrder(newColumnOrder);

      return;
    }


    // declare starting point (check which droppable id the item is from)
    const start = columns[source.droppableId];
    // declare destination point (check which droppable id the item is dropped)
    const finish = columns[destination.droppableId];

    // if the items dropped as the same droppable id it belongs
    if(start === finish) {
      // make a copy of the task ids order array
      const newTaskIds = Array.from(start.taskIds);

      // remove 1 item (the dragging item(id)) from the original index of the droppable 
      newTaskIds.splice(source.index, 1);
      // remove 0 item from the destination index of the droppable, 
      // add the dragging item(id) after the index 
      newTaskIds.splice(destination.index, 0, draggableId);
      
      // update data in the column
      setColumns(prev => ({
        ...prev,
        [start.id]: {
          ...start,
          taskIds: newTaskIds
        }
      }));
      
      return;
    }
    
    
    // Moving from one list to another
    // make a copy of the task ids array of the starting droppable
    const startTaskIds = Array.from(start.taskIds);
    // remove 1 item (dragging item(draggable id)) from the original index of the droppable
    startTaskIds.splice(source.index, 1);
    
    // make a new state for later update the starting column data
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    
    // make a copy of the task ids array of the destination droppable
    const finishTaskIds = Array.from(finish.taskIds);
    // remove 0 item from the destination index of the droppable, 
    // add the dragging item(id) after the index 
    finishTaskIds.splice(destination.index, 0, draggableId)

    // make a new state for later update the destination column data
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    // update columns data
    setColumns(prev => ({
      ...prev,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    }))

  }

  // new task form input
	const handleChange = ({ target }) => {
		// insert corresponding name and input as porperty [name] & value in the newTask object
		const { name, value } = target;
    // generate id for each task
    const id = Date.now();

		setNewTask((prevNewTask) => ({
			...prevNewTask,
        [name]: value,
        id: id,
        done: false,
		})
		);

    console.log(allTasks)
	};
  //submit new task
	const handleSubmitTask = list => {
		// prevent default action
		// event.preventDefault();

			// shift new task in all tasks list (before previous task(s))
			setAllTasks((prevAllTasks) => ({
				...prevAllTasks,
        [newTask.id]: newTask,
      })
			);


      setColumns(prev => ({
        ...prev,
        'all-tasks': {
          ...columns['all-tasks'],
          taskIds: [...columns['all-tasks'].taskIds, newTask.id]
        },
        [list] : {
          ...columns[list],
          taskIds: [...columns[list].taskIds, newTask.id]
        }
      }))

			// empty the value of newTask
			setNewTask({});
	}
  

  // remove tasks marked as done
  const handleRemoveDone = e => {
		e.preventDefault();


    const newArr = columns['all-tasks'].taskIds.slice();

    for(let key in columns) {
      let newIds = columns[key].taskIds.filter(task => allTasks[task].done === false
      );
      setColumns(prev => ({
        ...prev,
        [key]: {
          ...columns[key],
          taskIds: newIds
        }
      }))
      
    }

    newArr.forEach(task => {


      if (allTasks[task].done) {
        const newAllTasks = {...allTasks};
        delete newAllTasks[task]
        setAllTasks(newAllTasks)
      }


    })

  }
  // remove task individually
  const handleRemoveTask = taskId => {

    const newAllTasks = allTasks;
    delete newAllTasks[taskId]
    setAllTasks(newAllTasks)
    // setColumns(columns['all-tasks'].taskIds.filter(task => task !== taskId));



    for(let key in columns) {
      let newIds = columns[key].taskIds.filter(task => task !== taskId)

      setColumns(prev => ({
        ...prev,
        [key]: {
          ...columns[key],
          taskIds: newIds
        }
      }))
    }
  }
  // edit task detail
  const handleEditTask = (taskId, content) => {
    setAllTasks(prevAllTasks => ({
      ...prevAllTasks,
      [taskId]: content
    }))
  }
  // toggle task done status
  const handleToggleDone = (taskId) => {
      setAllTasks(prevAllTasks => ({
        ...prevAllTasks,
        [taskId]: {
          ...allTasks[taskId],
          done: !allTasks[taskId].done
        }
      }))
  }

  // Toggle add task form
  useEffect(() => {
    $(document).ready(function() {
      $('#addTask').on("click", function() {
          $("#taskForm").toggleClass("active");
          $("#addBtn").toggleClass("active");
      })
  })

  },[])
  
//   // fetch all tasks data
//   useEffect(() => {
//     // fetch data from local storage
//     const data = localStorage.getItem('Tasks');
//     // add the parsed data to allTasks
//     setAllTasks(JSON.parse(data));
//   // only fetch on page loaded
// }, [])

// // fetch all tasks list data
// useEffect(() => {
//     // fetch data from local storage
//     const data = localStorage.getItem('Lists');
//     // add the parsed data to allTasks
//     setColumns(JSON.parse(data));
// // only fetch on page loaded
// }, [])


//   // store all tasks data
// 	useEffect(() => {
// 		localStorage.setItem('Tasks', JSON.stringify(allTasks))
// 	}, [allTasks])

//   // store all tasks list data
// 	useEffect(() => {
// 		localStorage.setItem('Lists', JSON.stringify(columns))
// 		localStorage.setItem('Tasks', JSON.stringify(allTasks))

// 	}, [columns])






  return (
    <div className="App">
      <TaskFormToggle />
      <MobileNav />

      <div className='container-fluid' style={{padding: 0, overflow: 'hidden'}}>
        <MainRow className='row'>
          <SideBar />


          <main className="col">
            <div className="row" style={{height: '100vh'}}>

              <Overview
                columns={columns}
                handleRemoveDone={handleRemoveDone}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleEditTask={handleEditTask}
                handleToggleDone={handleToggleDone}
                handleRemoveTask={handleRemoveTask}
              />

              <ListsPage 
                columns={columns}
                columnOrder={columnOrder}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleAddColumn={handleAddColumn}
              />


            </div>

          </main>

          <TaskForm
            newTask={newTask}
            handleSubmitTask={handleSubmitTask}
            handleChange={handleChange}
            columnOrder={columnOrder}
            columns={columns}

          />







        </MainRow>

        
      </div>

    </div>
  );
}

export default App;

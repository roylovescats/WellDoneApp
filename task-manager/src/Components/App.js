import { useState, useEffect } from 'react';

// import JQuery
import $ from 'jquery';

import {v4 as uuid} from "uuid"; 

// import styled components
import styled from'styled-components';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// custom stylesheet
import './App.css';


// import Task Form Switch Button
import TaskFormToggle from './TaskFormToggle';

// import Sidebar
import SideBar from './SideBar';
// import nav bar for moblie
import MobileNav from './MobileNav';

// import section 1 - Overview
import Overview from './Overview/Overview';

// import section 2 - Lists Page
import ListsPage from './Lists/ListsPage';


import TaskForm from './TaskForm';



const MainRow = styled.div`
  height: 100vh;
  overflow: hidden
`

function App() {

	// new task input state
	const [newTask, setNewTask] = useState({});

    // new task form input
	const handleChange = ({ target }) => {
		// insert corresponding name and input as porperty [name] & value in the newTask object
		const { name, value } = target;
    // generate id for each task
    const id = uuid();

		setNewTask((prevNewTask) => ({
			...prevNewTask,
        [name]: value,
        id: id,
        done: false,
		})
		);
	};

  // all tasks data storage
  const [allTasks, setAllTasks] = useState({});

  // task lists storage
  const [lists, setLists] = useState({
    // storing all tasks order for section 1 - Overview
    'all-tasks': {
      id: 'all-tasks',
      title: 'All Tasks',
      taskIds: []
    },
  })

  // task column order (for drag and drop)
  const [listOrder, setListOrder] = useState([])


  // add column
  const handleAddColumn = () => {
    const id = uuid();
    setLists(prev => ({
      ...prev,

      // new column 
      [id]: {
        // column id
        id: id,
        // column title
        title: 'New List',
        // tasks belonged to the list
        taskIds: [],
      }



    }))

    setListOrder(prev => ([
      ...prev,
      id
    ]))
  }

  // change list name
  const handleEditListTitle = (id, title) => {
    if(title.length === 0) {
      setLists(prev => ({
        ...prev,
        [id]: {
          ...lists[id],
          title: 'unnamed list'
        }
      }))
      return;
    }

    setLists(prev => ({
      ...prev,
      [id]: {
        ...lists[id],
        title: title
      }
    }))
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


    if(type === 'lists') {
      const newColumnOrder = Array.from(listOrder);

      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      setListOrder(newColumnOrder);

      return;
    }


    // declare starting point (check which droppable id the item is from)
    const start = lists[source.droppableId];
    // declare destination point (check which droppable id the item is dropped)
    const finish = lists[destination.droppableId];

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
      setLists(prev => ({
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

    // update lists data
    setLists(prev => ({
      ...prev,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    }))

  }

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

      setLists(prev => ({
        ...prev,
        'all-tasks': {
          ...lists['all-tasks'],
          taskIds: [...lists['all-tasks'].taskIds, newTask.id]
        },
        [list] : { 
          ...lists[list],
          taskIds: [...lists[list].taskIds, newTask.id]
        }
      }))

			// empty the value of newTask
			setNewTask({});
	}
  

  // remove tasks marked as done
  const handleRemoveDone = e => {
		e.preventDefault();


    const newArr = lists['all-tasks'].taskIds.slice();

    for(let key in lists) {
      let newIds = lists[key].taskIds.filter(task => allTasks[task].done === false);
      setLists(prev => ({
        ...prev,
        [key]: {
          ...lists[key],
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
    const newArr = lists['all-tasks'].taskIds.slice();

      for(let key in lists) {
        let newIds = lists[key].taskIds.filter(task => allTasks[task].id !== taskId);
        setLists(prev => ({
          ...prev,
          [key]: {
            ...lists[key],
            taskIds: newIds
          }
        }))
        
      }

        newArr.forEach(task => {
          if (allTasks[task].id === taskId) {
            const newAllTasks = {...allTasks};
            delete newAllTasks[task]
            setAllTasks(newAllTasks)
          }
        
        })
        


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
      $('#addTask').on("click", function() {
          $("#taskForm").toggleClass("active");
          $("#addBtn").toggleClass("active");  
  })
  }, [])
  
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
//     setLists(JSON.parse(data));
// // only fetch on page loaded
// }, [])


//   // store all tasks data
// 	useEffect(() => {
// 		localStorage.setItem('Tasks', JSON.stringify(allTasks))
// 	}, [allTasks])

//   // store all tasks list data
// 	useEffect(() => {
// 		localStorage.setItem('Lists', JSON.stringify(lists))
// 		localStorage.setItem('Tasks', JSON.stringify(allTasks))

// 	}, [lists])






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
                lists={lists}
                handleRemoveDone={handleRemoveDone}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleEditTask={handleEditTask}
                handleToggleDone={handleToggleDone}
                handleRemoveTask={handleRemoveTask}
              />

              <ListsPage 
                lists={lists}
                listOrder={listOrder}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleAddColumn={handleAddColumn}
                handleEditListTitle={handleEditListTitle}
              />


            </div>

          </main>

          <TaskForm
            newTask={newTask}
            handleSubmitTask={handleSubmitTask}
            handleChange={handleChange}
            listOrder={listOrder}
            lists={lists}

          />







        </MainRow>

        
      </div>

    </div>
  );
}

export default App;

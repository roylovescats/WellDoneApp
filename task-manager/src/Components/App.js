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

const MainRow = styled.div`
  height: 100vh;
  overflow: hidden
`

function App() {

	// state of new task input
	const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState(null);

  const [allTasksList, setAllTasksList] = useState([])

  // lists for dnd
  // const [list, setList] = useState({})
  const [columns, setColumns] = useState({
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  })
  const [columnsOrder, setColumnsOrder] = useState ([

    'column-1',
    'column-2', 
    'column-3'
  ])


  // reorder tasks order on drag end
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if(!destination) {
        return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
    ) {
        return;
    }

    const newTaskIds = Array.from(allTasksList);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = newTaskIds;

    setAllTasksList(newColumn);
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

    // console.log(allTasks)
	};
  //submit new task
	const handleSubmit = (event) => {
		// prevent default action
		event.preventDefault();

			// shift new task in all tasks list (before previous task(s))
			setAllTasks((prevAllTasks) => ({
				...prevAllTasks,
        [newTask.id]: newTask,
      })
			);

      // add task id to all tasks list
      setAllTasksList((prev) => ([
        ...prev,
        newTask.id
      ]))

			// empty the value of newTask
			setNewTask({});
	}
  

  // remove tasks marked as done
  const handleRemoveDone = e => {
		e.preventDefault();
    setAllTasksList(allTasksList.filter(task => 
      { 
        //keep tasks haven't been done on list, for later return
        const taskToKeep = allTasks[task].done === false;

        // delete task(s) done
        if(allTasks[task].done === true) {
          delete allTasks[task]
        }
        return taskToKeep
      }
      ))
      ;
  }
  // remove task individually
  const handleRemoveTask = taskId => {
    delete allTasks[taskId]
    setAllTasksList(allTasksList.filter(task => task !== taskId))
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
  })

  // fetch all tasks data
  useEffect(() => {
    if(!allTasks) {
      // fetch data from local storage
      const data = localStorage.getItem('testing-task');
      // add the parsed data to allTasks
      setAllTasks(JSON.parse(data));
    }
    // only fetch on page loaded
  }, [])
// fetch all tasks list data
  useEffect(() => {
      // fetch data from local storage
      const data = localStorage.getItem('testing-task-list');
      // add the parsed data to allTasks
      setAllTasksList(JSON.parse(data));
  // only fetch on page loaded
  }, [])


  // store all tasks data
	useEffect(() => {
		localStorage.setItem('testing-task', JSON.stringify(allTasks))
	}, [allTasks, allTasksList])

  // store all tasks list data
	useEffect(() => {
		localStorage.setItem('testing-task-list', JSON.stringify(allTasksList))
	}, [allTasksList])






  return (
    <div className="App">
      <TaskFormToggle />
      <div className='container-fluid' style={{padding: 0, overflow: 'hidden'}}>
        <MainRow className='row'>
          <SideBar />


          <main className="col">
            <div className="row" style={{height: '100vh'}}>

              <Overview
                allTasksList={allTasksList}
                handleRemoveDone={handleRemoveDone}
                onDragEnd={onDragEnd}
                allTasks={allTasks}
                handleEditTask={handleEditTask}
                handleToggleDone={handleToggleDone}
                handleRemoveTask={handleRemoveTask}
              />

              <ListsPage 
                columns={columns}
                columnsOrder={columnsOrder}
              />


            </div>

          </main>

          <TaskForm
            newTask={newTask}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />







        </MainRow>

        
      </div>

    </div>
  );
}

export default App;

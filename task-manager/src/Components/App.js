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
import HomePage from './HomePage';
import TaskForm from './TaskForm';


const Body = styled.div`
  padding: 0;
  overflow: hidden;
`

const MainRow = styled.div`
  height: 100vh;
`



function App() {

	// state of new task input
	const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState({});

  const [allTasksList, setAllTasksList] = useState([])



  // lists for dnd
  const [list, setList] = useState({})
  const [allLists, setAllLists] = useState([])

  // inputing form
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

  //submit task
	const handleSubmit = (event) => {
		// prevent default action
		event.preventDefault();

		// nothing happens if no title input
		if (!newTask.title) {
			alert('Please provide a title for your task');
			return;
		};
			// shift new task in all tasks list (before previous task(s))
			setAllTasks((prevAllTasks) => ({
				...prevAllTasks,
        [newTask.id]: newTask,
      })
			);

      setAllTasksList((prev) => ([
        ...prev,
        newTask.id
      ]))
			// empty the value of newTask
			setNewTask({});
	}


  const handleRemoveDone = (e) => {
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

    // console.log(allTasksDone);

  }


  useEffect(() => {
    $(document).ready(function() {
      $('#addTask').on("click", function() {
          $("#taskForm").toggleClass("active");
      })
  })
  },[])

	//store data in local storage with useEffect

	// useEffect(() => {
	// 	const data = localStorage.getItem('testing-task-list');
	// 	if (data) {
	// 		setAllTasks(JSON.parse(data));
	// 	}
	// }, [1])

	// useEffect(() => {
	// 	localStorage.setItem('testing-task-list', JSON.stringify(allTasks))
	// })


  return (
    <div className="App">
      <TaskFormToggle />
      <Body className='container-fluid'>
        <MainRow className='row'>
          <SideBar />



          <main className="col">
            <div className="row h-100">
              <HomePage
                allTasksList={allTasksList}
                allTasks={allTasks}
                handleRemoveDone={handleRemoveDone}
                />

            </div>

          </main>

          <TaskForm
            newTask={newTask}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />







        </MainRow>

        
      </Body>

    </div>
  );
}

export default App;

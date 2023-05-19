import {useEffect, useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


// const toDoParse2 = JSON.parse(localStorage.getItem('todo2')) // []
function App() {
  const toDoParse = JSON.parse(localStorage.getItem('todo')) // []
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState(toDoParse || []);
  
  

  useEffect(()=> {
    localStorage.setItem("todo", JSON.stringify(toDo));
  },[toDo])
  // const parsetoDo = JSON.parse(str)
  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  ///////////////////////////
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1; 
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }
////////////////////////////////// booorar linea de ref

const toDoParse2 = JSON.parse(localStorage.getItem('todo2')) // []
const [toDo2, setToDo2] = useState(toDoParse2 || []);

useEffect(()=> {
  localStorage.setItem("todo2", JSON.stringify(toDo2));
},[toDo2])


  // Temp State
  const [newTask2, setNewTask2] = useState('');
  const [updateData2, setUpdateData2] = useState('');

  // Add task 
  ///////////////////////////
  const addTask2 = () => {
    if(newTask2) {
      let num2 = toDo2.length + 1; 
      let newEntry2 = { id: num2, title: newTask2, status: false }
      setToDo2([...toDo2, newEntry2])
      setNewTask2('');
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask2 = (id) => {
    let newTasks2 = toDo2.filter( task => task.id !== id)
    setToDo2(newTasks2);
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone2 = (id) => {
    let newTask2 = toDo2.map( task => {
      if( task.id === id ) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo2(newTask2);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate2 = () => {
    setUpdateData2('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask2 = (e) => {
    let newEntry2 = {
      id: updateData2.id,
      title: e.target.value,
      status: updateData2.status ? true : false
    }
    setUpdateData2(newEntry2);
  }

  // Update task
  ///////////////////////////
  const updateTask2 = () => {
    let filterRecords2 = [...toDo2].filter( task => task.id !== updateData2.id );
    let updatedObject2 = [...filterRecords2, updateData2]
    setToDo2(updatedObject2);
    setUpdateData2('');
  }

  return (
    <div className="container App">
      <div className='conteiner-information'>
      <br /><br />
    <h2>INFORMATION</h2>
    <br /><br />

    {updateData && updateData ? (
      <UpdateForm 
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    )}

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Information...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}
    />
      </div>
{/* ----------------------------------------------- borrar desde aqui*/}
      <div className='conteiner-information' >
      <br /><br />
    <h2>IMPORTANT INFORMATION</h2>
    <br /><br />

    

    {/* Display ToDos */}

    {toDo2 && toDo2.length ? '' : 'No Information...'}

    <ToDo
      toDo={toDo2}
      setUpdateData={setUpdateData2}
      deleteTask={deleteTask2}
    />
    {updateData2 && updateData2 ? (
      <UpdateForm 
        updateData={updateData2}
        changeTask={changeTask2}
        updateTask={updateTask2}
        cancelUpdate={cancelUpdate2}
      />
    ) : (
      <AddTaskForm 
        newTask={newTask2}
        setNewTask={setNewTask2}
        addTask={addTask2}
      />
    )}
      </div>
    </div>
  );
}

export default App;
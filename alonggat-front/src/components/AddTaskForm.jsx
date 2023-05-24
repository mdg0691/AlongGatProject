const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <textarea value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
               cols="30" rows="1"></textarea>
            {/* <input 
              value={newTask}
              onChange={ (e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            /> */}
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn btn-lg btn-success">Add
            </button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;
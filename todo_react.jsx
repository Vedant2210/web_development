import React, { useState } from 'react'

const App = () => {

  
  const [data,setData]=useState("");
  const[task,setTask]=useState([]);
  function handleChange(e){
    setData(e.target.value);
  }
  function handleadd(){
    if(data!==""){
    setTask([...task,data]);
    setData("");
    }
  }
  function handleRemove(){
    if(task.length!=0){
    setTask(task.slice(0,-1));
    }
  }

  function renderTasks(){
    return task.map((t,index)=>(
      <p>{t}</p>
    ))
  }
  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <label >Enter your task</label>
        <input type="text" placeholder='enter your task'  onChange={handleChange} />
        <button onClick={handleadd}> Add</button>
        <button onClick={handleRemove}>Remove</button>
        {renderTasks()}
      </div>
    </div>

    

  )
}

export default App

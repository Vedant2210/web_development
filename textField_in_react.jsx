import React, { useState } from 'react'



const App = () => {
  const [name,setName]=useState("");
  function handlechange(e){
    setName(e.target.value);
  }
  return (
    <div>
      <label >input your name</label>
      <input type="text" placeholder='Enter your name' onChange={handlechange} />
      <h1>hello {name||"Guest"}!</h1>
    </div>
  )
}




export default App


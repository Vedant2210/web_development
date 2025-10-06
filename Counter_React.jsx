import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  function handleIncrease(){
    setCount(count+1);
  }
  function handleDeccrease(){
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDeccrease}>Decrease</button>
    </div>
  )
}

export default App


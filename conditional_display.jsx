import React, { useState } from 'react'

const App = () => {
  const [show,setShow]=useState(false)
  function handleClick(){
    setShow(!show);
  }
  let buttontext;
  if(show){
    buttontext="hide message";
  }
  else{
    buttontext="show message";
  }

  let message;
  if(show){
    message="this is vedant ";
  }
  
  let secondtime;
  if(show){
    secondtime=<button onClick={handleClick}>This is second button</button>
  }
  return (
    <div>
      <button onClick={handleClick}>{buttontext}</button>
      {message}
      {secondtime}
    </div>
  )
}

export default App

import React from 'react';


const EventHandling = () => {
    const handleClick = () => {
        alert("Welcome User");
    };

    // whenever your event handler takes in a paramiter
    // to use it, you have to put in a another function
    const handleClickAgain = (name) => {
        alert (`Welcome ${name}`)
    }
  return (
    <div className="text-center py-10">
      <h1 className='text-3xl mb-4'>Responding to User Interactions</h1>
      <button onClick={handleClick} className='mybtn'>Click Me</button>
      <button onClick={() => handleClickAgain("john")} className='mybtn ml-3'>Click Again</button>
    </div>
  );
}

export default EventHandling;
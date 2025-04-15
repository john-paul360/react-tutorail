import React, { useState } from 'react';
// controlled input - set up state value from all input first
// by passing value

const SimpleForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFormSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className='myform'>
        <h1 className="txt-3xl font-medium text-center">Submit Name</h1>
        <input
          type="text"
          placeholder="First Name"
          className="myinput"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className='mybtn mx-33'>Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
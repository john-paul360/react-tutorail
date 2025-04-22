import React, { useState } from 'react';
// controlled input - set up state value from all input first
// by passing value


const SimpleForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const [users, setUsers] = useState([]);

    const handleFormSubmit = (e) =>{
      e.preventDefault();
      // function
      console.log(firstName, lastName);
      if (!firstName.trim() || !lastName.trim()) {
        setError("please fill all fields");
        return;
      }

      // add new user to users array
      setUsers([...users, { firstName, lastName}]);
      setFirstName("");
      setLastName("");
      setError("");

    };
   
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="txt-3xl font-medium text-center">Submit Name</h1>
        <p className="text-red-500">{error}</p>
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
        <button type="submit" className="mybtn mx-33">
          Submit
        </button>
      </form>
    {users.length > 0 && (<div className='myform'>
        <h1>List Of Users</h1>
        {users.map((user, index) => {
            return ( <p key={index}>{user.firstName} {user.lastName} </p>
          )})
        }
      </div>
    )};
    </div>
  );
}

export default SimpleForm;
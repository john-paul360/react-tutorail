import React from 'react';
import {useState} from 'react';

const User = () => {
    const [user, setUser] = useState(false);
    const handleLogIn = () => {
        setUser(true);
    };
    
  return (
    <>
      {!user ? <div>
        <h1>You not Logged in</h1>
        <button className="mybtn" onClick={handleLogIn}>Log in</button>
      </div> :<div>
        <h1>Welcome to Your dashboard</h1>
        <button className="mybtn" onClick={() => setUser(false)}>
          Log out
        </button>
      </div>}
    </>
  );
}

export default User;
import React from 'react';

const SimpleList = () => {
    const customer = ["Ade","john", "Jane", "Peter"];
    const User = ["Andrew", "Moses", "Simon", "David", "Jude"];
  return (
    <div>
        <h1>Outputting List in React</h1>
        <div>
            {
                customer.map((customer, index) => {
                    return <p key={index}>{customer} </p>
                })
            }
        </div>
        <div>
            <h1>List of User</h1>
        </div>
        <div className='text-green-900'>
            {
                User.map((User, index) => {
                    return <h1 key={index}>{User} </h1>
                })
            }
        </div>
    </div>
    
  );
};

export default SimpleList;
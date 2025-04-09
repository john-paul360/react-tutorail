import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name == "Declan") {
      setName("Saka");
    } else {
      setName("Declan");
    }
  };

  const [num, setNum] = useState(0);
  // increase
 
  
  };
  // decrease
  const handleDecrease = () => {
    setNum(num - 1);
  };
  const details = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, autem
          rem repudiandae reiciendis delectus dolor accusamus asperiores
          voluptas, ducimus soluta commodi illo facilis voluptatem eos tenetur
          vel odio. Deserunt adipisci libero, reiciendis neque placeat explicabo
          animi eaque! Delectus, expedita? Expedita iusto dolore, provident
          incidunt praesentium aspernatur cum voluptates sunt magni.` ;
          const [show, setshow] = useState(false);
          const handleShowDetails = () => {
            setshow(!show);
          };

  return (
    <div className="py-10 text-center">
      <h1 className=" text-3xl font-bold">UseState 1</h1>
      <p>My name is {name} </p>
      <button onClick={handleNameChange} className="mybtn">
        Change Name
      </button>

      <h1 className="text-4xl my-3.5"> {num} </h1>
      <button className="mybtn" onClick={handleIncrease}>
        {" "}
        Increase
      </button>
      <button className="mybtn" onClick={() => setNum(0)}>
        Reset
      </button>
      <button className="mybtn" onClick={handleDecrease}>
        Decrease
      </button>
      <div className="max-w-[600px] mx-auto m-5 bg-neutral-100 p-3 shadow-lg text-start">
        <h1 className="text-4xl font-bold">Top Football News</h1>
        <h2 className="text-2xl text-red-500 my-2">
          Madrid Demolished at the Emirate Stadium
        </h2>
        <p className="mb-2"> {show ? details : `${details.substr(0, 100)}...`} </p>
        <button onClick={handleShowDetails} className="mybtn">
            {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default SimpleState;

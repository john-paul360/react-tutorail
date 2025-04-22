import React from "react";

const ComplexList = () => {
  const Staff = [ 
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
      name: "John Doe",
      role: "Chief Operation Officer",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Peter Pan",
      role: "Head Of Finance",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
      name: "Jane Doe",
      role: "Head Of Marketing",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Chloe Meyer",
      role: "Creative Director",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Sonya Blade",
      role: "Admin Officer",
    },
  ];
  return (
    <div className="bg-blue-200 py-10">
      <h1 className="text-center text-blue-900 text-4xl font-bold">Meet the Team</h1>
      <p className="my-5 text-center text-md text-black w-[600px] mx-auto">
        Our team comprises a dynamic group of young and vibrant professionals
        who posses an unwavering commitment to go the extra mile in delivering
        exceptional service.
      </p>
      <div className="flex gap-3.5 max-w-[1000px] flex-wrap mx-auto">
        { Staff.map((member) => {
            const { id, image, name, role } = member;
                        return <div key={id} className="w-[320px] bg-white p-2.5 rounded-md">
                <img src={image} alt={name} className="rounded-md h-[300px]  w-full object-cover" />
                <h1 className="text-blue-900 font-bold text-2xl mt-3"> {name} </h1>
                <p className="text-gray-400 mt-2 font-semibold"> {role} </p>
            </div>
        })}
      </div>
    </div>
  );
};

export default ComplexList;

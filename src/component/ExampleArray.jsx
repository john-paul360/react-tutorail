import React from 'react';
import { useState } from 'react';

const films = [
     {  id: 1, 
        image:"https://images.unsplash.com/photo-1698577210633-6c8a2d7d2e69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjB3YWxwYXBlciUyMGltYWdlfGVufDB8fDB8fHww",
        title: "AYUMI KUBO"
    },
     {  id: 2, 
        image:"https://images.unsplash.com/photo-1573499945802-2e935ab7e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllJTIwd2FscGFwZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "NOAH SMIRTH"
    },
     {  id: 3,
        image:"https://images.unsplash.com/photo-1586115833082-c682a120dcea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwd2FscGFwZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "GERALD SCHOMBS"
    },
 ]

const ExampleArray = () => {
    const [movies, setMovies] = useState([]);

    if (movies.length === 0) {
        return (
            <div className='w-full max-w-[400px] mx-auto my-4 p-2.5 shadow-2xl text-center'>
                <h1>NO MOIES FOUNDYET</h1>
                <button onClick={() => setMovies(films)} className='mybtn'>Get Movies</button>
            </div>
        );
    }
  return (
    <div>
        <h1 className='my-4 font-bold text-3xl'>Movies Available</h1>
        <section className='flex gap-3'>
            {movies.map((movie) => {
                return (
                    <div key={movie.id} className='w-full max-w[300px]'>
                        <img src={movie.image} alt="title" className='w-full object-cover h-[200px]'/>
                        <p>{movie.title}</p>
                    </div>
                );
            })};
        </section>
    </div>
  );
};

export default ExampleArray;
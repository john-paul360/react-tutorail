import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white h-screen max-h-[600px]">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl">Buy Luxury Cars</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            architecto provident autem eaque doloremque? Nulla commodi quia
            voluptatem laborum iure?
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] cursor-pointer">
            Shop Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1629807390858-2d19718c41d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlsdXh8ZW58MHx8MHx8fDA%3D"
          alt="exotic cars"
          className="hidden md:block rounded-md w-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

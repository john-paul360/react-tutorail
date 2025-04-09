import React from 'react';

const Product = ({image, price, title, children}) => {
    return (
      <div>
        {children}
        <img src={image} alt="" />
        <p> {title} </p>
        <p>#{price}</p>
      </div>
    );
};

const PropsChildren = () => {
  return (
    <div>
      <h1 className='text-center bg-amber-600 text-white mx-auto m-5 rounded-sm'>List of Available Product</h1>
      <div className="flex gap-3 m-5">
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/5331304/1.jpg?5279"
          }
          price={234900}
          title={"Realme c75"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/1848104/1.jpg?1085"
          }
          price={105176}
          title={"letv 32 inches"}
        />
        <Product
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/87/0896873/1.jpg?9023"
          }
          price={240223}
          title={"Meling 160L"}
        >
          <p className='text-red-800'>Black Friday Deal</p>
        </Product>
      </div>
    </div>
  );
};

export default PropsChildren;
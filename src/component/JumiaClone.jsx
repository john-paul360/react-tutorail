import React from 'react';

const SingleProduct = ({image, price, title}) => {
    return <div>
        <img src={image} alt={title} />
        <p className='text-xl font-medium'>{title}</p>
        <p className='text-2xl font-bold'># {price}</p>
    </div>
};

const JumiaClone = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="flex gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/9035043/1.jpg?3500"
          }
          price={4420}
          title={"mini 4 digit combination"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/391977/1.jpg?9530"
          }
          price={250632}
          title={"hisense 5k washing machine"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/70/1403404/1.jpg?6206"
          }
          price={29800}
          title={"2 pieces decorative LED"}
        />
      </div>
    </div>
  );
}

export default JumiaClone;
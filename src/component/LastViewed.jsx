import React from 'react';
import MyStoreSingleProduct from "./MyStoreSingleProduct";

const LastViewed = () => {
     const LastViewProducts = [
       {
         id: 1,
         image:
           "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/38/6886101/1.jpg?5276",
         title: "HP EliteBook 840 G7 10Th",
         price: 540000,
       },
       {
         id: 2,
         image:
           "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/541137/1.jpg?3911",
         title: "GUEETON Wireless Mouse",
         price: 4365,
       },
       {
         id: 3,
         image:
           "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/8840591/1.jpg?6093",
         title: "GUEETON 128 GB",
         price: 5510,
       },
     ];
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="bg-amber-300 text-3xl font-bold p-3 rounded-t-2xl text-white">
        <h1>Last Views</h1>
      </div>
      <section className="flex gap-2 items-center mt-2.5">
        {LastViewProducts.map((product) => {
          return <MyStoreSingleProduct key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}

export default LastViewed;
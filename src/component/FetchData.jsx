import React from 'react';
import { useEffect, useState } from "react"; 


const url = "https://dummyjson.com/products";
const FetchData = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(url);
            const data =await res.json();
            console.log(data.products);
            setProducts(data.products);
        }
        getProducts();
    }, []);

  return (
    <div>
        <h1>List of Products</h1>
        <section className='flex items-center gap-2.5 flex-wrap '>
            {
            products.map((product) => {
                const {id, title, price, images, stock, warrantyInformatiom, rating} = product
                return (
                  <div
                    key={id}
                    className="w-full h-[370px] max-w-[320px] shadow-md "
                  >
                    <img
                      src={images[0]}
                      alt={title}
                      className="object-cover h-[80%]"
                    />
                    <p className="text-lg">{title}</p>
                    <div>
                      <p className="font-bold">${price}</p>
                      <p
                        className={
                          stock >= 30 ? "text-green-400" : "text-red-400"
                        }
                      >
                        {stock} left in stock
                      </p>
                    </div>
                    <p>{warrantyInformatiom}</p>
                    <p className={rating > 3.5 ? "text-green-400" : "text-red-400"}>{rating}</p>
                  </div>
                );
            })}
        </section>
    </div>
  );
};

export default FetchData;
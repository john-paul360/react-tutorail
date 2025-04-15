import React from 'react';
import { useEffect, useState } from "react"; 
import { BounceLoader } from 'react-spinners';
// product [] ---> product(api)
// loading(true) ==> loading (false)

const url = "https://dummyjson.com/products";

const FetchData = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(url);
            const data =await res.json();
            console.log(data.products);
            setIsLoading(false);
            setProducts(data.products);
        };
        getProducts();
    }, []);

    if (isLoading) {
      return (
      <div className='flex items-center justify-center h-60'>
        <BounceLoader color="#ff0000" />;
      </div>
      )
    }

  return (
    <div>
        <h1 className='text-center m-5'>List of Products</h1>
        <section className='flex items-center gap-2.5 flex-wrap '>
            {
            products.map((product) => {
                const {id, title, price, images, stock, warrantyInformatiom, rating} = product
                return (
                  <div
                    key={id}
                    className="w-full h-[370px] max-w-[300px] shadow-md"
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
import React from 'react';
import { useEffect, useState} from "react";
import { FadeLoader } from 'react-spinners';
import { useFetch } from "../Hooks/useFetch";
// disply firstname, lastname, image, gender,
// address(636, main street, phoenix missipi)

const url = "https://dummyjson.com/users";
const FetchUser = () => {
  const { isLoading, data:{users} } = useFetch(url);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <FadeLoader color="#ff0000" />;
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center font-bold text-2xl p-5 mb-10">
        List of Users
      </h1>
      <section className="flex items-center gap-2.5 flex-wrap">
        {users.map((user) => {
          const {
            id,
            firstName,
            lastName,
            image,
            gender,
            address: { address, city, state },
          } = user;
          return (
            <div key={id} className="w-full h-[370px] max-w-[300px] shadow-md">
              <img
                src={image}
                alt={`${firstName} ${lastName}`}
                className="object-cover h-[250px] w-full"
              />
              <p className="text-lg font-bold">{`${firstName} ${lastName}`}</p>
              <p>Gender: {gender}</p>
              <p>Address: {`${address}, ${city}, ${state}`}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default FetchUser;
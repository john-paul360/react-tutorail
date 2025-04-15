import { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';
import { useFetch } from "../Hooks/useFetch";

// have a loading state
// display the list of author (image, name, profession, description,
// add a link to visit their wikipedia)
const url = "https://example-data.draftbit.com/authors?_limit=10";

const GetAuthors = () => {
   const { isLoading, data: authors } = useFetch(url);

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-60">
          <GridLoader color="#ff0000" />;
        </div>
      );
    }

  return (
    <div>
      <h1>List of Authors</h1>
      <section className="flex flex-wrap gap-5">
        {authors.map((author) => {
          const { id, imgUrl, person, professions, articlUrl } = author;
          return (
            <div key={author.id} className="w-[320px]">
              <img
                src={author.imgUrl}
                alt="" className='w-full h-60'
              />
              <p>{author.person}</p>
                {/* <p>{author.professions}</p> */}
                <p>{author.description}</p>
                <a href={author.articlUrl} target="-blank">Read More</a>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default GetAuthors;
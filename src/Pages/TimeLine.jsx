import React from 'react'
import {tweets} from "../data";
import {Link} from "react-router-dom"

const TimeLine = () => {
  return (
    <div className='py-7'>
      <section className="flex gap-3 ">
        <div className="w-[300px] border border-secondary p-3">
            <h1 className='text-3xl font-bold'>trending Topics</h1>
            <ol className='list-decimal'>
                <li>Sports</li>
                <li>Technology</li>
                <li>Health Talks</li>
                <li>Football</li>
            </ol>
        </div>
        <div className="w-[600px] border border-secondary p-3">
            <h1 className='text-3xl font-bold'>Tmeline</h1>
            {/* list of tweets api */}
            <section className='flex flex-col gap-3'>
                {
                    tweets.map((singletweet) => {
                        const { id, profileName, handle, Comments, likes, tweet} = singletweet;
                        return ( <div key={id} className='border-y-2 border-gray-400 p-2'>
                            <div className='flex gap-2'>
                                <h1 className='text-gray-300'>{profileName}</h1>
                                <span className='text-gray-300'>@{handle}</span>
                            </div>
                            <p className='my-2'>{tweet}</p>
                            <div className='flex gap-3 items-center'>
                                <p>{likes} likes</p>
                                <p>{Comments.length} comments</p>
                            </div>
                            <Link to={`/timeline/${id}`}>Read More</Link>
                        </div>
                        )
                    })
    
                }
            </section>
        </div>
        <div className="w-[300px] border border-secondary p-3 ">
            <h1 className='text-xl font-bold'>Welcome John Doe</h1>
            <p>@johndoe001</p>
            <p>I am a Frontend Developer</p>
            <input type="text"
            placeholder='Search for User'
            className='input'/>
        </div>
      </section>
    </div>
  );
}

export default TimeLine
import React from 'react'
import { Link, useParams } from "react-router-dom";
import { tweets } from '../data';

const SingleTweet = () => {
  const { id } = useParams();
  const tweet = tweets.find((SingleTweet) => SingleTweet.id === id);
  return (
    <div className="container py-10">
      <Link to="/timeline" className="btn btn-primary">
        Back To Timeline
      </Link>
      <div className='mt-5'>
        <div className="flex items-center gap-3">
          <h1 className='font-bold text-2xl'>{tweet.profileName}</h1>
          <p>@{tweet.handle}</p>
        </div>
        <p>{tweet.tweets}</p>
        <div className="flex gap-3">
          <p>{tweet.likes}</p>
          <p>{tweet.Comments.length} comments</p>
        </div>
        <h1 className='font-bold'>Comments</h1>
        <div className="flex flex-col gap-5">
          {tweet.Comments.map((comment,i) => {
            return (
              <p key={i}>{comment}</p>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleTweet
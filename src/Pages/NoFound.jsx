import React from 'react'
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <div>
        <h1 className='text-4xl'>Error 404</h1>
        <p>Page Not Found</p>
        <Link to="/" className='btn btn-primary'>
        Back To Home</Link>
    </div>
  )
}

export default NoFound
import React from 'react'
import LastViewed from "../component/LastViewed";
import { useAppContext } from '../Hooks/useAppContext';

const About = () => {
  const { value1 } = useAppContext();
  return (
    <div>
      <h1>{value1}</h1>
        <LastViewed />
    </div>
  )
}

export default About
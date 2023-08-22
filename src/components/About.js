import React from 'react'
import Contact from './Contact';
const About = (props) => {
  console.log(props)
  // const Contact = require('./Contact').default; 
  // Import Contact dynamically
  const {data}=props;
  const info = { name: "pranjal pathak", gender:"male" } ;
  return (
    <div>
      <h1>page under construction</h1>
      <h4>{data.name}</h4>
      <h3>{data.gender}</h3>
      <Contact info={info}/>
    </div>
    
  )
}
export default About


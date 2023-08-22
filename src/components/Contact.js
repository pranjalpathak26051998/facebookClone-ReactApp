import React from 'react'
// import About from './About';
const Contact = (props) => {
  // const About = require('./About').default; 
  // Import About dynamically
  const {info}=props
  return (
    <div>
      <h1>My contact details will be published here</h1>
      <h1>{info.name}</h1>
      <h3>{info.gender}</h3>     
    </div>
  )
}
export default Contact

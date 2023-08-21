import React from 'react'
import About from './About';
const Contact = () => {
  return (
    <div>
      <h1>My contact details will be published here</h1>
      <h3>{<About data={{name:"pranjal pathak"}} />}</h3>
    </div>
  )
}

export default Contact

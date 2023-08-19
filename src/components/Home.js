import React from 'react';
import '../App.css';
const Home = () => {
  return (
    <div className='facebook-ui' >
        <div className='facebook-title'>
        {/* https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg */}
          <h2><img className='fb-name-logo' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' /></h2>
          <h3>Facebook helps you connect and share<br/> with the people in your life.</h3>
        </div>
        <div className='login-signup-form' >
          <form className='home-form' >
            <input type='text' placeholder='Email address or phone number'/><br/>
            <input type='password' placeholder='Password'/><br/>
            <button className='login' >Log in</button><br/>
            <a href='/' >Forgotten password?</a>
            <hr />
            <button className='createAccount' id='createAccount' >Create new account</button>
          </form>
          <h4><b>Create a Page</b> for a celebrity, brand or business.</h4>
        </div>      
    </div>
  )
}

export default Home

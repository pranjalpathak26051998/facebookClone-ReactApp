import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <div>
                <nav className='navbar' >
                    <ul>
                        <><Link to=''>Home</Link></>&nbsp;&nbsp;
                        <><Link to='/about'>About</Link></>&nbsp;&nbsp;
                        <><Link to='/contact'>Contact</Link></>  
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
         </>
    )
}

export default App

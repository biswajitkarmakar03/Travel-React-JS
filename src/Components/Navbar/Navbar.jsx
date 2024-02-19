import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {CgMenuMotion} from 'react-icons/cg'



const Navbar = () => {
    const [active, setActive] = useState('navBar')
    //Function to toggle navBar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

     //Function to remove navBar
     const removeNavbar = () =>{
        setActive('navBar')
    }
    


    return(
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo flex'>
                        <h1><MdOutlineTravelExplore className='icon'/> Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navList flex'>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>Home</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>Packages</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>Shop</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>About</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>Pages</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>News</a>
                        </li>

                        <li className='navItem'>
                            <a href='#' className='navLinks'>Contact</a>
                        </li>

                        <button className='btn'><a href='#'>BOOK NOW</a></button>
                    </ul>

                    <div onClick={removeNavbar} className='closeNavbar'>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavBar">
                    <CgMenuMotion className='icon'/>
                </div>
            </header>
        </section>
    )
}

export default Navbar 
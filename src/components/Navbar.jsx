import React,{useState} from 'react'
import logo from '../images/logo.png';

function Navbar(){
    const [nav,setnav] =useState(false);
    const changebackground =() =>{
        if(window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changebackground);
    return (
     <nav className={'nav' ? 'nav active':'nav'}>
       <a href='#' className='logo'>
           <img classname="boku-img" src={logo} alt=""/>
           <h2 className='boku'>BOKU</h2>
       </a>
       <input type='checkbox' className='menu-btn' id='menu-btn'/>
       <label className='menu-icon' for='menu-btn'>
           <span className='nav-icon'></span>
       </label>
       <ul className='menu'>
           <li><a href='#'>For Everyone</a></li>
           <li><a href='#'>Whitepaper</a></li>
           <li><a href='#'>Connect</a></li>
           <li><a href='#'>Sign Up for Early Access</a></li>
       </ul>
     </nav>
    )
}
export default Navbar;
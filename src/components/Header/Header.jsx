import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import logo from '../../Assets/img/logo.svg'
import './Header.scss'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <Link to='/' className='header__link' >
                <img src={logo} alt="" className='header__logo'  />
            </Link>
            <div className='header__input'>
                <input type="text" placeholder='Serach Jobs'  />
                <BiSearchAlt2 className='icons' />
            </div>
            <Navbar/>
            <span className="line"></span>
            
        </div>
    </header>
  )
}

export default Header
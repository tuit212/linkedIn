import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { HiBriefcase } from 'react-icons/hi'
import { BiMessageDetail } from 'react-icons/bi'
import { IoNotificationsSharp } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/' className='navlink'>
            <AiFillHome className='icon' />
        </NavLink>
        <NavLink to='/mynetwork' className='navlink'>
            <FaUserFriends className='icon' />
        </NavLink>
        <NavLink to='/jobs' className='navlink'>
            <HiBriefcase className='icon' />
        </NavLink>
        <NavLink to='/messaging' className='navlink'>
            <BiMessageDetail className='icon' />
        </NavLink>
        <NavLink to='/notifications' className='navlink'>
            <IoNotificationsSharp className='icon' />
        </NavLink>
    </nav>
  )
}

export default Navbar
import React from 'react'
import logo from '../assets/logo.svg'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt=''/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/haidilfauzan" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-neutral-500' />
            </a>
            <a href="https://www.instagram.com/haidilfauzan_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-neutral-500'/>
            </a>
            <a href="https://www.linkedin.com/in/haidil-fauzan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-neutral-500'/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar

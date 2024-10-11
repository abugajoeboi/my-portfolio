import React from 'react'
import logo1 from '../assets/image/logo.jpg';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
export default function NavBar() {
  return (
    <nav className='flex items-center justify-between '>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/">
            <img src={logo1} alt="logo image" />
            </a>
        </div>
        <div className='flex items-center justify-center gap-4 m-8 text-2xl'>
                <a href="" aria-label='Linkedin'>
                    <FaLinkedin/>
                </a>
                <a href="" aria-label='Github'>
                    <FaGithub/>
                </a>
                <a href="" aria-label='Instagram'>
                    <FaInstagram/>
                </a>
                <a href="" aria-label='Youtube'>
                    <FaYoutube/>
                </a>
        </div>
        
    </nav>
  )
}

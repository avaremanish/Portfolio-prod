import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
 
function Footer() {
  return (
    <footer>
      <a href="##" className='footer__logo'> MANISH KUMAR</a>
      
      <ul className='permalinks'>
        <li> <a href="#"> Home </a></li>
        <li> <a href="#about"> About </a></li>
        <li> <a href="#experience"> Experience</a></li>
        <li> <a href="#portfolio"> Porfolio </a></li>
        <li> <a href="#contact"> Contact </a></li>
      </ul>

        <div className='footer__socials'>
            <a href="https://www.facebook.com/manish.aware.5" target='_blank'> <FaFacebookF/></a>
            <a href="https://instagram.com/fashionwith.m.k?igshid=YmMyMTA2M2Y=" target='_blank'> <FiInstagram/></a>
            <a href="https://twitter.com/AManishkumar12?t=TzYBaFQEPmuNaMUeO5MEew&s=08" target="_blank"> <IoLogoTwitter/></a>
        
             </div>
              <div className='footer__copyright'>
                <small> &copy; MANISH KUMAR. All rights reserved </small>







              </div>
    </footer>
  )
}

export default Footer
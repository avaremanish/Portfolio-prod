import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RiTwitterXFill} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/avare-manishkumar-36930a15a" target="_blank"> <BsLinkedin/>   </a>
        <a href="https://github.com/avaremanish" target="_blank"> <FaGithub/>  </a>
        <a href="https://leetcode.com/manishavare/" target="_blank">  <SiLeetcode/>  </a>
        <a href="https://twitter.com/AvareKumar" target="_blank">  <RiTwitterXFill/>  </a>
        <a href="https://instagram.com/fashionwith.m.k?igshid=YmMyMTA2M2Y=" target="_blank">  <BsInstagram/>  </a>


    </div>
  )
}

export default Headersocial
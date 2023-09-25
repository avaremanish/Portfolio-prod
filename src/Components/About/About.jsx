import React from 'react'
import './About.css'
import ME from '../../Assests/about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
    <h5>  Get To Know</h5>
    <h2> About me</h2>

    <div className="container about__container" > 
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" /> 
                 </div> 
             </div> 
        
             <div className="about__content">
               <div className="about__cards"> 

               <article   className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5> Experience</h5>
                 <small> 2 years</small>
               </article>

               <article   className='about__card '>
                 <FiUsers className='about__icon'/>
                 <h5> Clients </h5>
                 <small> 4+ </small>
               </article>

               <article   className='about__card '>
                 <VscFolderLibrary className='about__icon'/>
                 <h5> Projects </h5>
                 <small> 9 +</small>
               </article>
                  </div>
 
                      <ul  className='About-Information'>
                        <li>Hello!</li>
                        <li>My name is Manish, I am 24 years old.</li>
                        I am BE graduate in Electronics & Telecommunication Engineering from Pune University (SPPU)
                        <li>I like Problem Solving</li>
                             <li> I like working with new Tools and Technologies.</li>
                              <li>If you want to know more about me, you are in the right place</li>
                            </ul> 
                            
                            
                            
               <a href='#contact' className='btn btn-primary'>  Let's Talk </a>
               
                </div>
  
      </div>


    </section>

  )
}

export default About
import React from 'react'
import './Experience.css'
import {RiReactjsLine} from 'react-icons/ri'
import {SiHtml5} from 'react-icons/si'
import {ImCss3} from 'react-icons/im'
import {SiTailwindcss} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {FaAws} from 'react-icons/fa'

function Experience() {
  return (
    <section id='experience'>
      <h5> What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className='container experience__container'>  
      <div className='experience__frontend'>
        <h3> Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>    
          <SiHtml5  className="experience__details-icon"/>
         <div>  
            <h4> HTML</h4>
            <small className='text-light'> Intermediate </small>
         </div>

          </article>

          <article className='experience__details'>    
          <ImCss3 className="experience__details-icon"/>
          <div> 
              <h4> CSS</h4>
              <small className='text-light'> Intermediate </small>
          </div>
          </article>
          <article className='experience__details'>    
          <SiTailwindcss className="experience__details-icon"/>
          <div> 
              <h4>Tailwind CSS</h4>
              <small className='text-light'> Intermediate </small>
          </div>
          </article>

          <article className='experience__details'>    
          <IoLogoJavascript className="experience__details-icon"/>

          <div> 
                    <h4> JavaScript </h4>
                  <small className='text-light'> Intermediate </small>
           </div>
          
           </article>
          <article className='experience__details'>    
          <SiTypescript className="experience__details-icon"/>

          <div> 
                    <h4> TypeScript </h4>
                  <small className='text-light'> Intermediate </small>
           </div>
          
           </article>

          <article className='experience__details'>    
          <FaBootstrap className="experience__details-icon"/>

          <div>
          <h4> Bootstrap </h4>
          <small className='text-light'> Intermediate </small>
          
         </div>
         
          </article>

          <article className='experience__details'>    
          <RiReactjsLine className="experience__details-icon"/>
          <div> 
          <h4> React</h4>
          <small className='text-light'> Intermediate </small>
            </div>
         
          </article>
          <article className='experience__details'>    
          <RiReactjsLine className="experience__details-icon"/>
          <div> 
          <h4> React Native</h4>
          <small className='text-light'> Intermediate </small>
            </div>
         
          </article>
            </div>
      
      
      </div>




      <div className='experience__backend'>
      <h3> Backend Development</h3>
      <div className='experience__content'>
          <article className='experience__details'>    
          <GrNode className="experience__details-icon"/>
          <div>
              <h4> Node JS</h4>
              <small className='text-light'> Intermediate </small>
           </div>
          

          </article>

          <article className='experience__details'>    
          <SiMongodb className="experience__details-icon"/>
          <div>  
          <h4> MongoDB</h4>
          <small className='text-light'> Intermediate </small>            
             </div>
     
          </article>

          <article className='experience__details'>    
          <GrMysql className="experience__details-icon"/>
          <div>     
                    <h4> My SQL </h4>
                  <small className='text-light'> Basic </small>
          </div>
          
           </article>

          <article className='experience__details'>    
          <FaAws className="experience__details-icon"/>
          <div> 
          <h4> AWS </h4>
          <small className='text-light'> Basic </small>
          </div>
        
          </article>

          </div>
          
          
            </div>
      
      
      
       </div>



    </section>
  )
}

export default Experience
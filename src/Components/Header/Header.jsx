import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../Assests/Pass.png'
import Headersocial from './Headersocial'

export const Header = () => {
  return (
    <header>   
      <div className='main'> </div>
    <div className='container header_container'>
            <h2> Hello I'm</h2>
            <div class="wrapper">
	<svg className='svg-name'>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			A Manish Kumar
		</text>
	</svg>
</div>
            {/* <h1>Manish kumar</h1> */}
            <h2 className='text-light'> Full Stack Developer</h2>
            <CTA/>
            <Headersocial/>

        <div className='me'>
            <img src={ME} alt="me" />
          
        </div>
        
        <a href='#contact' className='scroll__down'> Scroll Down </a>

      
    </div>
    </header>
    
   

    
  )
}

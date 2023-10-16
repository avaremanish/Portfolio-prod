import React from "react";
import "./Portfolio.css";
import PJ1 from "../../Assests/Project1.png";
import PJ2 from "../../Assests/Project2.png";
import PJ3 from "../../Assests/Project3.png";
import IMG1 from "../../Assests/Sushi.png";
import IMG2 from "../../Assests/portfolio1.png";
import IMG3 from "../../Assests/Weatherapp.png";
import IMG4 from "../../Assests/portfolio3.png";
import IMG5 from "../../Assests/Bubble.png";
import IMG6 from "../../Assests/portfolio5.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item"> 
          <div className="portfolio__item-image">
            <img src={PJ1} alt="" />
          </div>

          <h3>
          JOY MATRINOMY 
           
          </h3>
          <h4> A Full Stack Matrimonial Web App with MERN for optimal performance and scalability. Designed a user-friendly interface using HTML and CSS, React enhancing the user experience.Orchestrated a secure matchmaking platform, leveraging MongoDB and AWS for data management and performance optimization.</h4>
          <div className="portfolio___item-cta">
            {/* <a href="https://github.com/avaremanish/Burgerwebapp" className='btn' target='_blank'> Github </a> */}
            <a
              href="https://dev.dscmba1flu6w3.amplifyapp.com/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PJ2} alt="" />
          </div>

          <h3>
        FLIP MONKEY - NFT Trading Web App
           
          </h3>
          <h4>Spearheaded the front-end development of a cutting-edge NFT Trading Platform, leveraging React.js to craft a
modular, component-based architecture that ensured code reusability and scalability. Orchestrated the design and implementation of an aesthetically pleasing and responsive user interface delivering a
seamless and visually engaging experience for NFT collectors, artists, and investors across diverse devices. Played a pivotal role in creating a user-friendly web application, enabling users to effortlessly buy, sell, and trade
non-fungible tokens (NFTs) within the booming NFT market, contributing to the platform’s success and user
satisfaction. </h4>
          <div className="portfolio___item-cta">
            {/* <a href="https://github.com/avaremanish/Burgerwebapp" className='btn' target='_blank'> Github </a> */}
            <a
              href="https://www.flipmonkey.io/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PJ3} alt="" />
          </div>

          <h3>
              KAUFETRONICS - E commerce Web App
           
          </h3>
          <h4>Developed and optimized the frontend of an Electronics Components E-commerce Web App using React.js,
enhancing user experience and responsiveness. Led the creation of reusable, modular components in React.js, improving code maintainability and streamlining
development. Accomplished a visually appealing and responsive user interface with HTML and CSS, ensuring optimal
cross-device performance.</h4>
          <div className="portfolio___item-cta">
            {/* <a href="https://github.com/avaremanish/Burgerwebapp" className='btn' target='_blank'> Github </a> */}
            <a
              href="https://www.kaufetronics-sro.cz/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>

          <h3>
           BURGEER
           
          </h3>
          <h4> I've developed a dynamic web application for a burger restaurant using React.js, Javascript, HTML, and CSS. This sleek and user-friendly website showcases an enticing menu, complete with mouthwatering burger options. Customers can easily browse through offerings, place orders, and even customize their burgers. With a responsive design, it seamlessly adapts to various devices, ensuring a smooth experience for users on both desktop and mobile. Incorporating modern web technologies, it delivers a visually appealing and interactive platform that enhances the restaurant's online presence and customer engagement. Whether you're a burger aficionado or just looking for a delicious meal, our website makes ordering a breeze.
.</h4>
          <div className="portfolio___item-cta">
            <a href="https://github.com/avaremanish/Burgerwebapp" className='btn' target='_blank'> Github </a>
            <a
              href="https://bubgreer.netlify.app/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

          <h3> SUSHISAKURA </h3>
          <h4>
       Experience the art of sushi at SUSHISAKURA! A website, built using HTML, CSS, React.js, and Vue.js, beautifully merges technology and gastronomy. It offers an immersive journey through the world of Japanese cuisine.

Combining React.js and Vue.js, we've crafted an engaging, minimalist design. Explore our menu, discover the freshest ingredients, and make reservations effortlessly. High-quality visuals and elegant animations capture the essence of sushi.

This platform seamlessly blends tradition with modernity, mirroring our restaurant's ambiance and culinary expertise. Join us on this digital culinary adventure at SUSHISAKURA. Visit our portfolio to witness how we've reimagined the sushi dining experience with technology.

          </h4>
          <div className="portfolio___item-cta">
            <a href="https://github.com/avaremanish/Restaurantapp" className='btn' target='_blank'> Github </a>
            <a
              href="*"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>

          <h3> Online Shopping Store</h3>
          <h4>
            Connect to shoppers anytime, anywhere with our B2C e-commerce
            solution. Salesforce B2C Commerce can help you create unified,
            intelligent digital commerce experiences — both online and in the
            store. Convert more shoppers by leveraging social extensions,
            optimizing for mobile, empowering a world-class customer service
            team, and adding a personal touch with product recommendations.
          </h4>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/avaremanish/onlineshop"
              className="btn"
              target="_blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://thelabelsparsh.netlify.app/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>

          <h3> Inventory App</h3>
          <h4>
            {" "}
            An app where you can list your products and details. Increase
            Conversion With nShift Checkouts. Streamline Returns With nShift.
            Add consumer accounts. Add Products. Browse Resources. Chat Option
            Available.
          </h4>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/avaremanish/Inventory-billing"
              className="btn"
              target="_blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://unique-cupcake-ea04e5.netlify.app/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>

          <h3> BUBBLE POP MANIA </h3>
          <h4>
          Excited to unveil my latest project: a dynamic bubble game that challenges reflexes and cognitive agility. Using the power of HTML, CSS, and JavaScript, I've created an engaging and interactive experience to put your skills to the test.

In this game, you'll need to pop the bubbles as quickly as possible, requiring split-second decision-making and precision. It's not just a game; it's a showcase of my front-end web development prowess.

I thoroughly enjoyed developing this project, and it represents my commitment to continuous learning and innovation in the world of web development. Give it a try, challenge your friends, and let's have some fun while pushing our limits! 
          </h4>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/avaremanish/BubbleGame"
              className="btn"
              target="_blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://bubblepopmania.netlify.app/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>

          <h3>LIVE WEATHER APP</h3>
          <h4>
          Explore the world's weather with our dynamic Live Weather App. Crafted with HTML, Tailwind CSS, React.js, and real-time weather data from an API, this app keeps you informed and connected to global meteorological conditions.

With a user-friendly interface and responsive design, you can effortlessly check current weather, forecasts, and detailed meteorological data for any location. Tailwind CSS ensures a sleek and visually appealing experience.

Experience the power of technology in keeping you prepared for any weather event. Our Live Weather App is your go-to source for up-to-the-minute weather information, all beautifully presented.
          </h4>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/avaremanish/WeatherApp"
              className="btn"
              target="_blank">
              {" "}
              Github{" "}
            </a>
            <a
              href="https://weatherappbymanish.netlify.app/"
              className="btn btn-primary"
              target="_blank">
              {" "}
              Live Demo{" "}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;

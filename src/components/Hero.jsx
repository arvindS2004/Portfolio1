import React from "react";
import "./Hero.css";
import gojo from '../assets/do.png'
import re from '../assets/ar.pdf'
 
const Hero = () => { 
  return (
    <section className="hero" id="hero">
      <div className="container"> 
        <div className="hero-content">
        <div className="hero-image">
        <div className="s1">Web developer</div>
        <div className="s3">Video Editor</div> 
         
          <img src={gojo} alt="Hero" />
          <div className="s2">UI/UX Designer</div>
          <div className="s4">Photography</div>
        </div>
        <div className="detala">
          <h1>नमस्ते! I'm Arvind</h1>
          <p>
            A Full Stack Web Developer, UI/UX designer and AI enthusiast. I really like to design interactive webpages and build APIs.
            </p>
          <div className="hero-buttons">
           <a target="blank" href={re}><button className="btn">Download Resume</button></a>
           <a href="#projects">
<button class="button">  
  <svg class="w-6 h-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" stroke-linejoin="round" stroke-linecap="round"></path>
  </svg>  
  <div class="text">
     Latest Work
  </div>

</button>
</a>
          </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Hero;

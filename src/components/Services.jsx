import React from 'react';
import './Services.css';
import react from '../assets/react.png'
import python from '../assets/python.png'
import mongo from '../assets/mongo.png'
import next from '../assets/nextjs.png'
import java from '../assets/java.png'
import tail from '../assets/tail.png'
import soft from '../assets/soft.png'
import c from '../assets/c.png'
import sql from '../assets/sql.png'

const Services = () => {
  return ( 
    <>
    
    <div id="services" className="services-section">
      <h2 style={{margin:'10vh 0'}}> Skills</h2>
      <div className="services-container">
        <div className="service-card"> 
          <div className="service-icon">
            <i className="icon-react"> <img src={react} alt="" /> </i> 
          </div> 
          <h2 className="service-card">React</h2>                  
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="icon-python"><img src={python} alt="" /></i> 
          </div>
          <h2>Python</h2> 
          
           </div>
        <div className="service-card">
          <div className="service-icon">
           <center> <div className="icon-mongo"><img src={mongo} alt="" /></div> </center>
          </div> 
          <h2>Mongo DB</h2>         
          </div>
          <div className="service-card">
          <div className="service-icon">
            <i className="icon-java"> <img src={java} alt="" /> </i>
          </div>
          <h2>Java</h2>
          
        </div>

        <div className="service-card" style={{marginBottom:'10px'}}>
          <div className="service-icon">
            <i className="icon-tailw"> <img style={{marginBottom:'-5px'}} src={sql} alt="" /> </i> 
          </div>
          <h2>SQL</h2>         
        </div>
        
      </div>
     
      <div className="services-container">
      <div className="service-card">
          <div className="service-icon">
           <center> <div className="icon-next"> <img src={next} alt="" /> </div> </center>
          </div> 
          <h2>Next JS</h2>
          
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="icon-tailw"> <img src={tail} alt="" /> </i> 
          </div>
          <h2>Tailwind</h2>         
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="icon-java"> <img style={{width:'12vh',marginBottom:'5px'}} src={c} alt="" /> </i>
          </div>
          <h2>C</h2>
          
        </div>

        <div className="service-card">
          <div style={{marginBottom: '-2px'}} className="service-icon">
           <center> <div className="icon-soft"><img src={soft} alt="" /></div> </center>
          </div>
          <h2>Postgre</h2>         
          </div>       
        
      </div>
     
    </div>
    </>
  );
};

export default Services;

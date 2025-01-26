import React from "react";
import "./Achin.css";
import book from '../assets/book.png'
import pop from '../assets/pop.png'
import web from '../assets/web.png'
import ae from '../assets/ae.png'
import cam from '../assets/cam.png'
import award from '../assets/award.png'
import nip from '../assets/nip.pdf'

const Achin = () => { 
  return (
    <div className="achin">
    <div id="inta" className="heads">
    <h3> <center style={{backgroundColor:'#ff006f'}}>A</center> <br /> <div className="wenach">Achievements</div> </h3>
    <h3> <center style={{backgroundColor:'#ff006f'}}>I</center> <br /> <div className="webin">Interests</div></h3>
    </div>
    <div className="body"> 
    

    {/* Achievements */}
<h1 className="mobach">Achievements</h1>
    <div className="ach-container">
      <div className="circle"> 
        <img src={award} alt="" />
      </div>
      
      <div className="achievement-buttons">
        <button className="btno">NIP Paper Presentation Competition  Winner<br /> <a target="blank" href={nip}> <button className="down">Download Certificate</button></a> </button>
        <button className="btno">Runner up at Hackanova 2.O</button>
        <button className="btnc">Coming soon...</button>
      </div>
    </div> 

    <br />  

    {/* Interests */}
    <h1 className="mobin">Interests</h1>
<div className="interests">
    <div className="interests-container">
      
      <div className="interest-item central">
        <span className="circle-text">Interests</span>
      </div>
      <div className="interest-item bottom-left">
        <span className="circle-text"><img src={book} alt="" /></span>
        <p className="label-text">Books</p>
      </div>
      <div className="interest-item top-left">
        <span className="circle-text"> <img src={pop} alt="" /> </span>
        <p className="label-text">Movies</p>
      </div>
      <div className="interest-item top-right">
        <span className="circle-text"> <img src={web} alt="" /></span>
        <p className="label-text">Web Dev</p>
      </div>
      <div className="interest-item center-left">
        <span className="circle-text"> <img src={ae} alt="" /></span>
        <p className="label-text">Editing</p>
      </div>
      <div className="interest-item bottom-right">
        <span className="circle-text"><img src={cam} alt="" /></span>
        <p className="label-text">Photography</p>
      </div> 
      
    </div>
    </div>
    </div>
    </div>
  );
};

export default Achin;
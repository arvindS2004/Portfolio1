import React from 'react';
import './About.css';
import dp from '../assets/dp.png'
import loc from '../assets/loc.png'
 
const About = () => {
    return (
        <>
        <div style={{padding:'50px'}} id="about"></div>
        <div style={{paddingBottom:'15vh'}} className="about-container">
            
            <div className="about-content"> 
               <center><h1>About Me</h1></center>
                <p className='p1'>
                    I am a Full Stack Web developer, UI/UX designer and Video Editor. Currently pursuing my  Bachelor of Engineering degree at Thakur College of Engineering and Technology.
                </p>
                <p>
                  I have interest in Web programming.
                    I use MERN for my major projects. I have keen interest in competitive programming.
                    For problem solving I use Python and C++.  I like to watch movies, video editing and photography sometimes. 
                </p> 
                <div className="about-buttons">
                   
                    <button className="btn-hire"> <img className='loca' src={loc} alt="" /></button> <h4>Academics:</h4>                    
                </div>
                <div className="address">
                <div className="btn-get-tour"> School: A.V.M High School, Malad, Mumbai</div>
                <div className="btn-get-tour"><u> Junior College</u>: Thakur College of Science and Commerce, Kandivali, Mumbai</div>                
                <div className="btn-get-tour"><u> Degree College</u>: Thakur College of Engineering and Technology, Kandivali, Mumbai</div>                
            </div>
            </div> 
            {/* <div className="about-image">
                <img src={dp}/>                
            </div> */}
        </div>

        </>
    );
};

export default About;

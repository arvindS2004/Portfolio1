import React from "react";
import "./Projects.css";
import view from "../assets/view.mp4";
import food from "../assets/foodie.mp4";
import inven from "../assets/inven.mp4";
import sth from "../assets/sth.mp4";
import stik from "../assets/stik.mp4";

const Projects = () => {
  return (
    <div id="projects" className="pro-section">
      <h3 className="proh">Projects I've made so far ...</h3>
      <div className="pro-container"> 
        <div className="pro-card">
          <div className="pro-vid">
            <i className="vid-react"> 
              {" "}
              <video autoPlay muted loop width="100%">
                <source src={view} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            </i>
          </div>
          <h2>Veiw Call</h2> 
          <p>
            Veiw Call is a video conferencing website. Built in HTML, CSS and
            JS. Used Socket for successfull video calling connection.
          </p>
          <a target="blank" href="https://github.com/arvindS2004/Video-Conferencing-Website">
          
<button class="read-btn" data-text="Awesome">
    <span class="actual-text">&nbsp;Github&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Github&nbsp;</span>
</button>
          </a>
        </div>
        <div className="pro-card">
          <div className="pro-vid">
            <i className="vid-python">
              {" "}
              <video autoPlay muted loop width="100%">
                <source src={food} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>{" "}
            </i>
          </div>
          <h2>Foodie</h2>
          <p>
            Foodie! A website for food suggesstion and Ordering food. Built
            using pure MERN. Check the Github repo, you'll find the app link
            there.
          </p>
          <a target="blank" href="https://github.com/arvindS2004/Food-app">
            {" "}
            <button class="read-btn" data-text="Awesome">
    <span class="actual-text">&nbsp;Github&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Github&nbsp;</span>
</button>
          </a>
        </div>

        <div className="pro-card">
          <div className="pro-vid">
            <center>
              {" "}
              <div className="vid-mongo">
                {" "}
                <video autoPlay muted loop width="100%">
                  <source src={inven} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>{" "}
              </div>{" "}
            </center>
          </div>
          <h2>Inventool</h2>
          <p>
            An Inventory Management Tool that aims to secure your data files and
            allows to update, make changes and delete whenever needed. Built
            using HTML, CSS, JS and mySQL.
          </p>
          <a
            target="blank"
            href="https://github.com/arvindS2004/Content-Management-Tool"
          >
            {" "}
            <button class="read-btn" data-text="Awesome">
    <span class="actual-text">&nbsp;Github&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Github&nbsp;</span>
</button>
          </a>
        </div>
      </div>
      <br />
      <div className="pro-container">
        <div className="pro-card">
          <div className="pro-vid">
            <i style={{borderColor:'white'}} className="vid-java">
              {" "}
              <video autoPlay muted loop width="100%">
                <source src={stik} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>{" "}
            </i>
          </div>
          <h2>Sticker Welder</h2>
          <p>
          A Sticker Maker Tool built with Next.js! This app is all about letting users design custom stickers with ease and flexibility.
          </p>
          <a
            target="blank"
            href="https://github.com/arvindS2004/Stranger-Things-Intro"
          >
            {" "}
            <button class="read-btn" data-text="Awesome">
    <span class="actual-text">&nbsp;Github&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Github&nbsp;</span>
</button>
          </a>
        </div>
        <div className="pro-card">
          <div className="pro-vid">
            <i className="vid-java">
              {" "}
              <video autoPlay muted loop width="100%">
                <source src={sth} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>{" "}
            </i>
          </div>
          <h2>Fun project!</h2>
          <p>
            The Stranger Things Intro. Built a fun project at the boring summer
            vacations.
          </p>
          <a
            target="blank"
            href="https://github.com/arvindS2004/Stranger-Things-Intro"
          >
            {" "}
            <button class="read-btn" data-text="Awesome">
    <span class="actual-text">&nbsp;Github&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Github&nbsp;</span>
</button>
          </a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="pro-card"
        >
          <center>
            {" "}
            <h3>More incoming...</h3>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Projects;

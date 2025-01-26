import React, { useState, useEffect } from "react";
import Hero from "./components/Hero"; 
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import './App.css';
import Achin from "./components/Achin"; 
import Contact from "./components/Contact";
import ToggleButton from "./components/ToggleButton";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  

  return (
    <div className={`app ${theme}`} style={{fontFamily: 'monospace'}}>
      <Navbar /> 
      <ToggleButton toggleTheme={toggleTheme} theme={theme} />
        <Hero />       
        <About />      
        <Services />
        <Projects />
        <Achin />
        <Contact />
     
    </div>
  );
}

export default App;

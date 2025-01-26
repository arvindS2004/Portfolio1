import React, { useEffect, useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ toggleTheme, theme }) => {

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(()=>{
    const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - 25, 
        y: e.clientY - 25  
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };
}, [isDragging]);

const handleMouseDown = () => {
  setIsDragging(true);
};
  
  return (
    <div onMouseDown={handleMouseDown} style={{position:'sticky',
      left: `${position.x}px`,
      top: `${position.y}px`,}} className="toggle-container">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="toggle-label">
        <span className="sun">🌙</span>
        <span className="moon">☀️</span> 
      </label>
    </div> 
  );
};

export default ToggleButton;
import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css'; 
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className={ `sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <button className='toggle-button' onClick={toggleSidebar}>
            <div className = {`arrow ${isOpen ? "left" : "right"}`}>

            </div>
        </button>
        <div className="logo">
            <h3>{isOpen ? "iBuildz":""}</h3>
        </div>
      </div>
        <nav className="nav-menu">
            <ul>
            {/* <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li> */}
            { SidebarData.map((item, index) => (
                <li key={index}>
                    <a href = {item.path}>
                        {item.icon}
                        {isOpen ? item.title : ""}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar

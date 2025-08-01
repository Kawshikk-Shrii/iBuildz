import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Authform from './Components/Authform';
import Homepage from './Components/Homepage'; 
import Sidebar from './Components/Sidebar';
import Projects from './Components/Projects';
import Tasks from './Components/Tasks';
import Settings from './Components/Settings';
import Profile from './Components/Profile';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { ProjectProvider } from './Components/ProjectContext';
import './index.css';
import './App.css'; 

function AppContent(){
  const location = useLocation();
  const hideSidebar = location.pathname === '/';
  const [sidebarOpen, setSidebarOpen] = useState(!hideSidebar);
  React.useEffect(() => {
    if(hideSidebar) setSidebarOpen(false);
    else setSidebarOpen(true);
  }, [hideSidebar]);
  return (
      <div className={hideSidebar ? 'app-content no-sidebar' : 'app-content'}>
        {!hideSidebar && (
          <>
            <Sidebar /> && <Navbar />)
          </>
        )}
        <Routes>
          <Route path="/" element={<Authform />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}
function App() {
  return (
    <ProjectProvider>
      <Router>
        <AppContent />
      </Router>
    </ProjectProvider>
  );
}

export default App;

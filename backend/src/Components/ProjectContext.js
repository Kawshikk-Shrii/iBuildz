import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

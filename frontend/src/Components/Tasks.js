import React, { useContext } from 'react';
import { ProjectContext } from '../Components/ProjectContext';
import './Tasks.css';

const Tasks = () => {
  const { projects, setProjects } = useContext(ProjectContext);

  const clearAllTasks = () => {
    localStorage.removeItem('projects');
    setProjects([]);
  };

  return (
    <div className="tasks-section">
      <h2>📋 Assigned Tasks</h2>
      {projects.length === 0 ? (
        <p>No tasks assigned yet.</p>
      ) : (
        <ul>
          {projects.map((proj, index) => (
            <li key={index} className="task-card">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <p><strong>Location:</strong> {proj.location}</p>
              <p><strong>Budget:</strong> ₹{proj.budget}</p>
              <p><strong>Professional:</strong> {proj.professional}</p>
              <p><strong>Deadline:</strong> {proj.deadline}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearAllTasks}>🗑️ Clear All Tasks</button>
      <p style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>
        Note: Clearing tasks will remove all assigned projects.</p>
    </div>
  );
};

export default Tasks;

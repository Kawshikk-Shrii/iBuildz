import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectContext } from '../Components/ProjectContext';
import './Projects.css';

const AssignProject = () => {
  const { addProject } = useContext(ProjectContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    budget: '',
    professional: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(form); // Add project to context
    navigate('/tasks'); // Redirect to tasks section
  };

  return (
    <div className="assign-project-container">
      <h2>📝 Assign New Project</h2>
      <form onSubmit={handleSubmit} className="assign-form">
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <input name="budget" type="number" placeholder="Budget (₹)" onChange={handleChange} />
        <input name="professional" placeholder="Preferred Professional" onChange={handleChange} />
        <input name="deadline" type="date" placeholder="Deadline" onChange={handleChange} />
        <button type="submit">Assign Project</button>
      </form>
    </div>
  );
};

export default AssignProject;

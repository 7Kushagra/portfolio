import React, { useState } from 'react';
import './projects.css';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import studentManagementImg from '../../assets/student-management.png';


import portfolioWebsiteImg from '../../assets/portfolio1.png';
// import musicAppImg from '../../assets/music-app.png';

const projectList = [
  {
    title: 'Portfolio Website',
    image: portfolioWebsiteImg,
    description:
      'A personal portfolio website built using React.js to showcase my projects, skills, education, and professional experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveLink: 'https://kushagra-pareek-portfolio-q49s.vercel.app/',
    codeLink: 'https://github.com/7Kushagra/portfolio.git',
  },
  {
    title: 'Student Management System',
    image: studentManagementImg,
    description:
      'A full-stack web application developed to manage student records efficiently. The system supports adding, updating, deleting, and viewing student data with secure database integration and a clean user interface.',
    tech: ['Python', 'MySQL', 'HTML', 'CSS'],
    liveLink: '',
    codeLink: 'https://github.com/7Kushagra/Student-management-system',
  },
];


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">A selection of web development projects I’ve built with various technologies.</p>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index} onClick={() => setActiveProject(project)}>
            <img src={project.image} alt={`${project.title} Screenshot`} className="project-img" />
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setActiveProject(null)}><FaTimes /></button>
            <img src={activeProject.image} alt="Project Full" className="modal-img" />
            <h2>{activeProject.title}</h2>
            <p>{activeProject.description}</p>
              <div className="project-tech">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

            <div className="modal-links">
  {activeProject.liveLink && (
    <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer">
      <FaExternalLinkAlt /> Live
    </a>
  )}
  {activeProject.codeLink && (
    <a href={activeProject.codeLink} target="_blank" rel="noopener noreferrer">
      <FaGithub /> GitHub
    </a>
  )}
</div>

          </div>
        </div>
      )}
    </section>
  );
};



export default Projects;
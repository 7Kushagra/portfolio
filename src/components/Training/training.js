import React from 'react';
import './training.css';
import salesforceLogo from '../../assets/salesforce.png';
import celebalLogo from '../../assets/celebal.jpeg';

const trainingData = [
  {
    title: 'Celebal Summer Internship',
    organization: 'Celebal Technologies',
    date: '19 June 2024 to 3 August 2024',
    description: 'As a Data Science Intern at Celebal Technologies, I worked alongside experienced data scientists and engineers to build data-driven solutions using modern tools and technologies. The internship offered exposure to real-world business problems and allowed me to apply statistical analysis, machine learning, and data visualization techniques.',
    logo: celebalLogo
  },
  {
    title: 'Fundamentals of Salesforce & Internship',
    organization: 'TechForce Academy',
    date: '5 July 2024 to 2 September 2024',
    description: 'This training on Salesforce fundamentals, where I gained hands-on experience with basic user management , Created reports and dashboard in Salesforce to monitor key metrics and decision making efficiency.',
    logo: salesforceLogo
  },
  
];

const Training = () => {
  return (
    <section id="training">
      <h2 className="training-title">Training</h2>
      <p className='training-subtitle'>My journey through industry-led training programs and internship experiences.</p>
      <div className="timeline">
        {trainingData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <img src={item.logo} alt={item.organization} className="training-logo" />
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <span className="training-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
            {index !== trainingData.length - 1 && <div className="timeline-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;
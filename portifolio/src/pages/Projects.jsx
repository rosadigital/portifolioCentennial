import React from 'react';
import NavBar from '../components/NavBar';
import img_MCSTools from '../assets/img_MCSTools.png';
import img_intranet from '../assets/img_intranet.png';
import img_nossoTools from '../assets/img_nossoTools.png';
import img_fsAI from '../assets/img_fsAI.png';
import '../styles/Projects.css';

const projects = [
  {
    title: "MCS Tools – Digital Transformation Platform",
    description: "Developed the initial version of an internal Digital Transformation Platform, MCS Tools, using Django for backend and ReactJS for frontend. The platform centralizes routine automation (RPAs) and API access, serving internal teams with a focus on tax and accounting automations.",
    role: "Full-stack Developer & Product Lead",
    outcome: "Successfully led a team that developed over 130 applications, generating an average annual revenue of CAD 350K.",
    image: img_MCSTools,
    alt: "Screenshot of MCS Tools platform",
  },
  {
    title: "Nossa Intranet – Consulting Management Platform",
    description: "Designed and led the development of Nossa Intranet, a platform for consulting project management. Built with Flask API for backend, ReactJS for frontend, and hosted on AWS, it manages timesheets, project registrations, billing requests, and project margin reports.",
    role: "Lead Developer & Architect",
    outcome: "Currently serves 350 daily users, optimizing project and financial management within the company.",
    image: img_intranet,
    alt: "Screenshot of Nossa Intranet platform",
  },
  {
    title: "Nosso Tools – Tax Automation Platform (SaaS)",
    description: "Created Nosso Tools, the first SaaS product for MCS Markup, built with Flask API and AWS hosting. This platform automates the conversion of tax files from CSV, PDF, or XML to Excel, providing a scalable solution for tax professionals.",
    role: "Product Manager & Lead Developer",
    outcome: "Achieved 1,000 registrations in the first 4 months, with a monthly usability growth rate of 5%.",
    image: img_nossoTools,
    alt: "Screenshot of Nosso Tools platform",
  },
  {
    title: "AI-powered Legal Document Query System",
    description: "Led the creation of an AI-based solution using LLaMA and BERT for semantic search of legal documents. The system scrapes data from government websites, processes it, and applies machine learning for query resolution and data vectorization.",
    role: "AI Developer & Architect",
    outcome: "Improved accuracy in querying legal texts by 95%, delivering precise results for legal professionals.",
    image: img_fsAI,
    alt: "Screenshot of AI-powered Legal Document Query System",
  },
];

const ProjectCard = ({ project, index }) => {
  const directionClass = index % 2 === 0 ? 'row' : 'row-reverse';
  return (
    <div className={`project-card-projects ${directionClass}`}>
      <div className="project-image-container-projects">
        <img src={project.image} alt={project.alt} className="project-image-projects" />
      </div>
      <div className="project-details-projects">
        <h3 className="project-title-projects">{project.title}</h3>
        <p className="project-description-projects">{project.description}</p>
        <p className="project-role-projects"><strong>Role:</strong> {project.role}</p>
        <p className="project-outcome-projects"><strong>Outcome:</strong> {project.outcome}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <NavBar />
      <section className="projects-container-projects">
        <h2 className="projects-title-projects">Featured Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </section>
    </>
  );
};

export default Projects;

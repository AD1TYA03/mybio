import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "E-commerce Store",
      description: "A fully functional e-commerce platform built with React and Node.js. Includes user authentication, product management, and payment integration.",
      image: "https://images.pexels.com/photos/7915236/pexels-photo-7915236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://example-ecommerce.com",
      techStack: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Social Media App",
      description: "A social media application with features like posting, commenting, and following users. Built with React Native.",
      image: "https://images.pexels.com/photos/5427492/pexels-photo-5427492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://example-socialmedia.com",
      techStack: ["React Native", "JavaScript", "Redux"],
    },
    {
      title: "Task Management Tool",
      description: "A web application for managing tasks and projects. Built with React and Node.js.",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://example-taskmanager.com",
      techStack: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills. Built with React and Tailwind CSS.",
      image: "https://images.pexels.com/photos/373899/pexels-photo-373899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://example-portfolio.com",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Backend API Service",
      description: "A robust backend API service for data management and user authentication, built with Node.js and Java.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://api-example.com",
      techStack: ["Node.js", "Java", "Python"],
    },
    {
      title: "Data Analysis Tool",
      description: "A data analysis tool for processing and visualizing large datasets, developed using Python.",
      image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://data-analysis-example.com",
      techStack: ["Python"],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.demoLink} className="project-demo" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
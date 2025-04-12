import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "FitBharat",
      description:
        "A fitness and wellness app that promotes a healthy lifestyle through gamified challenges, community interaction, and personalized fitness tracking. Built using React Native and MongoDB with microservices architecture.",
      image:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://fitbharat.example.com",
      techStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express",
        "JWT",
        "Socket.IO",
        "Google Map API",
      ],
    },
    {
      title: "BLIS (Book Libraries In Seconds)",
      description:
        "A cross-platform app for booking study rooms with flexible subscriptions. Includes map-based library discovery, secure payments, real-time booking management, and admin dashboard for library owners. Designed with scalability and user experience in mind.",
      image:
        "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://blis-app.example.com",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "JWT",
      ],
    },
    {
      title: "To-Do List App",
      description:
        "A simple and intuitive to-do list application that helps users manage their daily tasks efficiently. Features include task creation, editing, deletion, filtering by status, and persistent storage.",
      image:
        "https://images.pexels.com/photos/1151855/pexels-photo-1151855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://todo-app.example.com",
      techStack: ["React", "JavaScript", "CSS", "LocalStorage"],
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
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
              <a
                href={project.demoLink}
                className="project-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
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

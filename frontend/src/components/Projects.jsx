

const PROJECTS = [
  {
    title: "Civic Issue Reporting System",
    description:
      "A web platform where users can report civic issues with image uploads, location tracking, and issue status updates.",

    image: "/projects/project1.png",

    github: "https://github.com/Addagudi-Sathvik/Civic-Issue-Reporting",

    live: "https://civic-issue-reporting-system-six.vercel.app",

    tech: ["React", "Node.js", "MongoDB", "Express"]
  },

  {
    title: "KhataTrack",
    description:
      "An expense management system that helps users track spending, manage transactions, and monitor budgets.",

    image: "/projects/project2.png",

    github: "https://github.com/Addagudi-Sathvik",

    live: "https://khatatrack.vercel.app",

    tech: ["React", "Node.js", "MongoDB"]
  },

  {
    title: "Event Management System",
    description:
      "A platform for organizing and managing events with registrations and scheduling features.",

    image: "/projects/project3.png",

    github: "https://github.com/Addagudi-Sathvik",

    live: "https://event-management-system-ivory-ten.vercel.app",

    tech: ["React", "Express", "MongoDB"]
  },

  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects, skills, achievements, and contact functionality.",

    image: "/projects/project4.png",

    github: "https://github.com/Addagudi-Sathvik/Portfolio",

    live: "https://portfolio-brown-nine-70.vercel.app",

    tech: ["React", "CSS", "Vite"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((item, i) => (
                  <span key={i} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
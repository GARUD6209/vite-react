function ProjectList() {
  const projects = [
    {
      title: "Project One",
      discription: "A web application build using react and Spring-boot",
      link: "#",
    },
    {
      title: "Project two",
      discription: "A web application build using angular and Spring-boot",
      link: "#",
    },
  ];
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="projects-item">
            <h3>{project.title}</h3>
            <h3>{project.discription}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

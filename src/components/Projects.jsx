function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">

        <div className="project-card">
          <h2>Project Adventour</h2>
          <p>
            A full-stack tourism platform for discovering and managing
            travel destinations with a React frontend and Flask backend.
          </p>

          <p className="tech">
            React • Flask • REST API • Database
          </p>

          <a href="https://github.com/edwinaloo" target="_blank">
            View Code →
          </a>
        </div>


        <div className="project-card">
          <h2>Smart Reminder System</h2>
          <p>
            A smart scheduling system that helps users manage tasks
            and reminders efficiently.
          </p>

          <p className="tech">
            Python • Flask • Database
          </p>

          <a href="https://github.com/edwinaloo" target="_blank">
            View Code →
          </a>
        </div>


        <div className="project-card">
          <h2>To-Do / Recipe App</h2>
          <p>
            A simple application for managing daily tasks and recipes
            with full CRUD functionality.
          </p>

          <p className="tech">
            React • JavaScript • HTML • CSS
          </p>

          <a href="https://github.com/edwinaloo" target="_blank">
            View Code →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
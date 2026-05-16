const projects = [
  {
    number: '01',
    title: 'Sokwe-B',
    description:
      'Live client site — built a component-based React frontend, structured the routing and layout architecture, and deployed to a custom domain. Fully responsive across all breakpoints.',
    tech: ['React', 'JavaScript', 'CSS', 'Custom Domain'],
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    label: 'sokwe-b.com',
    code: 'https://github.com/sokwe42/sokwe-b',
    live: 'https://sokwe-b.com',
  },
  {
    number: '02',
    title: 'Oakwire Limited',
    description:
      'Corporate site for a real business — structured multi-section layout, clean component hierarchy, and production deployment on Vercel with performance-optimised asset loading.',
    tech: ['React', 'JavaScript', 'CSS', 'Vercel'],
    gradient: 'linear-gradient(135deg, #0d1b2a, #1b4332, #2d6a4f)',
    label: 'oakwire-limited.vercel.app',
    code: 'https://github.com/edwinaloo/oakwire-limited',
    live: 'https://oakwire-limited.vercel.app',
  },
  {
    number: '03',
    title: 'Adventour',
    description:
      'Full-stack tourism platform — designed the REST API with Flask, modelled relational data with SQLAlchemy, implemented JWT-based auth, and built the React frontend with protected routes.',
    tech: ['React', 'Flask', 'SQLAlchemy', 'JWT', 'REST API'],
    gradient: 'linear-gradient(135deg, #1a0533, #3d0066, #6a0dad)',
    label: 'project-adventour.vercel.app',
    code: 'https://github.com/BabaMboga/project-adventour',
    live: 'https://project-adventour.vercel.app',
  },
  {
    number: '04',
    title: 'Invoice App',
    description:
      'Full-stack invoicing platform — built a Flask REST API with PostgreSQL and SQLAlchemy, implemented client and invoice CRUD with status tracking (draft → sent → paid), PDF export via ReportLab, and a TypeScript React frontend with a KPI dashboard.',
    tech: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #0a1628, #1a3a5c, #1e6091)',
    label: 'invoice-app-pi-six.vercel.app',
    code: 'https://github.com/edwinaloo/Invoice-App',
    live: 'https://invoice-app-pi-six.vercel.app/login',
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="section-title-wrap">
        <p className="section-label">/ work</p>
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">
          Things I've built and shipped — real clients, real code, real users.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.number} className="project-card">
            <div className="project-img">
              <div
                className="project-img-gradient"
                style={{ background: project.gradient }}
              />
              <span className="project-img-label">{project.label}</span>
              <div className="project-img-links">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-img-link-btn"
                >
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-img-link-btn"
                >
                  Live
                </a>
              </div>
            </div>

            <div className="project-body">
              <p className="project-number">{project.number}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Code →
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Site →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="other-work">
        <span className="other-work-label">Other work</span>
        <a
          href="https://github.com/edwinaloo/html-recipe"
          target="_blank"
          rel="noopener noreferrer"
          className="other-work-link"
        >
          Recipe App ↗
        </a>
        <a
          href="https://github.com/edwinaloo"
          target="_blank"
          rel="noopener noreferrer"
          className="other-work-link"
        >
          More on GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Projects;

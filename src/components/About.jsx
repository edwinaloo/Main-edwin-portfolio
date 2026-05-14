function About() {
  return (
    <section id="about">
      <div className="section-title-wrap">
        <p className="section-label">/ about me</p>
        <h2 className="section-heading">Who I Am</h2>
      </div>

      <div className="about-inner">
        <div className="about-left">
          <p className="about-text">
            I'm a full-stack developer based in Kenya, focused on building web
            applications that are fast, clean, and actually shipped. My stack is
            React on the frontend and Flask on the backend — I've built live
            client sites, implemented JWT authentication, designed relational
            databases, and deployed to production.
          </p>
          <p className="about-text">
            I care about writing code that's maintainable and that solves real
            problems. I take a project from idea to deployed product and stay
            hands-on at every layer of the stack. Currently open to full-time
            roles and freelance work.
          </p>

          <div className="about-details">
            <div className="about-detail-row">
              <span className="about-detail-label">Stack</span>
              <span>React · Flask · PostgreSQL</span>
            </div>
            <div className="about-detail-row">
              <span className="about-detail-label">Based in</span>
              <span>Kenya</span>
            </div>
            <div className="about-detail-row">
              <span className="about-detail-label">Status</span>
              <span>Open to work</span>
            </div>
            <div className="about-detail-row">
              <span className="about-detail-label">Email</span>
              <a
                href="mailto:alooedwin94@gmail.com"
                className="about-detail-link"
              >
                alooedwin94@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-stat-card">
            <div className="about-stat-number">5+</div>
            <div className="about-stat-label">Projects Built</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">2+</div>
            <div className="about-stat-label">Years Coding</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">3</div>
            <div className="about-stat-label">Live Sites</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">∞</div>
            <div className="about-stat-label">Problems Solved</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

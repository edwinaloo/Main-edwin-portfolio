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
            I'm a full-stack software engineer based in Kenya. I build production
            web applications — React and TypeScript frontends, Flask REST APIs,
            PostgreSQL databases. My work spans client sites shipped to real users,
            hackathon projects tackling real-world problems across Africa, and
            full-stack SaaS tools with auth, PDF generation, and KPI dashboards.
          </p>
          <p className="about-text">
            I take ownership of the entire stack — from schema design and API
            architecture to frontend state management and deployment. Whether it's
            a corporate platform, an invoicing system, or an SMS-integrated
            backend, I get it shipped. Open to full-time roles and freelance
            contracts.
          </p>

          <div className="about-details">
            <div className="about-detail-row">
              <span className="about-detail-label">Stack</span>
              <span>React · TypeScript · Flask · PostgreSQL</span>
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
            <div className="about-stat-number">20+</div>
            <div className="about-stat-label">Projects Shipped</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">2+</div>
            <div className="about-stat-label">Years Building</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">4</div>
            <div className="about-stat-label">Live Sites</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-number">2</div>
            <div className="about-stat-label">Real Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import { useEffect, useRef } from 'react';

const categories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python 3', 'C++', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'React Router', 'Tailwind CSS', 'Vite', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Flask', 'REST API Design', 'JWT Authentication', 'SQLAlchemy ORM', 'CORS & Middleware'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Schema Design', 'Alembic Migrations'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Vercel', 'Postman', 'VS Code', 'npm / pip'],
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.skill-tag').forEach((tag, i) => {
              setTimeout(() => tag.classList.add('skill-tag--visible'), i * 40);
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-title-wrap">
        <p className="section-label">/ skills</p>
        <h2 className="section-heading">What I Work With</h2>
        <p className="section-subheading">
          Technologies and tools I use to build and ship real products.
        </p>
      </div>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-category">
            <div className="skill-category-title">{cat.title}</div>
            <div className="skill-tags">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

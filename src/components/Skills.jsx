import { useEffect, useRef } from 'react';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML5 & CSS3', level: 92 },
      { name: 'React Router', level: 85 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Flask', level: 82 },
      { name: 'REST API Design', level: 86 },
      { name: 'JWT Authentication', level: 80 },
      { name: 'SQLAlchemy ORM', level: 78 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'SQLite', level: 83 },
      { name: 'Schema Design', level: 79 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', level: 89 },
      { name: 'Vercel', level: 85 },
      { name: 'VS Code', level: 92 },
      { name: 'Postman', level: 82 },
      { name: 'npm / pip', level: 87 },
    ],
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
            section.querySelectorAll('.skill-bar-fill').forEach((bar) => {
              bar.style.width = bar.dataset.width;
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
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
          Technologies and tools I've used to build and ship real products.
        </p>
      </div>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-category">
            <div className="skill-category-title">{cat.title}</div>
            {cat.skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-item-header">
                  <span className="skill-item-name">{skill.name}</span>
                  <span className="skill-item-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    data-width={`${skill.level}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

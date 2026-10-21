

const projects = [
  {
    number: "01",
    title: "Tabernacle Church Website",
    category: "Church Website Development",
    description:
      "A church website project focused on modern design, user-friendly navigation, ministry resources, and media integration.",
    image: "/images/Tabernacle.png",
    tags: ["React", "CSS", "Responsive Design", "Media Integration"],
    url: "https://tabernacle-southaven-website.vercel.app/",
    status: "live",
    buttonText: "Visit Church Website",
  },
  {
    number: "02",
    title: "Business Landing Page",
    category: "Frontend Web Development",
    description:
      "A responsive business landing page designed to communicate services clearly, present a professional brand, and encourage visitors to take action.",
    image: "/images/Business Landing Page.png",
    tags: ["Frontend", "CSS", "Responsive Design", "Vercel"],
    url: "https://business-landing-page-six-ashen.vercel.app/",
    status: "live",
    buttonText: "View Live Project",
  },
  {
    number: "03",
    title: "Automation Dashboard",
    category: "Software Application Development",
    description:
      "An in-development business management application exploring executive dashboards, AI-assisted workflows, and operational decision support.",
    image: "/images/Automation Dashboard.png",
    tags: ["React", "Next.js", "AI Integration", "Dashboard"],
    url: null,
    status: "development",
    buttonText: "In Development",
  },
];


function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home">
            <span className="brand-icon">KW.</span>
            <span>Kevin Wilson<span className="brand-accent"> Digital</span></span>
          </a>

          <nav className="nav-menu" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>

          <a className="nav-contact" href="#contact">
            Let's Talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="intro-pill">
                <span className="status-dot"></span>
                IT PROFESSIONAL / WEB DEVELOPER
              </div>

              <p className="hero-greeting">Hello, I'm Kevin Wilson.</p>

              <h1>
                Building digital
                <span className="gradient-text"> experiences </span>
                that matter.
              </h1>

              <p className="hero-description">
                I combine hands-on IT experience with modern web development
                to turn ideas into practical, engaging digital solutions
                for businesses, brands, and organizations.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button button-primary">
                  Explore My Work <span aria-hidden="true">↗</span>
                </a>
                <a href="#about" className="button button-outline">
                  More About Me <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="hero-keywords">
                <span>WEB DEVELOPMENT</span>
                <span>IT SOLUTIONS</span>
                <span>PROBLEM SOLVING</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>

              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <i></i><i></i><i></i>
                  </div>
                  <span>developer.jsx</span>
                  <span className="window-symbol">⌘</span>
                </div>

                <div className="code-body">
                  <p className="code-comment">// Developer profile</p>
                  <p><span className="syntax-purple">const</span> developer = {"{"}</p>
                  <p className="indent">name: <span className="syntax-green">"Kevin Wilson"</span>,</p>
                  <p className="indent">focus: <span className="syntax-green">"Web Development"</span>,</p>
                  <p className="indent">background: <span className="syntax-green">"Information Technology"</span>,</p>
                  <p className="indent">approach: <span className="syntax-green">"Problem Solving"</span>,</p>
                  <p className="indent">mission: <span className="syntax-green">"Build With Purpose"</span></p>
                  <p>{"}"};</p>
                  <p className="code-spacer"></p>
                  <p><span className="syntax-purple">function</span> <span className="syntax-blue">buildFuture</span>() {"{"}</p>
                  <p className="indent"><span className="syntax-purple">return</span> <span className="syntax-green">"Make it happen."</span>;</p>
                  <p>{"}"}</p>
                </div>
                <div className="window-footer">
                  <span><span className="status-dot"></span> System ready</span>
                  <span>React / JavaScript</span>
                </div>
              </div>

              <div className="floating-label">
                <span className="floating-symbol">✦</span>
                Design. Develop. Deliver.
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-hint">SCROLL TO EXPLORE ↓</a>
        </section>

        <div className="expertise-strip">
          <div className="container expertise-inner">
            <span>TECHNOLOGY</span>
            <span className="strip-star">✳</span>
            <span>DEVELOPMENT</span>
            <span className="strip-star">✳</span>
            <span>INNOVATION</span>
            <span className="strip-star">✳</span>
            <span>IT SOLUTIONS</span>
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="container about-grid">
            <div>
              <span className="section-kicker">01 / ABOUT ME</span>
              <h2>Technology is what I do. <span className="gradient-text">Problem solving is who I am.</span></h2>
            </div>
            <div className="about-right">
              <p>
                I'm an IT professional expanding my expertise into web
                development. I enjoy understanding how technology works,
                solving complex problems, and building tools that people
                can actually use.
              </p>
              <p>
                From troubleshooting business technology to developing
                modern websites, my approach is grounded in continuous
                learning, clear communication, and purposeful execution.
              </p>
              <a href="#skills" className="text-link">Discover my skills ↗</a>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-top">
              <div>
                <span className="section-kicker">02 / SELECTED WORK</span>
                <h2>Featured <span className="gradient-text">Projects.</span></h2>
              </div>
              <p>Real projects and work in progress that reflect how I learn, build, and solve problems.</p>
            </div>

            
<div className="projects-grid">
  {projects.map((project) => (
    <article className="project-card-new" key={project.number}>
      {/* Project screenshot */}
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-image"
          loading="lazy"
        />

        <span className="project-number">
          {project.number} / PROJECT
        </span>

        <span
          className={`project-status ${
            project.status === "live" ? "status-live" : "status-development"
          }`}
        >
          {project.status === "live"
            ? "Featured Project"
            : "In Development"}
        </span>
      </div>

      {/* Project information */}
      <div className="project-details">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action"
          >
            {project.buttonText}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="planned-label">
            {project.buttonText}
          </span>
        )}
      </div>
    </article>
  ))}
</div>


                  <div className="project-details">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.number}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    {project.type === "live" ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-action">
                        View Live Project <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="planned-label">Planned Project</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <span className="section-kicker">03 / WHAT I BRING</span>
            <h2>A foundation in IT.<br /><span className="gradient-text">A future in development.</span></h2>

            <div className="skills-grid">
              <div className="skill-panel">
                <div className="skill-icon">{"</>"}</div>
                <h3>Web Development</h3>
                <p>Building responsive interfaces and improving my ability to create useful digital experiences.</p>
                <div className="skills-list">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
                </div>
              </div>

              <div className="skill-panel">
                <div className="skill-icon">⌘</div>
                <h3>Development Tools</h3>
                <p>Using modern development workflows to build, manage, test, and deploy projects.</p>
                <div className="skills-list">
                  <span>VS Code</span><span>GitHub</span><span>Vercel</span><span>Vite</span>
                </div>
              </div>

              <div className="skill-panel">
                <div className="skill-icon">⚙</div>
                <h3>IT & Systems</h3>
                <p>Applying practical IT knowledge to troubleshooting, technical operations, and end-user support.</p>
                <div className="skills-list">
                  <span>Windows</span><span>Networking</span><span>Active Directory</span><span>Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section philosophy-section">
          <div className="container">
            <span className="section-kicker">04 / MY APPROACH</span>
            <h2>"Great technology doesn't just work. <span className="gradient-text">It makes a difference.</span>"</h2>
            <p>Built with integrity. Driven by curiosity. Focused on real results.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner">
            <span className="section-kicker">05 / LET'S CONNECT</span>
            <h2>Have an idea?<br /><span className="gradient-text">Let's bring it to life.</span></h2>
            <p>Interested in collaborating, discussing a development opportunity, or building something meaningful? I'd love to connect.</p>
            <p className="contact-note">Contact details and professional profiles will be added here.</p>
            <a href="#home" className="button button-outline">Back to Top ↑</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#home">KW<span>.</span></a>
          <span>© 2026 Kevin Wilson Digital. Built with purpose.</span>
          <a href="#home">Back to Top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

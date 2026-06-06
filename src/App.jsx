import "./index.css";

const projects = [
  {
    title: "Business Landing Page",
    description:
      "A responsive business website for a technology service company focused on websites, automation, dashboards, and business tools.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    liveLink: "https://business-landing-page-six-ashen.vercel.app/",
    githubLink: "https://github.com/kevindewaynewilson-collab/business-landing-page",
  },
  {
    title: "IT Support Ticket Dashboard",
    description:
      "A React dashboard that allows users to create, track, update, and delete IT support tickets with status sections, priority tracking, summary cards, and local browser storage.",
    tech: ["React", "Vite", "Tailwind CSS", "localStorage"],
    liveLink: "https://ticket-dashboard-tau.vercel.app/",
    githubLink: "https://github.com/kevindewaynewilson-collab/ticket-dashboard",
  },
  {
    title: "Business Automation Dashboard",
    description:
      "A React dashboard that helps businesses track repetitive manual tasks, estimate weekly time spent, calculate potential time savings, and manage automation status.",
    tech: ["React", "Vite", "Tailwind CSS", "localStorage"],
    liveLink: "https://automation-dashboard-livid.vercel.app/",
    githubLink: "https://github.com/kevindewaynewilson-collab/automation-dashboard",
  },
];

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Vite",
  "Git",
  "GitHub",
  "Responsive Design",
  "Business Automation",
  "IT Support Workflows",
  "Technical Troubleshooting",
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-xl font-bold">Kevin Wilson</h1>

          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="px-6 py-20 max-w-6xl mx-auto">
        <p className="text-blue-400 font-semibold mb-4">
          IT Professional | Junior Full-Stack Developer | Business Automation Tools
        </p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl">
          I build websites, dashboards, and workflow tools that help businesses
          save time and operate better.
        </h2>

        <p className="text-slate-300 mt-6 max-w-3xl text-lg leading-8">
          I combine my IT support background with web development skills to
          build practical business tools, responsive websites, ticket dashboards,
          and automation-focused applications.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="px-6 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>

          <p className="text-slate-300 max-w-4xl leading-8">
            I am an IT professional transitioning deeper into web development,
            full-stack development, and business automation. My background in
            technical support, troubleshooting, documentation, and IT workflows
            helps me understand real business problems and build practical
            technology solutions.
          </p>

          <p className="text-slate-300 max-w-4xl leading-8 mt-4">
            My current focus is building websites, dashboards, workflow tools,
            and automation-focused applications that help organizations organize
            information, reduce repetitive work, and improve daily operations.
          </p>
        </div>
      </section>

      <section id="skills" className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">Skills & Tools</h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-slate-900 border border-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="services" className="px-6 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">What I Build</h3>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-3">Websites</h4>
              <p className="text-slate-400 leading-7">
                Responsive websites and landing pages for businesses, brands,
                and service providers.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-3">Dashboards</h4>
              <p className="text-slate-400 leading-7">
                Simple dashboards for tracking tickets, tasks, processes,
                business information, and workflows.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-3">Automation Tools</h4>
              <p className="text-slate-400 leading-7">
                Tools that help businesses identify repetitive work and create
                better systems.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="font-bold text-xl mb-3">IT Workflow Tools</h4>
              <p className="text-slate-400 leading-7">
                Applications that connect IT support experience with practical
                software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Featured Projects</h3>

        <p className="text-slate-400 max-w-3xl mb-8 leading-7">
          These projects were built to show my ability to create business-focused
          web applications, responsive layouts, dashboard interfaces, and
          automation tools.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col"
            >
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>

              <p className="text-slate-400 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-slate-600 hover:border-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Contact</h3>

          <p className="text-slate-300 max-w-3xl mb-6 leading-7">
            I am open to opportunities involving web development, IT support,
            business automation, application support, and practical technology
            solutions.
          </p>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 max-w-2xl">
            <p className="text-slate-300">
              Email:{" "}
              <a
                href="mailto:kevindewaynewilson@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                kevindewaynewilson@gmail.com
              </a>
            </p>

            <p className="text-slate-300 mt-3">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/kevinwilsontech"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                https://www.linkedin.com/in/kevinwilsontech
              </a>
            </p>

            <p className="text-slate-300 mt-3">
              GitHub:{" "}
              <a
                href="https://github.com/kevindewaynewilson-collab"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                https://github.com/kevindewaynewilson-collab
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-slate-500 text-sm">
        © 2026 Kevin Wilson. Built with React and Tailwind CSS.
      </footer>
    </main>
  );
}

export default App;
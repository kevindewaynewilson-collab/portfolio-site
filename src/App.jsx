import "./index.css";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-blue-400 font-semibold mb-4">
          Full-Stack Developer | IT Automation | Business Technology Solutions
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I build websites, dashboards, and automation tools for businesses.
        </h1>

        <p className="text-slate-300 mt-6 max-w-2xl text-lg">
          I use my IT background and full-stack development skills to create practical
          websites, business tools, and workflow systems.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-slate-500 px-6 py-3 rounded-lg font-semibold"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="px-6 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-300 leading-7">
            I am an IT professional building full-stack development skills with a focus
            on business websites, internal dashboards, automation systems, and practical
            software tools.
          </p>
        </div>
      </section>

      <section id="projects" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Business Landing Page</h3>
            <p className="text-slate-400">
              A clean website for a business technology service.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">IT Ticket Dashboard</h3>
            <p className="text-slate-400">
              A dashboard for creating and tracking IT support tickets.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Automation Dashboard</h3>
            <p className="text-slate-400">
              A tool for tracking manual business processes and automation opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-slate-300">Email: your-email@example.com</p>
          <p className="text-slate-300">GitHub: github.com/your-username</p>
          <p className="text-slate-300">LinkedIn: linkedin.com/in/your-profile</p>
        </div>
      </section>
    </main>
  );
}

export default App;
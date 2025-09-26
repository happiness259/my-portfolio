export default function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-black shadow-md sticky top-0 z-50 w-full">
        <nav className="w-full flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-green-400 text-white">About</a></li>
            <li><a href="#projects" className="hover:text-green-400 text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-400 text-white">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full text-center py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-green-900 text-white">
        <img
          src="./profile.jpeg"
          alt="Profile "
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-green-400 shadow-xl bg-white"
        />

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-green-400">Happiness</span>
        </h2>
        <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
          A passionate web developer building modern, responsive, and sustainable websites.
        </p>
        <a
          href="#projects"
          className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-6 bg-gray-900">
        <h3 className="text-3xl font-bold mb-6 text-center text-white">About Me</h3>
        <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
          I'm Happiness, a web developer who loves creating clean and responsive websites.
          My journey in tech includes working on projects like
          <span className="font-medium text-green-400"> AgriHub</span> and
          <span className="font-medium text-green-400"> SmartAgri Hub</span>, where I
          combine technology with sustainability to solve real-world challenges.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 px-6 bg-black">
        <h3 className="text-3xl font-bold mb-8 text-center text-white">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2 text-white">AgriHub</h4>
            <p className="text-gray-400 mb-4">
              An all-in-one platform for farmers in East Africa offering financial tools,
              marketplaces, and AI-driven insights.
            </p>
            <a href="#" className="text-green-400 font-medium hover:underline">
              View Project →
            </a>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2 text-white">SmartAgri Hub</h4>
            <p className="text-gray-400 mb-4">
              A smart farming kit for monitoring soil health, irrigation, and crop growth
              using IoT and mobile notifications.
            </p>
            <a href="#" className="text-green-400 font-medium hover:underline">
              View Project →
            </a>
          </div>
          <div className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2 text-white">Farm Hub Chat</h4>
            <p className="text-gray-400 mb-4">
              A farmer-friendly chat platform to connect communities, share insights,
              and access agricultural support in real-time.
            </p>
            <a href="#" className="text-green-400 font-medium hover:underline">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-green-700 text-white py-20 px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="mb-6">I'm always open to discussing new projects or opportunities.</p>
          <a
            href="mailto:wanjiruhappiness@gmail.com"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-500 text-center py-6">
        © 2025 Happiness | Built with React and Tailwind CSS
      </footer>
    </>
  );
}

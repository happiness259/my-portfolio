export default function App() {
  return (
    <>
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50 w-full">
        <nav className="w-full flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-600">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full text-center py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
        <img
          src="/profile.jpeg"
          alt="Profile picture of Happiness"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
        />

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-300">Happiness</span>
        </h2>
        <p className="text-lg text-gray-100 mb-6 max-w-xl mx-auto">
          A passionate web developer building modern, responsive websites.
        </p>
        <a
          href="#projects"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
          I'm Happiness, a passionate web developer who loves creating clean and
          responsive websites. My journey in tech includes working on projects like
          <span className="font-medium text-indigo-600"> AgriHub</span> and
          <span className="font-medium text-indigo-600"> SmartAgri Hub</span>, where I
          combined technology with sustainability to solve real-world challenges.
          Beyond coding, I enjoy learning new tools, sharing knowledge, and building
          projects that make a positive impact.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">AgriHub</h4>
            <p className="text-gray-600 mb-4">
              An all-in-one platform for farmers in East Africa offering financial tools,
              marketplaces, and AI-driven insights.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              View Project →
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">SmartAgri Hub</h4>
            <p className="text-gray-600 mb-4">
              A smart farming kit for monitoring soil health, irrigation, and crop growth
              using IoT and mobile notifications.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              View Project →
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-2">Shujaa Adventure Cove</h4>
            <p className="text-gray-600 mb-4">
              A hybrid amusement and water park concept blending eco-tourism,
              sustainability, and cultural experiences.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-indigo-600 text-white py-20 px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="mb-6">I'm always open to discussing new projects or opportunities.</p>
          <a
            href="mailto:wanjiruhappiness@gmail.com"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 text-center py-6">
        © 2025 Happiness | Built with React and Tailwind CSS
      </footer>
    </>
  );
}

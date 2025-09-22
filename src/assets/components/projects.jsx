const Projects = () => {
    return (
      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "AgriHub", desc: "All-in-one platform for farmers in East Africa." },
            { title: "SmartAgri Hub", desc: "IoT-powered smart farming kit." },
            { title: "Shujaa Adventure Cove", desc: "Hybrid amusement & water park." },
          ].map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  
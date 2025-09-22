import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Happiness 👋</h1>
      <p className="text-lg mb-6">A Web Developer building modern and responsive websites.</p>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;

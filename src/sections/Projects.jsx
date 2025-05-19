import React from 'react';
import { projects } from '../constants';


export const Project = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 mb-12 drop-shadow-lg animate-pulse">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-4">
        {projects.map((prj, index) => (
          <div
            key={index}
            className="group p-1 cursor-pointer rounded-xl border border-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-border"
          >
            <div className="bg-gray-900 rounded-xl p-5 flex flex-col h-full shadow-xl transition-transform duration-500 hover:scale-105">
              <img
                src={prj.image}
                alt={prj.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-pink-300">{prj.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{prj.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {prj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-pink-500 text-xs px-2 py-1 rounded-md text-pink-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={prj.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm text-blue-400 hover:underline"
                style={{ pointerEvents: "auto", zIndex: 2, position: "relative" }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Button */}
      <div className="mt-16 w-full flex justify-center px-4">
        <a
          href="https://github.com/mochi-vidhi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-6 py-3 border-2 border-pink-500 rounded-full text-base sm:text-lg font-semibold text-white hover:bg-pink-500 transition-all duration-300"
          style={{ pointerEvents: "auto", zIndex: 2, position: "relative" }}
        >
          🔥 View More Projects on GitHub
        </a>
      </div>

    </section>
  );
};

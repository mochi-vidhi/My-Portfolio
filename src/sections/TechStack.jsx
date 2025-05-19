import TitleHeader from "./TitleHeader";
import { techStackIcons } from "../constants";

export const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        {/* Centered grid with 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 justify-items-center">
          {techStackIcons.map((tech) => (
            <div
              key={tech.name}
              className="relative w-40 h-40 bg-gradient-to-b from-transparent to-indigo-200
                         border-4 border-indigo-500 rounded-[30%] hover:scale-105 transition-all duration-500
                         overflow-hidden shadow-lg group"
            >
              {/* Zigzag top-down animated background */}
              <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-700 via-indigo-400 to-transparent 
                opacity-0 zigzag-bg-hover transition-opacity duration-700 z-0" />


              <div className="relative z-10 flex flex-col items-center justify-center h-full p-3">
                <img
                  src={tech.modelPath}
                  alt={tech.name}
                  className="w-12 h-12 object-contain mb-2 transition-transform duration-500 group-hover:scale-110"
                />
                <p className="text-center text-m font-semibold text-black">
                  {tech.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

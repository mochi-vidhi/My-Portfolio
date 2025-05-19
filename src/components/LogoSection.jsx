import React from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-24 mx-4">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="w-16 h-16 object-contain"
      />
      <p className="mt-2 text-sm font-medium text-white text-center">
        {icon.name}
      </p>
    </div>
  );
};

export const LogoSection = () => {
  const repeatedIcons = [...logoIconsList, ...logoIconsList,...logoIconsList,...logoIconsList];

  return (
    <div id="tools" className="bg-black py-10 mt-10">
      <h2 className="text-5xl font-bold text-center mb-5 animate-pulse">
        <span className="text-red-400">T</span>
        <span className="text-orange-400">o</span>
        <span className="text-yellow-400">o</span>
        <span className="text-green-400">l</span>
        <span className="text-blue-400">s</span>
        <span className="text-white"> & </span>
        <span className="text-pink-400">P</span>
        <span className="text-purple-400">l</span>
        <span className="text-indigo-400">a</span>
        <span className="text-teal-400">t</span>
        <span className="text-rose-400">f</span>
        <span className="text-cyan-400">o</span>
        <span className="text-lime-400">r</span>
        <span className="text-amber-400">m</span>
        <span className="text-sky-400">s</span>
      </h2>

      <div className="marquee overflow-hidden w-full">
        <div className="marquee-box flex gap-0">
          {repeatedIcons.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

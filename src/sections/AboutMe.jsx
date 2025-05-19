// components/AboutMe.jsx
import React from 'react';
import { Tilt } from "react-tilt";
import ParticlesComponent from '../../particles/src/components/particles';

export const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="relative min-h-screen text-white flex flex-col lg:flex-row items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* <ParticlesComponent /> */}

      {/* Top "About Me" heading image */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/images/aboutme.png"
          alt="About Me 3D"
          className="w-96 h-auto drop-shadow-lg animate-pulse"
        />
      </div>

      {/* Left: Tilt Image */}
      <div className="mt-28 lg:mt-40 lg:mr-10 z-10">
        <figure className="flex items-center justify-center">
          <Tilt
            options={{
              max: 25,
              speed: 1000,
              scale: 1.05,
              glare: true,
              "max-glare": 0.2,
            }}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-[0_0_40px_rgba(199,125,255,0.4)] hover:shadow-[0_0_60px_rgba(199,125,255,0.7)] transition-all duration-500 ease-in-out">
              <img
                src="/images/vidhi3d.jpg"
                alt="Vidhi cartoon"
                className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Tilt>
        </figure>
      </div>

      {/* Right: Colorful Paragraphs */}
      <div className="w-full lg:w-1/2 z-10 mt-10 lg:mt-40 lg:pl-10 space-y-6 leading-8 text-lg text-left font-medium">
        <p>
          <span>My name is Mochi Vidhi.</span> I’m currently pursuing my <span>B.Tech in Information Technology</span> from <span>CVM University</span>.
          Although I haven’t entered the professional world yet, I’ve created <span>multiple tech projects</span> to sharpen my skills.
        </p>
        <p>
          I can't say with 100% certainty where I’ll be in five years — the <span>tech world changes fast</span>, and I’m still learning.
          But what I do know is that I approach every project with <span>creativity and enthusiasm</span>.
        </p>
        <p>
          I’m open to <span >challenges</span> and <span>quick to learn</span>. I look forward to becoming a team player and building impactful digital products.
        </p>
      </div>
    </section>
  );
};


// 
{
  (function(){
     
  })()
}


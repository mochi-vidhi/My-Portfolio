// components/Education.jsx
import React from 'react';

export const Education = () => {
  return (
    <section id="education" className="min-h-screen px-6 py-8 bg-black text-white flex flex-col items-center justify-center">
      
      {/* Heading */}
      <img 
        src="images/education.png" 
        alt="Education"
        className="w-80 h-auto mb-12 drop-shadow-lg animate-pulse"
      />

      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        
        {/* Card Template */}
        {[
          {
            title: "10th Grade",
            school: "N.K High School",
            board: "GSEB | Year: 2020",
            score: "Score: 73.66%",
            colors: "from-pink-500 via-purple-500 to-blue-500"
          },
          {
            title: "12th Grade",
            school: "N.K High School",
            board: "GSEB | Year: 2022",
            score: "Score: 66.66%",
            colors: "from-yellow-400 via-red-500 to-purple-500"
          },
          {
            title: "B.Tech in IT",
            school: "CVM University",
            board: "2022 - 2026 (Pursuing)",
            score: "Current CGPA: 9.07",
            colors: "from-green-400 via-teal-400 to-indigo-500"
          },
        ].map((edu, index) => (
          <div key={index} className="relative rounded-xl p-1 bg-gradient-to-r animate-borderMotion 
              from-pink-500 via-purple-500 to-blue-500 bg-[length:500%_500%] shadow-xl">
            
            <div className="bg-black rounded-xl p-6 h-full">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-pink-400 from-purple-400 pb-2">{edu.title}</h2>
              <p className="text-sm text-blue-200 pb-1">{edu.school}</p>
              <p className="text-sm text-yellow-300 pb-1">{edu.board}</p>
              <p className="text-m text-green-400 pb-1">{edu.score}</p>
            </div>
          </div>
        ))}

      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes borderMotion {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-borderMotion {
          animation: borderMotion 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export const Footer = () => {
    return (
      <footer className="w-full py-6 px-4 bg-[#0f0f0f] text-white mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left: Terms & Conditions */}
          <div className="mb-4 md:mb-0">
            <a
              href="#"
              className="text-sm hover:underline hover:text-gray-400"
            >
              Terms & Conditions
            </a>
          </div>
  
          {/* Center: Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/vidhu-chauhan-a362672b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5]"
              style={{ pointerEvents: "auto", zIndex: 2, position: "relative" }}
            >
              <img
                src="/images/LinkedInF.svg"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://github.com/mochi-vidhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              style={{ pointerEvents: "auto", zIndex: 2, position: "relative" }}
            >
              <img
                src="/images/GithubF.svg"
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>
          </div>
  
          {/* Right: Copyright */}
          <div className="mt-4 md:mt-0 text-sm text-center md:text-right pr-2">
            All rights reserved © 2025 by <span className="text-amber-600 text-m">MOCHI VIDHI</span>
          </div>
        </div>
      </footer>
    );
  };
  
  
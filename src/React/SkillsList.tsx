import { useState } from "react";

const CategoryIcons = {
  Cybersecurity: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
  ),
  "Web & Frontend": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
    </svg>
  ),
  "Tools & Collaboration": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M497 141c0-24.8-11.6-45.4-32-60.8V41c0-11-9-20-20-20s-20 9-20 20v41.8l-80 51.5v86.5l-97 58.7v-86.5l-80-51.5V41c0-11-9-20-20-20s-20 9-20 20v39.2C26 91.3 14.4 111.9 14.4 136.7c0 24.8 11.6 45.4 32 60.8v85.6c0 24.8 20.2 45 45 45h320c24.8 0 45-20.2 45-45V201.6c20.4-15.4 32-36 32-60.8z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    Cybersecurity: [
      "Web Security & Vulnerability Analysis",
      "OWASP Top 10",
      "Penetration Testing Fundamentals",
      "OSINT (Open-Source Intelligence)",
      "Network Analysis & Traffic Analysis",
      "SIEM Fundamentals",
      "Linux-based Systems",
    ],
    "Web & Frontend": [
      "Secure Web Applications",
      "XSS Prevention & Input Validation",
      "API Integration",
      "Performance Optimization",
      "JavaScript & Modern Frameworks",
      "PWA Development",
    ],
    "Tools & Collaboration": [
      "Git & Deployment Workflows",
      "Netlify, Cloudflare & CI/CD",
      "Agile Methodologies",
      "Jira, Notion, Slack, Miro",
      "Team Collaboration",
      "SEO & Google Analytics",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <button
              type="button"
              onClick={() => toggleItem(category)}
              className="w-full bg-[#1414149c] rounded-xl md:rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-3 md:p-4">
                {CategoryIcons[category as keyof typeof CategoryIcons]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <span className="text-[var(--white)] text-base md:text-lg font-medium">
                    {category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 md:w-6 md:h-6 text-[var(--white)] transform transition-transform duration-300 flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-3 md:px-4 overflow-hidden ${
                  openItem === category
                    ? "max-h-96 pb-3 md:pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1 md:space-y-2 text-[var(--white-icon)] text-sm md:text-base">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-[var(--sec)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

import { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Cybersecurity & OSINT Services": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Hacker_anonymous">
        <path d="M475.3571,413.24a69.9,69.9,0,0,0-39.8845-57.4407l-39.9287-18.7987,21.5791-44.5621a89.4527,89.4527,0,0,0,.0025-77.9684L359.7988,96.0682C317.7933,9.3105,194.2088,9.31,152.2019,96.0666L94.87,214.4745a89.445,89.445,0,0,0,.0049,77.9692l21.581,44.5569L76.5256,355.8a69.898,69.898,0,0,0-39.8831,57.439l-3.612,43.3773a22.5157,22.5157,0,0,0,22.4381,24.3842H456.5337A22.5134,22.5134,0,0,0,478.97,456.6187ZM364,260.1205a107.9746,107.9746,0,0,1-98.1035,107.5V341.1249a9.8965,9.8965,0,0,0-19.793,0v26.4957A107.9746,107.9746,0,0,1,148,260.1205V203.44a28.8192,28.8192,0,0,1,28.8193-28.8193H335.1806A28.8193,28.8193,0,0,1,364,203.44Z" />

        <path d="M321.8213,275.9979a9.91,9.91,0,0,0-12.3135,6.6709,13.5776,13.5776,0,0,1-26.0156,0,9.9026,9.9026,0,1,0-18.9844,5.6426,33.3877,33.3877,0,0,0,63.9844,0A9.9125,9.9125,0,0,0,321.8213,275.9979Z" />

        <path d="M240.8213,275.9979a9.8908,9.8908,0,0,0-12.3135,6.6709,13.5776,13.5776,0,0,1-26.0156,0,9.9026,9.9026,0,1,0-18.9844,5.6426,33.3877,33.3877,0,0,0,63.9844,0A9.9125,9.9125,0,0,0,240.8213,275.9979Z" />

        <path d="M319,227.4384H283a9.8965,9.8965,0,1,0,0,19.7929h36a9.8965,9.8965,0,1,0,0-19.7929Z" />

        <path d="M193,247.2313h36a9.8965,9.8965,0,1,0,0-19.7929H193a9.8965,9.8965,0,1,0,0,19.7929Z" />
      </g>
    </svg>
  ),
  "Analytics & SEO Optimization": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M435.244,391.19c32.805-41.18,52.518-93.432,52.503-150.118c0.015-66.486-27.029-126.93-70.608-170.464
		C373.593,27.021,313.149-0.016,246.667,0C180.181-0.016,119.742,27.021,76.2,70.608C32.616,114.142,5.576,174.586,5.591,241.072
		C5.576,307.55,32.616,367.994,76.2,411.536c43.542,43.587,103.982,70.624,170.468,70.608c50.948,0.016,98.312-15.91,137.281-42.94
		L456.756,512l49.653-49.653L435.244,391.19z M378.508,372.916c-33.826,33.773-80.267,54.591-131.841,54.606
		c-51.574-0.015-98.015-20.833-131.845-54.606c-33.784-33.834-54.595-80.271-54.61-131.844
		c0.015-51.574,20.826-98.011,54.61-131.844c33.83-33.78,80.271-54.591,131.845-54.606c51.574,0.015,98.014,20.826,131.841,54.606
		c33.791,33.833,54.602,80.271,54.617,131.844C433.11,292.646,412.299,339.082,378.508,372.916z"
      />
      <path
        d="M155.926,235.105l-5.696-0.792c-14.558-2.058-19.782-7.117-19.782-14.555c0-8.389,6.012-14.402,16.932-14.402
		c9.018,0,17.088,2.691,25.794,8.39c0.789,0.473,1.582,0.313,2.214-0.48l7.597-11.704c0.633-0.953,0.473-1.585-0.32-2.218
		c-8.542-6.484-21.359-10.76-34.809-10.76c-22.156,0-36.398,12.977-36.398,32.44c0,17.877,11.712,27.852,32.44,30.694l5.696,0.792
		c14.875,2.058,19.622,7.125,19.622,14.875c0,9.022-7.437,15.507-20.255,15.507c-12.024,0-22.312-5.852-29.273-11.392
		c-0.632-0.632-1.581-0.632-2.214,0.16l-9.811,11.392c-0.632,0.792-0.316,1.737,0.316,2.378
		c8.386,7.909,23.733,14.234,39.561,14.234c26.739,0,40.509-14.234,40.509-33.384C188.049,247.762,176.652,237.956,155.926,235.105z
		"
      />
      <path
        d="M275.566,190.322h-67.408c-0.949,0-1.581,0.632-1.581,1.585v104.435c0,0.953,0.632,1.585,1.581,1.585h67.408
		c0.953,0,1.585-0.632,1.585-1.585v-13.602c0-0.952-0.632-1.585-1.585-1.585h-49.368l-0.949-0.953V252.99l0.949-0.952h41.614
		c0.953,0,1.586-0.633,1.586-1.586v-13.609c0-0.945-0.633-1.577-1.586-1.577h-41.614l-0.949-0.953v-26.266l0.949-0.945h49.368
		c0.953,0,1.585-0.64,1.585-1.585v-13.61C277.151,190.954,276.519,190.322,275.566,190.322z"
      />
      <path
        d="M334.448,188.584c-18.514,0-32.439,8.863-37.975,25.954c-2.218,6.645-2.85,12.658-2.85,29.589
		c0,16.932,0.632,22.944,2.85,29.589c5.536,17.092,19.462,25.947,37.975,25.947c18.677,0,32.591-8.855,38.139-25.947
		c2.21-6.645,2.85-12.657,2.85-29.589c0-16.932-0.64-22.944-2.85-29.589C367.039,197.447,353.124,188.584,334.448,188.584z
		 M354.542,268.81c-3.003,8.702-9.327,14.082-20.095,14.082c-10.6,0-16.932-5.38-19.938-14.082
		c-1.265-3.955-1.898-9.495-1.898-24.682c0-15.355,0.633-20.734,1.898-24.69c3.007-8.702,9.339-14.082,19.938-14.082
		c10.768,0,17.092,5.38,20.095,14.082c1.265,3.955,1.904,9.335,1.904,24.69C356.447,259.315,355.807,264.854,354.542,268.81z"
      />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Progressive Web Apps",
      "Startup websites",
    ],
    "Cybersecurity & OSINT Services": [
      "OSINT (Open-Source Intelligence) investigations",
      "Network scanning & vulnerability assessment using Kali Linux tools (Nmap, Nikto)",
      "Security assessment & exploitation testing",
    ],
    "Analytics & SEO Optimization": [
      "SEO strategy & technical optimization",
      "Website performance & conversion tracking",
      "Data-driven insights & reporting",
      "AI-powered SEO tools & automation",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

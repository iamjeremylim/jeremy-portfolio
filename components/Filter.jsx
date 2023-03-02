import { useState } from "react";
import Projects from "./Projects";
import Skills from "./Skills";

const TABS = ["Projects", "Skills"];

export default function Filter() {
  const [currentTab, setCurrenTab] = useState("Projects");

  const handleTabs = (e) => {
    setCurrenTab(e.target.innerHTML);
  };

  return (
    <div className="filters container">
      <div className="filters__content">
        {TABS.map((tab, idx) => (
          <button
            className={`filters__button ${
              currentTab === tab && "filters__tab-active"
            }`}
            onClick={handleTabs}
            key={idx}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="filters__sections">
        {currentTab === "Projects" ? <Projects /> : <Skills />}
      </div>
    </div>
  );
}

import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { DiPython, DiDjango } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Django",
  "Python",
  "JavaScript",
  "JQuery",
  "HTML5",
  "CSS3",
  "SASS",
  "SQL",
  "PostgreSQL",
  "Deploy",
  "Render Hosting",
];

const labelsSecond = [
  "FastAPI",
  "Python",
  "RESTful APIs",
  "OpenAPI (Swagger)",
  "MongoDB",
  "SQLAlchemy",
  "Celery",
  "Redis",
  "Redis",
  "JWT",
  "Git",
  "GitHub",
  "Domain Integration",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            {React.createElement(DiDjango as any, { size: "3em" })}
            <h3>Full Stack Development with Django</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as Django and HTML/CSS/JS. I have a
              strong proficiency in the SDLC process and frontend + backend
              development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            {React.createElement(SiFastapi as any, { size: "3em" })}
            <h3>Software Automation with FastAPI</h3>
            <p>
              Create efficient software automation solutions with FastAPI,
              focusing on API development, workflow automation, and seamless
              system integration.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Web & Data Scraping with Selenium</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

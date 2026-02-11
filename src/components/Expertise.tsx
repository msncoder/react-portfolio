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
  "Celery",
  "Redis",
  "SQL",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Render Hosting",
  "Domain Integration",
];

const labelsSecond = [
  "FastAPI",
  "Python",
  "RESTful APIs",
  "OpenAPI (Swagger)",
  "MongoDB",
  "SQLAlchemy",
  "JWT",
  "Selenium WebDriver",
  "ChromeDriver",
  "GeckoDriver",
  "Pandas",
  "NumPy",
  "BeautifulSoup",
];

const labelsThird = [
  "OpenAI",
  "GPT",
  "Claude",
  "Open-Source LLMs",
  "LangChain",
  "CrewAI",
  "AutoGen",
  "FastAPI",
  "FAISS",
  "Pinecone",
  "Weaviate",
  "RAG Embeddings",
  "RAG Semantic Search",
  "Webhooks",
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
            <h3>Scraping Automation with FastAPI</h3>
            <p>
              Built FastAPI-powered web scraping systems to automate data
              collection, processing, and delivery through RESTful APIs,
              incorporating background tasks, scheduling, and database
              integration for optimized automation.
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
            <h3>Agentic AI Solutions</h3>
            <p>
              Develop autonomous Agentic AI solutions with LLMs, enabling
              intelligent agents to perform tool-assisted workflows, automate
              tasks, make decisions, and interact with real-time data for
              effective business problem-solving.
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

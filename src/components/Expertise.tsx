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
              Develop automated web scraping systems powered by FastAPI to
              collect, process, and serve data through secure RESTful APIs.
              Implement background tasks, scheduling, data storage, and seamless
              integration with external systems to deliver scalable and
              efficient data automation solutions.
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
              Design and develop Agentic AI systems that autonomously plan,
              reason, and execute tasks using large language models (LLMs).
              Build intelligent agents capable of tool usage, workflow
              automation, decision-making, and real-time data interaction to
              solve complex business problems efficiently.
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

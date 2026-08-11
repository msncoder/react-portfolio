import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Authentik Track And Trace
            </h4>
            <p>
              Develop Python backend applications and build Agentic AI, LLM-powered, and RAG-based systems, with a focus on business process automation and scalable software solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Agentic AI Trainer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SMIT Karachi, PK</h4>
            <p>
            Teaching FastAPI, LangChain, LangGraph, LangFlow, 
            and other Agentic AI technologies, with a focus on building AI-powered applications and multi-agent systems.
          </p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Instructor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Aptech Karachi, PK</h4>
            <p>
              Frontend Development, Backend Development, Provide Mentorship,
              Team Leading
            </p>
          </VerticalTimelineElement>
          
        
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

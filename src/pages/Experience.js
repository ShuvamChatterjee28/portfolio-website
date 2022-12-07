import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor = "#3a497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hindu Vidyapith, Kolkata, India
          </h3>
          <p> Higher Secondary (H.S.)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Techno India University, Kolkata, IN
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science & Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2019 - Aug 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Intern - Calcutta University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kolkata, IN
          </h4>
          <p>Performed a comparative analysis on multiple sentiment analysis datasets with applying SMOTE oversampling method to recreate samples of the minority class due to heavy data disproportion problem.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2019 - Apr 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Fellow - IISER Kolkata
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kolkata, IN
          </h4>
          <p>
          Worked on a Neural Network model for accurately detecting eye disease AMD with salt-and-paper noise and achieved an accuracy of 93.75%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2020 - Dec 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Q&A Expert (Computer Science Team) - CHEGG
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>
          <p>
          Helped more than 600+ students & cleared their doubts on fundamentals of Computer Science by answering 1000+ questions.

          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - LabVantage Solutions Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kolkata, IN
          </h4>
          <p>
            Currently working as lead in 2 projects, where developeing the entire backend and multiple scientific instrument interfacing drivers.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
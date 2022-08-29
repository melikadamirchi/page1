import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className="experience">
    <VerticalTimeline lineColor="#212529">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2015 - 2018"
        iconStyle={{ background: "black", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
           Sadooghi High School, Mathmatic, Tehran, Iran
        </h3>
        <p> High School Diploma</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2019 - 2022"
        iconStyle={{ background: "black", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          West-Tehran University, Computer Engineering, Tehran, Iran
        </h3>

        <p> Bachelor's Degree</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2022"
        iconStyle={{ background: "#7c4b4b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Teaching English 
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Ofogh Institute, Freelancer, Tehran
        </h4>
        <p>I am currently teaching.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 - present"
        iconStyle={{ background: "#7c4b4b", color: "#fff" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Front-End Developer 
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          
        </h4>
        <p>
          Working on projects by myself.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);
}

export default Experience
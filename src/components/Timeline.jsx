import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <timelineItem
            key={item.title}
            heading={item.title}
            text={item.date}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const timelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <h2>{heading}</h2>
    <p>{text}</p>
  </div>
);

export default Timeline;

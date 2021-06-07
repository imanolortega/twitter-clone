import React from "react";
import "./Widget.css";

const Widget = ({ trend, title, tweetsNumber }) => {
  return (
    <div className="widgets__widget">
      <div className="widgets__widgetLabel">
        <span>{trend}</span>
      </div>
      <div className="widgets__widgetTitle">
        <span>{title}</span>
      </div>
      <div className="widgets__widgetLabel">
        <span>{tweetsNumber} Tweets</span>
      </div>
    </div>
  );
};

export default Widget;

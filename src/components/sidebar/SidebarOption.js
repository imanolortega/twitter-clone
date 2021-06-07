import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ active, text, icon }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SidebarOption;

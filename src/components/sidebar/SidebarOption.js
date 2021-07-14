import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ active, text, icon, signOut }) => {
  return (
    <div
      onClick={signOut}
      className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default SidebarOption;

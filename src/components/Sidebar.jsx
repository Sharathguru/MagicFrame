import React from "react";
import "../css/Sidebar.css";

const menu = [
  { label: "Dimensions", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/ruler.png" },
  { label: "Frame", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/picture.png" },
  { label: "Finish", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/paint-palette.png" },
  { label: "Gods", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/om.png" },
  { label: "Accessories", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/box.png" },
];

const Sidebar = ({ selected, onSelect }) => (
  <aside className="sidebar">
    {menu.map((item, idx) => (
      <button
        key={item.label}
        className={`sidebar-btn${selected === idx ? " active" : ""}`}
        onClick={() => onSelect(idx)}
      >
        <img src={item.icon} alt={item.label} className="sidebar-icon" />
        <span>{item.label}</span>
      </button>
    ))}
  </aside>
);

export default Sidebar;
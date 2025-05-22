import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Sidebar.css";

const menu = [
  { label: "Dimensions", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/ruler.png", path: "/dimensions" },
  { label: "Frame", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/picture.png", path: "/frame" },
  { label: "Finish", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/paint-palette.png", path: "/finish" },
  { label: "Gods", icon: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg", path: "/gods" },
  { label: "Accessories", icon: "https://img.icons8.com/ios-filled/50/8b5cf6/box.png", path: "/accessories" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      {menu.map((item) => (
        <button
          key={item.label}
          className={`sidebar-btn${location.pathname === item.path ? " active" : ""}`}
          onClick={() => navigate(item.path)}
        >
          <img src={item.icon} alt={item.label} className="sidebar-icon" />
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
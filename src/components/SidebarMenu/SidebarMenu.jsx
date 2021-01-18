import React from "react";
import "../../sass/style.scss";

const SidebarMenu = () => {
  return (
    <div className="sidebar-wrapper">
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li>Home</li>
          <li>About Us</li>
          <li>Properties</li>
          <li>Agents</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;

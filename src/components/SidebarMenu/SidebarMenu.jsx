import React from "react";
import "../../sass/style.scss";

const SidebarMenu = () => {
  return (
    <div className="sidebar-wrapper">
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
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

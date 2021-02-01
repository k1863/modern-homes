import React from "react";
import "../../sass/style.scss";

const SelectComponent = () => {
  return (
    <div className="views-widget">
      <select
        id="edit-field-perspective-menu-tid"
        name="field_perspective_menu_tid"
        className="form-select"
      >
        <option value="1">Residential</option>{" "}
        <option value="2">Commercial</option>
        <option value="3">Industrial</option>
      </select>
    </div>
  );
};

export default SelectComponent;

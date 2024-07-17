import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Collapse } from "bootstrap";

import Checkbox from "./Chcekbox";
import Radio from "./Radio";
import Content from "./Contents";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`wrapper ${isExpanded ? "expanded" : ""}`}>
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt"></i>
          </button>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#status"
              aria-expanded="false"
              aria-controls="status"
            >
              <span>status</span>
            </a>
            <ul
              id="status"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Checkbox label={"Registered"} className="custom-formcheck" />
                <Checkbox label={"Pending"} className="custom-formcheck" />
                <Checkbox label={"Cancel"} className="custom-formcheck" />
                <Checkbox label={"Abandoned"} className="custom-formcheck" />
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#Sort"
              aria-expanded="false"
              aria-controls="Sort"
            >
              <span>Sort</span>
            </a>
            <ul
              id="Sort"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Radio label={"Relevance"} className="custom-formcheck" />
                <Radio label={"Wordmark (A-Z)"} className="custom-formcheck" />
                <Radio label={"Wordmark (Z-A)"} className="custom-formcheck" />
                <Radio label={"Class (0-9)"} className="custom-formcheck" />
                <Radio label={"Class (9-0)"} className="custom-formcheck" />
                <Radio label={"Serial (0-9)"} className="custom-formcheck" />
                <Radio label={"Serial (9-0)"} className="custom-formcheck" />
              </li>
            </ul>
          </li>

          <li className="sidebar-item">
            <a
              href="#"
              className="sidebar-link collapsed has-dropdown"
              data-bs-toggle="collapse"
              data-bs-target="#Configure"
              aria-expanded="false"
              aria-controls="Configure"
            >
              <span>Configure</span>
            </a>
            <ul
              id="Configure"
              className="sidebar-dropdown list-unstyled collapse"
              data-bs-parent="#sidebar"
            >
              <li className="sidebar-item">
                <Checkbox label={"Show Image"} className="custom-formcheck" />
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <Content />
    </div>
  );
};

export default Sidebar;

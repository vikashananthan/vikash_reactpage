import React from "react";
import "./Css/Layout.css"
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <nav>
        <ul className="nav-bar">
          <li >
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link"v  to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="nav-link"v  to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
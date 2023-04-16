import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <>
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a href="#!">Logo</a>
            </div>
            <nav>
              <div className="nav-mobile">
                <a id="nav-toggle" href="#!">
                  <span />
                </a>
              </div>
              <ul className="nav-list">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li></li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>

                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </>
    </div>
  );
}

export default Navbar;

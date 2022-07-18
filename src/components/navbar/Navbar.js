import React from 'react'
import './style.scss';

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
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            
          </li>
          <li>
            <a href="#!">Pricing</a>
          </li>
          <li>
            <a href="#!">Portfolio</a>
            <ul className="nav-dropdown">
              <li>
                <a href="#!">Web Design</a>
              </li>
              <li>
                <a href="#!">Web Development</a>
              </li>
              <li>
                <a href="#!">Graphic Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  
  
</>

    </div>
  )
}

export default Navbar
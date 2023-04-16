import React from 'react'
import "./about.css"

function about() {
  return (
    <div>
        <section className="about-us">
  <div className="about">
    {/*<img src="girl.png" class="pic">*/}
    <div className="text">
      <h2>About Us</h2>
      <h5>
        Front-end Developer &amp; <span>Designer</span>
      </h5>
      <p>
       We are a team of talented designers making websites with Bootstrap
      </p>
      <div className="data">
        <a href="#" className="hire">
          Hire Me
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default about
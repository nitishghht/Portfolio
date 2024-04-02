import React from "react";
import "../../Components/About/About.css";
import UIImage from "../../assets/ui-design.png";

const About = () => {
  return (
    <section id="about">
      <div className="title">
      
      </div>
     
      <center className="TagLine">
        <img src={UIImage} className="card-img-top ui-image" alt="uiimage" />
        <h1>UI Design</h1>
      </center>
      <div className="titlebars">
        <div className="card-body card-n">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Responsive Design</h5>
              <hr />
              <p className="card-text">
                Ability to design and develop responsive layouts that work
                seamlessly across various devices and screen sizes.
              </p>
              <a
                href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                className="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Color Theory</h5>
              <hr />
              <p className="card-text">
                Understanding of color theory to create visually appealing color
                schemes and maintain accessibility.
              </p>
              <a href="#" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Cross-Browser </h5>
              <hr />
              <p className="card-text">
                Ability to ensure that web applications work consistently across
                different browsers, resolving any compatibility issues.
              </p>
              <a
                href="https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables"
                className="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Animation</h5>
              <hr />
              <p class="card-text">
                Knowledge of CSS animations or JavaScript libraries for creating
                subtle and effective UI animations.
              </p>
              <a
                href="https://www.w3schools.com/css/css3_animations.asp"
                class="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Accessibility</h5>
              <hr />
              <p class="card-text">
                Understanding of accessibility principles and ensuring that
                interfaces are usable by individuals with disabilities
              </p>
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                class="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

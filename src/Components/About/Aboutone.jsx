import React from 'react';
import webigame from "../../assets/website-design.png";

const Aboutone = () => {
  return (
  <div>

    <center className="TagLine ">
        <img src={webigame} className="card-img-top ui-image" alt="uiimage" />
        <h1>Front-End Skills</h1>
      </center>
      <div className="titlebars tagbar">
        <div className="card-body card-n">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <hr />
              <p className="card-text">
              Markup language used to structure content on the web, defining elements such as headings, paragraphs, and links.
              </p>
              <a
                href="https://www.w3schools.com/html/default.asp"
                className="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <hr />
              <p className="card-text">
              Style sheet language that controls the presentation and layout of HTML documents, enhancing the visual appeal of web pages.
              </p>
              <a href="https://www.w3schools.com/css/" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <hr />
              <p className="card-text">
              A versatile scripting language that enables dynamic content, interactivity, and client-side functionality in web browsers.
              </p>
              <a
                href="https://www.w3schools.com/js/"
                className="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div>
          {/* <div className="card">
            <div className="card-body">
              <h5 className="card-title">Bootstrat</h5>
              <hr />
              <p className="card-text">
              A popular front-end framework that provides a set of pre-designed components and styles, facilitating responsive and modern web development.
              </p>
              <a
                href="https://react-bootstrap.netlify.app/docs/getting-started/introduction"
                className="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div> */}
          {/* <div className="card">
            <div className="card-body">
              <h5 className="card-title">JSON</h5>
              <hr />
              <p className="card-text">
              Lightweight data interchange format used to transmit and store data, commonly used with JavaScript for API communication.
              </p>
              <a
                href="https://www.w3schools.com/js/js_json_intro.asp"
                className="btn btn-primary"
              >
                Know More
              </a>
            </div>
          </div> */}
          <div class="card">
            <div className="card-body">
              <h5 className="card-title">React.js</h5>
              <hr />
              <p className="card-text">
              A declarative JavaScript library for building user interfaces, focusing on efficient updates and creating reusable UI components.
              </p>
              <a href="https://react.dev/" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 class="card-title">Redux</h5>
              <hr />
              <p className="card-text">
              A state management library for JavaScript applications, commonly used with React to manage the state of the application in a predictable way.
              </p>
              <a href="https://redux.js.org/" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <br/>
          
        </div>
      </div>
      </div>
  );
}

export default Aboutone;

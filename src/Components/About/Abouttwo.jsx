import React from "react";

const Abouttwo = () => {
  return (
    <div className="titlebars bars">
      <div className="card-body card-n">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">SQL</h5>
            <hr />
            <p className="card-text">
            A domain-specific language used for managing and manipulating relational databases, enabling tasks such as data retrieval, insertion, updating, and deletion.
            </p>
            <a
              href="https://www.ibm.com/docs/en/db2/11.5?topic=fundamentals-sql"
              className="btn btn-primary"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">SQLite</h5>
              <hr />
              <p className="card-text">
              A lightweight, serverless, self-contained, and cross-platform SQL database engine often used in embedded systems and mobile applications.
              </p>
              <a href="https://www.tutorialspoint.com/sqlite/index.htm" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Git</h5>
              <hr />
              <p className="card-text">
              A distributed version control system that tracks changes in source code during software development, facilitating collaboration among multiple developers and providing a history of code changes.
              </p>
              <a href="https://www.geeksforgeeks.org/git-tutorial/" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="card">
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
          </div> 
          <div className="card">
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
          </div>
          
      </div>
    </div>

  );
};

export default Abouttwo;

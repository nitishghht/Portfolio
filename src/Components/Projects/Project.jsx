import React from "react";
import "../Projects/Project.css";
import imageTwo from "../../assets/imageTwo.png";
import imageThree from "../../assets/imageThree.png";
import imageFour from "../../assets/imageFour.png";
import imageFive from "../../assets/imageFive.png";
import imageSIx from "../../assets/imageSix.png";
const Project = () => {
  return (
    <div>
      <section className="bio">
        <h2 className="tag">My Project</h2>
        <p className="text-one">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam impedit
          quasi qui perferendis nulla magnam, optio facere ipsa, ea eos atque
          sit itaque delectus error dignissimos asperiores ex pariatur quia
          ipsum eius sequi culpa magni hic? Obcaecati, veniam reprehenderit
          doloribus cumque voluptas aperiam voluptate unde.
        </p>
      </section>
      <div className="cardItem">
        <div className="card cardx" style={{ width: "18rem" }}>
          <img src={imageTwo} className="card-img-top cardImage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageThree} className="card-img-top cardImage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageFour} className="card-img-top cardImage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageFive} className="card-img-top cardImage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageSIx} className="card-img-top cardImage" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

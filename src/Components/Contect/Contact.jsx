import React, { useState } from "react";
import "../Contect/Contact.css";
import contact from "../../assets/contact-us.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      comment: ""
    });
  };

  return (
    <div>
      <div className="Contact">
        <h1 className="Heading">Contact Us</h1>
        <form className="mb-3 Form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control formone"
            id="name"
            name="name"
            placeholder="Name"
            aria-describedby="emailHelp"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            className="form-control formone"
            id="email"
            name="email"
            placeholder="Email"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="form-control fomrtwo"
            id="comment"
            name="comment"
            placeholder="Comment Here"
            aria-describedby="emailHelp"
            value={formData.comment}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-warning btnone">
            Submit
          </button>
        </form>
        <img src={contact} alt="Contact Image" className="ImageOne" />
      </div>
    </div>
  );
};

export default Contact;

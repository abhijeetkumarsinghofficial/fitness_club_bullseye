import React, { useState } from "react";
import './style.css';
const Reg = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: ""
  });

  const [registrations, setRegistrations] = useState([]);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setRegistrations([...registrations, formData]);
  };

  const { name, email, phoneNumber, address } = formData;

  return (
    <div className="form-container">
      <div className="card">
        <h2 className="card-title">Fitness Club Registration</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-field">
            
            <input
            placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <input
            placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <input
              placeholder="Phone Number"
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <input
            placeholder="Affress"
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="form-submit-button">
            Add Member
          </button>
        </form>
      </div>
      <RegistrationsList registrations={registrations} />
    </div>
  );
};

const RegistrationsList = ({ registrations }) => (
  <ul className="registrations-list">
    {registrations.map((registration, index) => (
      <li key={index}>
        <h3>{registration.name}</h3>
        <p>{registration.email}</p>
        <p>{registration.phoneNumber}</p>
        <p>{registration.address}</p>
      </li>
    ))}
  </ul>
);

export default Reg;

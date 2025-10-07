import React, { useState } from "react";

export default function RegistrationForm() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const handlechange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      setError("must enter all the fields");
      return;
    }
    if (!formdata.terms) {
      setError("accept the chech box");
      return;
    }
    setError("");
    alert("form is submitted successfully");

    console.log(formdata);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Registration form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="name"
          value={formdata.username}
          name="username"
          onChange={handlechange}
        />
        <input
          type="email"
          placeholder="email"
          value={formdata.email}
          name="email"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          value={formdata.password}
          name="password"
          onChange={handlechange}
        />
        <input
          type="checkbox"
          checked={formdata.terms}
          name="terms"
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

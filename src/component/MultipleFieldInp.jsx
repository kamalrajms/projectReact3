import React, { useState } from "react";

export default function MultipleFieldInp() {
  const [formData, setData] = useState({
    name: "kamal",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
    </div>
  );
}

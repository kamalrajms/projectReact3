import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <h2>About component</h2>
      {user.map((user) => (
        <li key={user.id}>
          <Link to={`/blogs/:${user.id}`}>name:{user.name}</Link>
        </li>
      ))}
    </div>
  );
}

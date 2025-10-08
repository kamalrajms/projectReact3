import React, { useState, useEffect } from "react";

export default function APIUseEffect() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>User list</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {user.map((user) => (
            <li key={user.id}>
              name:{user.name}--email:{user.email}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

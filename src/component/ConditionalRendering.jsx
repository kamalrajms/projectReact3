import React, { useState } from "react";

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? <p>Welcome Back</p> : <p>Please login..</p>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Sign out" : "sign in"}
      </button>
      {isLoggedIn && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          aliquid. Ratione totam iste officia dolores ad animi, excepturi culpa
          veniam!
        </p>
      )}
    </div>
  );
}

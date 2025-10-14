import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      Service component
      <nav>
        <Link to={""}>Web application</Link>
        <Link to={"appdevelopment"}>App application</Link>
      </nav>
      <Outlet />
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog detailes- {id}</h2>
    </div>
  );
}

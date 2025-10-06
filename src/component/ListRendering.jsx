import React from "react";

export default function ListRendering() {
  const fruits = [
    // "apple",
    // "Banana",
    // "mango",
    // "jbfwueo",
    // "pouewfuif",
    // "ieofheq",
  ];

  const user = [
    { id: 1, name: "raj" },
    { id: 2, name: "Ajjay" },
    { id: 3, name: "kumar" },
  ];
  return (
    <div>
      <h1>table of fruits</h1>
      {fruits.length > 0 ? (
        <ol>
          {fruits.map((ele, ind) => (
            <li key={ind}>{ele}</li>
          ))}
        </ol>
      ) : (
        <p>Nodata fount</p>
      )}

      <h1>Preson data</h1>
      <ol>
        {user.map((peron) => (
          <li key={peron.id}>{peron.name}</li>
        ))}
      </ol>
    </div>
  );
}

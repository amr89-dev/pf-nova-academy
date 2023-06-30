import React, { useState } from "react";

export default function FormCourse() {
  const [module, setModule] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe el nombre del curso"
        onChange={(e) => setModule(e.target.value)}
      />
      {/* {module.map((e, i) => {
        return (
          <div key={i}>
            <h1>{e.name}</h1>
            <h2>{e.apellido}</h2>
          </div>
        );
      })} */}
      <button onClick={()=> alert(module)}>Click</button>
    </div>
  );
}

import React, { useState } from "react";
import FormCourse from "./Form-Create";

export default function CreateCourse() {
  const [modules, setModules] = useState(3);

  const renderModules = () => {
    return Array.from({ length: modules }, (_, index) => (
      <FormCourse key={index} />
    ));
  };

  const addModule = () => {
    setModules(modules + 1);
  };

  const deleteModule = () => {
    if(modules === 1) return
    setModules(modules - 1);
  };

  return (
    <div>
      {renderModules()}
      <button onClick={addModule}>Agregar Módulo</button>
      <br />
      <button onClick={deleteModule}>Eliminar Módulo</button>
    </div>
  );
}


      {/* <span>Name of Course:</span>
      <input
        type="text"
        placeholder="Escribe el nombre del curso"
        // onChange={(e) => setModule(e.target.value)}
      />

      <span>Name of Course:</span>
      <input
        type="text"
        placeholder="Descripcion"
        // onChange={(e) => setModule(e.target.value)}
      />

      <span>Name of Course:</span>
      <input
        type="text"
        placeholder="Price"
        // onChange={(e) => setModule(e.target.value)}
      /> */}


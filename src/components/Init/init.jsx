import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer/Index";

export default function Init() {
  const [nombre, setNombre] = useState("");
  const handleChangeInput = (e) => {
    setNombre(e.target.value);
  };
  return (
    <>
      <div>
        <Header nombre="Guillermo" apellido="Tapia" dni="dni1" />
        <h1>{nombre}</h1>
        <input type="text" value={nombre} onChange={handleChangeInput} />
        <Header dni="dni2" />
        <Footer cell="cell1" direccion="dir1" />
      </div>
    </>
  );
}

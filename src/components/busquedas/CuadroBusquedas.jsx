import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const CuadroBusquedas = ({
  textoBusqueda,
  manejarCambioBusqueda,
  placeholder = "Buscar por nombre o descripción..."
}) => {
  return (
    <InputGroup style={{ width: "100%" }}>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={textoBusqueda}
        onChange={manejarCambioBusqueda}
      />
    </InputGroup>
  );
};

export default CuadroBusquedas;
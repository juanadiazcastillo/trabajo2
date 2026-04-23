import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { Row, Col } from "react-bootstrap";

const Paginacion = ({
  registrosPorPagina,
  totalRegistros,
  paginaActual,
  establecerPaginaActual,
}) => {
  const totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);

  const cambiarPagina = (numeroPagina) => {
    if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
      establecerPaginaActual(numeroPagina);
    }
  };

  let items = [];

  for (let number = 1; number <= totalPaginas; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === paginaActual}
        onClick={() => cambiarPagina(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Row className="mt-3">
      <Col className="d-flex justify-content-center">
        <Pagination>{items}</Pagination>
      </Col>
    </Row>
  );
};

export default Paginacion;
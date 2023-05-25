import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, FloatingLabel, Col, Row } from "react-bootstrap";
// import axios from "axios";

export default function Herd() {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Registrar lote</h1>
      <Form className="container">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Vendedor"
              className="mb-3"
            >
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Escritorio"
              className="mb-3"
            >
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Cantidad"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Nombre" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Categoría"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Apellido" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Raza"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Apellido" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Peso estimado"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Nombre" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Precio base"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Apellido" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Clase"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Dirección" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Estado"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Paraje" />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel
          controlId="floatingInput"
          label="Comentarios"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Teléfono" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Video" className="mb-3">
          <Form.Control type="number" placeholder="Teléfono" />
        </FloatingLabel>

        <Button variant="primary" type="submit" className="mb-3">
          Registrar Lote
        </Button>
      </Form>
    </>
  );
}

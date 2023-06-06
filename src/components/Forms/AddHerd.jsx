import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, FloatingLabel, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

export default function AddHerd() {
  const categories = [
    "Terneros",
    "Terneras",
    "Novillos",
    "Vaquillonas",
    "Vaquillonas preñadas",
    "Vaquillonas próximas",
    "Vaquillonas en producción",
    "Vacas",
    "Vacas preñadas",
    "Vacas próximas",
    "Vacas en producción",
    "Vacas de invernada",
    "Toro",
    "Caballo",
    "Yegua",
    "Corederos/as",
    "Borregos/as",
    "Ovejas",
    "Carneros",
  ];
  const breeds = ["Holando", "Angus", "Jersey", "Hereford", "Cruza", "Kiwi"];
  const [auctioneers, setAuctioneers] = useState([]);
  const [users, setUsers] = useState([]);

  // Llamada para traer escritorios y users
  useEffect(() => {
    const getAuctioneers = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/auctioneers`,
      });
      setAuctioneers(response.data);
    };
    getAuctioneers();

    const getUsers = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/users`,
      });
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0e4056",
    },
    "& .MuiRating-iconHover": {
      color: "#bfc8c9",
    },
  });

  return (
    <>
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
                {users.map((user) => {
                  return (
                    <option>
                      {user.lastname}, {user.firstname}
                    </option>
                  );
                })}
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
                {auctioneers.map((auctioneer) => {
                  return (
                    <option key={auctioneer.id} value={auctioneer.id}>
                      {auctioneer.name}
                    </option>
                  );
                })}
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
              <Form.Control type="number" placeholder="Nombre" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Categoría"
              className="mb-3"
            >
              <Form.Select aria-label="Default select example">
                <option></option>
                {categories.map((category) => {
                  return <option>{category}</option>;
                })}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Raza"
              className="mb-3"
            >
              <Form.Select aria-label="Default select example">
                <option></option>
                {breeds.map((breed) => {
                  return <option>{breed}</option>;
                })}
              </Form.Select>
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
            <div className="class-type d-flex">
              <p>Clase</p>
              <StyledRating
                name="customized-color"
                defaultValue={0}
                precision={1}
                icon={<SquareRoundedIcon fontSize="inherit" />}
                emptyIcon={<CropSquareRoundedIcon fontSize="inherit" />}
              />
            </div>
          </Col>
          <Col>
            <div className="status d-flex">
              <p>Estado</p>
              <StyledRating
                name="customized-color"
                defaultValue={0}
                precision={1}
                icon={<SquareRoundedIcon fontSize="inherit" />}
                emptyIcon={<CropSquareRoundedIcon fontSize="inherit" />}
              />
            </div>
          </Col>
        </Row>

        <FloatingLabel
          controlId="floatingInput"
          label="Descripción"
          className="mb-3"
        >
          <Form.Control type="textarea" placeholder="Descripción" />
        </FloatingLabel>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Inspección"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="Teléfono" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Certificador"
              className="mb-3"
            >
              <Form.Control type="number" placeholder="Teléfono" />
            </FloatingLabel>
          </Col>
        </Row>

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

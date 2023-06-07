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
  const [selectedVendedor, setSelectedVendedor] = useState();
  const [selectedEscritorio, setSelectedEscritorio] = useState();
  const [selectedCantidad, setSelectedCantidad] = useState();
  const [selectedCategoria, setSelectedCategoria] = useState();
  const [selectedRaza, setSelectedRaza] = useState();
  const [selectedPeso, setSelectedPeso] = useState();
  const [selectedPrecio, setSelectedPrecio] = useState();
  const [selectedClase, setSelectedClase] = useState();
  const [selectedDescripcion, setSelectedDescripcion] = useState();
  const [selectedInspeccion, setSelectedEstado] = useState();
  const [selectedEstado, setSelectedInspeccion] = useState();
  const [selectedCertificador, setSelectedCertificador] = useState();

  const [auctioneers, setAuctioneers] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [breed, setBreed] = useState([]);

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

  // Llamada para traer categorias
  useEffect(() => {
    const getCategorias = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/category`,
      });
      setCategories(response.data);
    };
    getCategorias();
  }, []);
  // Llamada para traer categorias
  useEffect(() => {
    const getBreed = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/breed`,
      });
      setBreed(response.data);
    };
    getBreed();
  }, []);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0e4056",
    },
    "& .MuiRating-iconHover": {
      color: "#bfc8c9",
    },
  });

  const handleNewLote = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("vendedor", selectedVendedor);
    formData.append("escritorio", selectedEscritorio);
    formData.append("cantidad", selectedCantidad);
    formData.append("categoria", selectedCategoria);
    formData.append("raza", selectedRaza);
    formData.append("peso", selectedPeso);
    formData.append("precio", selectedPrecio);
    formData.append("clase", selectedClase);
    formData.append("estado", selectedEstado);
    formData.append("descripcion", selectedDescripcion);
    formData.append("inspeccion", selectedInspeccion);
    formData.append("certificador", selectedCertificador);

    const response = await axios({
      url: "http://localhost:8000/catalogue",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Respuesta: ", response.data);
    /* response.data.message
      ? notifySuccess(response.data.message)
      : notifyError(response.data.error);

    navigate(-1); */
  };

  return (
    <>
      <Link to="/">Home</Link>
      <h1>Registrar lote</h1>
      <Form className="container" onSubmit={handleNewLote}>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Vendedor"
              className="mb-3"
            >
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setSelectedVendedor(event.target.value)}
              >
                <option value="">Selecciona Vendedor..</option>
                {users.map((user) => {
                  return (
                    <option value={user.id}>
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
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setSelectedEscritorio(event.target.value)}
              >
                <option value="">Selecciona Escritorio..</option>
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
              <Form.Control
                type="number"
                placeholder="Nombre"
                onChange={(event) => setSelectedCantidad(event.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Categoría"
              className="mb-3"
            >
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setSelectedCategoria(event.target.value)}
              >
                <option value="">Selecciona Categoria..</option>
                {categories &&
                  categories.map((category) => {
                    return <option value={category.id}>{category.name}</option>;
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
              <Form.Select
                aria-label="Default select example"
                onChange={(event) => setSelectedRaza(event.target.value)}
              >
                <option value="">Selecciona Raza..</option>
                {breed &&
                  breed.map((breed) => {
                    return <option value={breed.id}>{breed.name}</option>;
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
              <Form.Control
                type="text"
                placeholder="Nombre"
                onChange={(event) => setSelectedPeso(event.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Precio base"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Apellido"
                onChange={(event) => setSelectedPrecio(event.target.value)}
              />
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
                onChange={(event) => setSelectedClase(event.target.value)}
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
                onChange={(event) => setSelectedEstado(event.target.value)}
              />
            </div>
          </Col>
        </Row>

        <FloatingLabel
          controlId="floatingInput"
          label="Descripción"
          className="mb-3"
        >
          <Form.Control
            type="textarea"
            placeholder="Descripción"
            onChange={(event) => setSelectedDescripcion(event.target.value)}
          />
        </FloatingLabel>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Inspección"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Teléfono"
                onChange={(event) => setSelectedInspeccion(event.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Certificador"
              className="mb-3"
            >
              <Form.Control
                type="number"
                placeholder="Teléfono"
                onChange={(event) =>
                  setSelectedCertificador(event.target.value)
                }
              />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="floatingInput" label="Video" className="mb-3">
          <Form.Control type="file" />
        </FloatingLabel>

        <Button variant="primary" type="submit" className="mb-3">
          Registrar Lote
        </Button>
      </Form>
    </>
  );
}

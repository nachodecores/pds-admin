import { Link, useLocation } from "react-router-dom";
import { Form, Button, FloatingLabel, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

export default function EditHeard() {
  const location = useLocation();
  const { state } = location;

  const [category_herd, setcategory_herd] = useState();
  const [breeds, setBreeds] = useState();
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

  // Llamada para traer category_herds
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/category`,
      });
      setcategory_herd(response.data);
    };

    getCategories();
  }, []);
  //Traer los Breed

  useEffect(() => {
    const getBreeds = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/breed`,
      });
      setBreeds(response.data);
    };
    getBreeds();
  }, []);
  console.log("User: ", state.herd.userId);
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
      <Link to="/">Home</Link>
      <h1>Editar Lote</h1>
      <Form className="container">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Vendedor"
              className="mb-3"
            >
              <Form.Select
                aria-label="Default select example"
                value={state.herd.userId}
              >
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
                value={state.herd.auctioneerId}
              >
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
              <Form.Control
                type="number"
                placeholder="Nombre"
                value={state.herd.quantity}
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
                value={state.herd.categoryHerdId}
              >
                {category_herd &&
                  category_herd.map((category) => {
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
                value={state.herd.breedId}
              >
                {breeds &&
                  breeds.map((breed) => {
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
                value={state.herd.weight}
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
                value={state.herd.originalPrice}
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
          <Form.Control
            type="textarea"
            placeholder="Descripción"
            value={state.herd.description}
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
                value={state.herd.inspection}
              />
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

import { useState, useEffect } from "react";
import "../Lote/Lote.css";
import { Table } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import "../Dashboard/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="head-title left">
        <h1>Remate #14</h1>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx"></i>
          <span className="text">
            <h3>US$ 2.1</h3>
            <p>Terneros raza carne</p>
          </span>
        </li>
        <li>
          <i className="bx"></i>
          <span className="text">
            <h3>90 %</h3>
            <p>Lotes vendidos</p>
          </span>
        </li>
        <li>
          <i className="bx"></i>
          <span className="text">
            <h3>16</h3>
            <p>Lotes preofertados</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head d-flex justify-content-between">
            <h3>Catálogo</h3>
            <Link to={"/addherd"}>
              <button className="btn btn-warning rounded-pill m-2  ">
                Nuevo Lote
              </button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Lote</th>
                <th>Vendedor</th>
                <th>Cantidad</th>
                <th>Categoría</th>
                <th>Raza</th>
                <th>P.Base</th>
                <th>P.Venta</th>
                <th>Status</th>
                <th>Escritorio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11</td>
                <td>John Doe</td>
                <td>43</td>
                <td>Vaquillonas</td>
                <td>Holando</td>
                <td>1.85</td>
                <td>2.15</td>
                <td>
                  <span className="status completed">Vendido</span>
                </td>
                <td>JC Ramón</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

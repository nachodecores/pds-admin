import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import "../Dashboard/Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      duration: 3000,
      icon: "✅",
      style: {
        background: "black",
        color: "white",
      },
    });
  const notifyCancel = () =>
    toast.error("Action Cancel for User", {
      position: "bottom-right",
      duration: 3000,
      icon: "❌",
      style: {
        background: "black",
        color: "white",
      },
    });

  const [listHerds, setListHerds] = useState();
  const handleEdit = (herd) => {
    Swal.fire({
      title: "Do you Want to Edit this Lote?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        navigate("/edithead", { state: { herd } });
      } else if (result.isDenied) {
        notifyCancel();
      }
    });
  };
  const handleRemove = (herd) => {
    Swal.fire({
      title: "Do you Want to Delete this Lote?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios({
          url: `http://localhost:8000/catalogue/${herd}`,
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        notifySuccess(response.data.message);
      } else if (result.isDenied) {
        notifyCancel();
      }
    });
  };

  useEffect(() => {
    const getHerds = async () => {
      const response = await axios({
        url: `http://localhost:8000/catalogue`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      setListHerds(response.data);
    };
    getHerds();
  }, []);

  return (
    <>
      <div className="head-title left">
        <h1>Remate #14</h1>
      </div>

      <ul className="box-info">
        <li>
          <span>
            <p>Terneros raza carne</p>
            <h3>US$ 2.1</h3>
          </span>
        </li>
        <li>
          <span>
            <p>Lotes vendidos</p>
            <h3>90 %</h3>
          </span>
        </li>
        <li>
          <span>
            <p>Lotes preofertados</p>
            <h3>16</h3>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head d-flex justify-content-between">
            <h3>Catálogo</h3>
            <Link to={"/addherd"}>
              <button className="btn btn-warning rounded-pill m-2">
                Nuevo Lote
              </button>
            </Link>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Breed</th>
                <th>User</th>
                <th>classType</th>
                <th>State</th>
                <th>Original Price</th>
                <th>PreBid Price</th>
                <th>Final Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listHerds &&
                listHerds.map((herd) => (
                  <tr key={herd.id}>
                    <td>{herd.id}</td>
                    <td>{herd.quantity}</td>
                    <td>{herd.categoryHerdId}</td>
                    <td>{herd.breedId}</td>
                    <td>{herd.userId}</td>
                    <td>{herd.classType}</td>
                    <td>{herd.state}</td>
                    <td>${herd.originalPrice}</td>
                    <td>${herd.preBidPrice}</td>
                    <td>${herd.finalPrice}</td>
                    <td>
                      <span className="status completed">Vendido</span>
                    </td>
                    <td className="d-flex justify-content-around">
                      <AiOutlineEdit
                        color="orange"
                        cursor="pointer"
                        onClick={() => handleEdit(herd)}
                      />
                      <BsTrash3Fill
                        color="red"
                        cursor="pointer"
                        onClick={() => handleRemove(herd.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

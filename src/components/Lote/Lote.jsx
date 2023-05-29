import { useState, useEffect } from "react";
import "../Lote/Lote.css";
import { Table } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Lote = () => {
  const notifySuccess = (message) =>
    toast.success(message, {
      position: "bottom-right",
      duration: 3000,
      icon: "✅",
    });
  const notifyCancel = () =>
    toast.error("Action Cancel for User", {
      position: "bottom-right",
      duration: 3000,
      icon: "❌",
    });

  const [listHerds, setListHerds] = useState();
  const handleEdit = () => {};
  const handleRemove = (herd) => {
    console.log("parameter: ", herd);
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Original Price</th>
          <th>Breed</th>
          <th>Quantity</th>
          <th>classType</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listHerds &&
          listHerds.map((herd) => (
            <tr key={herd.id}>
              <td>{herd.id}</td>
              <td>{herd.category}</td>
              <td>${herd.originalPrice}</td>
              <td>{herd.breed}</td>
              <td>{herd.quantity}</td>
              <td>{herd.classType}</td>
              <td className="d-flex justify-content-between">
                <AiOutlineEdit
                  color="orange"
                  cursor="pointer"
                  onClick={handleEdit}
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
  );
};

export default Lote;

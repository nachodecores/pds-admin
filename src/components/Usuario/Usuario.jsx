import Table from "react-bootstrap/Table";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";
import "../Usuario/Usuario.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Usuario = () => {
  const [listUsers, setListUsers] = useState();
  const handleEdit = () => {
    console.log("edit..");
  };
  const handleRemove = () => {
    console.log("remove..");
  };
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        url: `http://localhost:8000/users`,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      setListUsers(response.data);
    };

    getUsers();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Departament</th>
          <th>Password</th>
          <th>Company</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {listUsers &&
          listUsers.map((user) => (
            <tr key={user.id}>
              <td>Vacio</td>
              <td>
                {user.firstname}
                {user.lastname}
              </td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.password}</td>
              <td>{user.company}</td>
              <td className="d-flex justify-content-around align-items-center">
                <AiOutlineEdit
                  color="orange"
                  cursor="pointer"
                  onClick={handleEdit}
                />
                <BsTrash3Fill
                  color="red"
                  cursor="pointer"
                  onClick={handleRemove}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Usuario;

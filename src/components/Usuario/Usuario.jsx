import Table from "react-bootstrap/Table";
import "../Usuario/Usuario.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Usuario = () => {
  const [listUsers, setListUsers] = useState();
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
      console.log("Response: ", response.data);
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
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Usuario;

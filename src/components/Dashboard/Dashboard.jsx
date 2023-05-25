import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="head-title left">
        <h1>Remate #14</h1>
      </div>

      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check"></i>
          <span className="text">
            <h3>US$ 2.1</h3>
            <p>Terneros raza carne</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group"></i>
          <span className="text">
            <h3>90 %</h3>
            <p>Lotes vendidos</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle"></i>
          <span className="text">
            <h3>16</h3>
            <p>Lotes preofertados</p>
          </span>
        </li>
      </ul>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Catálogo</h3>
            <i className="bx bx-search"></i>
            <i className="bx bx-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>Lote</th>
                <th>Vendedor</th>
                <th>Cantidad</th>
                <th>Categoría</th>
                <th>Raza</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="img/people.png" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Vendido</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

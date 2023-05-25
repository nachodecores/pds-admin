import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div class="head-title left">
        <h1>Remate #14</h1>
      </div>

      <ul class="box-info">
        <li>
          <i class="bx bxs-calendar-check"></i>
          <span class="text">
            <h3>US$ 2.1</h3>
            <p>Terneros raza carne</p>
          </span>
        </li>
        <li>
          <i class="bx bxs-group"></i>
          <span class="text">
            <h3>90 %</h3>
            <p>Lotes vendidos</p>
          </span>
        </li>
        <li>
          <i class="bx bxs-dollar-circle"></i>
          <span class="text">
            <h3>16</h3>
            <p>Lotes preofertados</p>
          </span>
        </li>
      </ul>

      <div class="table-data">
        <div class="order">
          <div class="head">
            <h3>Catálogo</h3>
            <i class="bx bx-search"></i>
            <i class="bx bx-filter"></i>
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
                  <span class="status completed">Vendido</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" alt="" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span class="status process">Process</span>
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

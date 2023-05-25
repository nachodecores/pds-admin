import { Link, Outlet } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
  return (
    <>
      <section id="sidebar">
        <Link to={"/"} className="profile">
          <img src="./img/logo-pds-entero.svg" alt="" />
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link href="#">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Remate #14</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <Link to={"/lote"}>
              <i className="bx bxs-cog"></i>
              <span className="text">Lote</span>
            </Link>
          </li>
          <li>
            <Link to={"/usuario"}>
              <i className="bx bxs-cog"></i>
              <span className="text">Usuario</span>
            </Link>
          </li>
          <li>
            <Link to={"/remate"}>
              <i className="bx bxs-cog"></i>
              <span className="text">Remate</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <Link href="#" className="notification">
            <i className="bx bxs-bell"></i>
            <span className="num">8</span>
          </Link>
          <Link href="#" className="profile">
            <img src="img/people.png" alt="" />
          </Link>
        </nav>

        <main>
          <div class="head-title left">
            <h1>Remate #14</h1>
          </div>

          <ul class="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>432</h3>
                <p>Animales inscriptos</p>
              </span>
            </li>
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
                      <p>21</p>
                    </td>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status completed">Vendido</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>21</p>
                    </td>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span class="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>21</p>
                    </td>
                    <td>
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
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Panel;

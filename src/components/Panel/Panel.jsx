import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
  return (
    <>
      <section id="sidebar">
        <Link href="#" class="profile">
          <img src="./img/logo-pds-entero.svg" alt="" />
        </Link>
        <ul class="side-menu top">
          <li class="active">
            <Link href="#">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Remate #14</span>
            </Link>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <Link href="#">
              <i class="bx bxs-cog"></i>
              <span class="text">Lotes</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="bx bxs-cog"></i>
              <span class="text">Usuarios</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="bx bxs-cog"></i>
              <span class="text">Remates</span>
            </Link>
          </li>
          <li>
            <Link href="#" class="logout">
              <i class="bx bxs-log-out-circle"></i>
              <span class="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <input type="checkbox" id="switch-mode" hidden />
          <label for="switch-mode" class="switch-mode"></label>
          <Link href="#" class="notification">
            <i class="bx bxs-bell"></i>
            <span class="num">8</span>
          </Link>
          <Link href="#" class="profile">
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
                    <th>User</th>
                    <th>Date Order</th>
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
        </main>
      </section>
    </>
  );
};

export default Panel;

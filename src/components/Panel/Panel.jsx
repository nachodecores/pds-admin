import { Link, Outlet } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
  return (
    <>
      <section id="sidebar">
        <Link to={"/"} class="profile">
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
            <Link to={"/lote"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Lote</span>
            </Link>
          </li>
          <li>
            <Link to={"/usuario"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Usuario</span>
            </Link>
          </li>
          <li>
            <Link to={"/remate"}>
              <i class="bx bxs-cog"></i>
              <span class="text">Remate</span>
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
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Panel;

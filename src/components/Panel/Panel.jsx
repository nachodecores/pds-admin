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
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Panel;

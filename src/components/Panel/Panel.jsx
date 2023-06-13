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
            <Link to={"/remate"}>
              <i className="bx bxs-dashboard"></i>
              <span className="text">Remates</span>
            </Link>
          </li>
          <li>
            <Link to={"/usuario"}>
              <i className="bx bxs-cog"></i>
              <span className="text">Usuarios</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
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

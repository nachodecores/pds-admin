import { Link } from "react-router-dom";
import "./Panel.css";

const Panel = () => {
  return (
    <>
      <section id="sidebar">
        <Link href="#" class="brand">
          <i class="bx bxs-smile"></i>
          <span class="text">AdminHub</span>
        </Link>
        <ul class="side-menu top">
          <li class="active">
            <Link href="#">
              <i class="bx bxs-dashboard"></i>
              <span class="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="bx bxs-shopping-bag-alt"></i>
              <span class="text">My Store</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="bx bxs-doughnut-chart"></i>
              <span class="text">Analytics</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="bx bxs-message-dots"></i>
              <span class="text">Message</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i class="bx bxs-group"></i>
              <span class="text">Team</span>
            </Link>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <Link href="#">
              <i class="bx bxs-cog"></i>
              <span class="text">Settings</span>
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
          <i class="bx bx-menu"></i>
          <Link href="#" class="nav-link">
            Categories
          </Link>
          <form action="#">
            <div class="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" class="search-btn">
                <i class="bx bx-search"></i>
              </button>
            </div>
          </form>
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
          <div class="head-title">
            <div class="left">
              <h1>Dashboard</h1>
              <ul class="breadcrumb">
                <li>
                  <Link href="#">Dashboard</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                </li>
                <li>
                  <Link class="active" href="#">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="#" class="btn-download">
              <i class="bx bxs-cloud-download"></i>
              <span class="text">Download PDF</span>
            </Link>
          </div>

          <ul class="box-info">
            <li>
              <i class="bx bxs-calendar-check"></i>
              <span class="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-group"></i>
              <span class="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i class="bx bxs-dollar-circle"></i>
              <span class="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div class="table-data">
            <div class="order">
              <div class="head">
                <h3>Recent Orders</h3>
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
                      <span class="status completed">Completed</span>
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
                      <span class="status completed">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="todo">
              <div class="head">
                <h3>Todos</h3>
                <i class="bx bx-plus"></i>
                <i class="bx bx-filter"></i>
              </div>
              <ul class="todo-list">
                <li class="completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
                <li class="not-completed">
                  <p>Todo List</p>
                  <i class="bx bx-dots-vertical-rounded"></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Panel;

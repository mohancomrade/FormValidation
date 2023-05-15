import { Outlet, Link } from "react-router-dom";

function Layout () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Forms</Link>
          </li>
          <li>
            <Link to="/result">ResultPage</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
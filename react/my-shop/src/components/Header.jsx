import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
    </nav>
  );
}

export default Header;

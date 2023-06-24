import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Nova Academy</NavLink>
        </li>
        <li>
          <NavLink to="/login">Iniciar Sesión</NavLink>
        </li>
        <li>
          <NavLink to="/category1">Categoria Curso 1</NavLink>
        </li>
        <li>
          <NavLink to="/category2">Categoria Curso 2</NavLink>
        </li>
        <li>
          <NavLink to="/category3">Categoria Curso 3</NavLink>
        </li>
        <li>
          <NavLink to="/category4">Categoria Curso 4</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/account">👤</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">🛒</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

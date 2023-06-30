import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const courses = useSelector((state) => state).shoppingCartReducer.cart;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [{ to: "/courses", name: "Cursos" }];

  const activeStyle = "font-bold";
  return (
    <header className="bg-primary-blue w-full h-auto flex items-center justify-between  px-4 py-1">
      <div className="-mr-2  flex basis-1/3 md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <NavLink to="/home">
        <img src={logo} alt="logo" className="w-24 h-auto basis-1/3" />
      </NavLink>
      <div>
        <nav
          className={`bg-primary-purple basis-1/3 fixed z-10 top-16 left-0 p-4 w-1/2  transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:w-auto md:p-0 md:translate-x-0`}
        >
          <ul className="flex flex-col md:flex-row">
            {links.map((el) => (
              <NavLink
                key={el.name}
                to={el.to}
                className={({ isActive }) => (isActive ? activeStyle : "")}
                onClick={toggleMenu}
              >
                {el.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <NavLink to="/create">CREAR CURSO</NavLink>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/login">Iniciar Sesion</NavLink>
          </li>
          <li>
            <NavLink to="/account">👤</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">🛒 {courses.length}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

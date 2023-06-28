import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark-gray w-full py-8">
      <nav className="flex justify-center mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/quienes-somos"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Quienes Somos
            </Link>
          </li>
          <li>
            <Link
              to="/contacto"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to="/newsletter"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
      <h4 className="text-white text-center mb-4">
        Seguinos también en nuestras redes sociales
      </h4>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
      <div className="text-center">
        <span className="text-gray-500 text-sm">
          © 2023 Nova Academy - All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;

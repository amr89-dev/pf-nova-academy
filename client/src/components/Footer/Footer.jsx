import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

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
        <Button
          as="a"
          href="https://twitter.com/"
          target="_blank"
          circular
          icon="twitter"
          className="bg-twitter hover:bg-gray-700 text-white transition duration-300"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M22.46 5.18c-.81.36-1.68.6-2.58.71a4.52 4.52 0 0 0 1.98-2.5 9.05 9.05 0 0 1-2.87 1.1 4.53 4.53 0 0 0-7.73 4.13 12.86 12.86 0 0 1-9.33-4.72 4.51 4.51 0 0 0 1.4 6.01 4.5 4.5 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.42c-.75.2-1.54.24-2.3.09a4.52 4.52 0 0 0 4.22 3.13A9.05 9.05 0 0 1 2.32 18c-.14 0-.28 0-.42-.01a12.8 12.8 0 0 0 6.89 2c8.3 0 12.84-6.88 12.84-12.84l-.01-.58c.89-.64 1.67-1.44 2.28-2.35z" />
          </svg>
        </Button>
        <Button
          as="a"
          href="https://facebook.com/"
          target="_blank"
          circular
          icon="facebook"
          className="bg-facebook hover:bg-gray-700 text-white transition duration-300"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M20.43 0H3.57A3.57 3.57 0 0 0 0 3.57v16.86A3.57 3.57 0 0 0 3.57 24h8.86v-9.29H9.14v-3.62h3.29V8.57c0-3.27 1.99-5.04 4.9-5.04a27.58 27.58 0 0 1 2.88.14v3.4l-1.98.01c-1.56 0-1.87.74-1.87 1.82v2.39h3.73l-.49 3.62h-3.24v9.29h6.29a3.57 3.57 0 0 0 3.57-3.57V3.57A3.57 3.57 0 0 0 20.43 0z" />
          </svg>
        </Button>

        <Button
          as="a"
          href="https://instagram.com/"
          target="_blank"
          circular
          icon="instagram"
          className="bg-instagram hover:bg-gray-700 text-white transition duration-300"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.5 0h-11A6.51 6.51 0 0 0 0 6.5v11A6.51 6.51 0 0 0 6.5 24h11A6.51 6.51 0 0 0 24 17.5v-11A6.51 6.51 0 0 0 17.5 0zm4.08 17.5a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm-6.16-9.85a3.1 3.1 0 1 1 3.1-3.1 3.1 3.1 0 0 1-3.1 3.1zm6.3 2.24a1.24 1.24 0 1 1 1.24-1.24 1.24 1.24 0 0 1-1.24 1.24zm-10.81 4a2.17 2.17 0 1 1 2.17-2.17 2.17 2.17 0 0 1-2.17 2.17z" />
          </svg>
        </Button>

        <Button
          as="a"
          href="https://www.youtube.com/channel/"
          target="_blank"
          circular
          icon="youtube"
          className="bg-youtube hover:bg-gray-700 text-white transition duration-300"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M21.5 7.5l-9-5.25c-1.42-.83-3.5-.83-4.92 0L2.5 7.5c-1.42.83-2.5 3-2.5 4.5s1.08 3.67 2.5 4.5l9 5.25c1.42.83 3.5.83 4.92 0l9-5.25c1.42-.83 2.5-3 2.5-4.5s-1.08-3.67-2.5-4.5zm-9.5 7.5V9l6 3.75-6 3.75z" />
          </svg>
        </Button>
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

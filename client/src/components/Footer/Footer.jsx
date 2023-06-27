import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-primary-blue fixed bottom-0 w-full h-max">
      <div className="p-2  h-auto text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <ul>
                <li className="pb-4 relative">
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-4 relative">
                  <Link to="/quienes-somos">¿Quienes somos?</Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <ul>
                <li className="pb-4 relative">
                  <Link to="/condiciones">Condiciones</Link>
                </li>
                <li className="pb-4 relative">
                  <Link to="/politica-de-privacidad">
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <span className="mr-2">Unete a nuestro Boletin Informativo</span>

              <form className="mt-5">
                <input type="text" name="" id="" />
                <button className="ml-2">Suscribete</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

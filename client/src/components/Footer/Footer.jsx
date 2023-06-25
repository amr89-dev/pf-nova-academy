const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4>Nova ACADEMY</h4>
              <p>
                Argentina/Venezuela <br />
                <strong>phone:</strong> +59 9 0351 153 2718 <br />
                <strong>Email:</strong> info@novaacademy.com
              </p>
            </div>
            <div className="mb-5">
              <ul>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Home
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> ¿Quienes somos?
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Ayuda y asistencia
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Afiliados
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Inversores
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <ul>
                <li className="pb-4 relative">
                  <span className="mr-2 text-primary-light">&#9658;</span>{" "}
                  Condiciones
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Política de privacidad
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Configuración de cookies
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Mapa del sitio
                </li>
                <li className="pb-4 relative">
                  <span className="mr-2">&#9658;</span> Declaración de
                  accesibilidad
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="mb-2">Unete a nuestro Boletin Informativo</h4>
              <p className="mb-4">
                No te pierdas nuestros nuevos tutoriales, tips y más!
              </p>
              <form className="flex items-center">
                <input type="text" name="" id="" className="mr-2" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Suscribete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

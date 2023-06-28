import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="quienes-somos" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/2 px-4">
            <img src="imagen.jpg" alt="Imagen de la empresa" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">
              Misión, Visión y Valores
            </h2>
            <div className="flex flex-wrap -mx-4 mb-8">
              <div className="w-full md:w-1/3 px-4">
                <h3 className="text-2xl font-bold mb-2">nuestra Misión</h3>
                <p className="text-gray-700">
                  Nuestra misión es enfocarnos en las necesidades de nuestros
                  alumnos, transformandolas en una experiencia única. Con un
                  alto nivel académico como humano, acompañando siempre a la
                  evolución y desarrollo de quienes nos eligen. Ofrecer un
                  método de aprendizaje enfocado a ser intuitivo, de esta manera
                  el alumno asimila los conocimientos de manera simple, eficaz y
                  fluida.
                </p>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <h3 className="text-2xl font-bold mb-2">Nuestra Visión</h3>
                <p className="text-gray-700">
                  Nuestra visión? Ser el Centro de Capacitación más prestigioso
                  ofreciendo los mejores servicios para profesionales en cada
                  área pudiendo desarrollarse como alumno y como profesor, con
                  oportunidades laborales y educacionales genuinas.
                </p>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <h3 className="text-2xl font-bold mb-2">Nuestros Valores</h3>
                <ul className="list-disc">
                  <li className="text-gray-700">Valor 1</li>
                  <li className="text-gray-700">Valor 2</li>
                  <li className="text-gray-700">Valor 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">Nosotros Somos</h2>
        <div id="equipo" className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full md:w-1/4 px-4">
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro1.jpg"
                alt="Foto del miembro 1"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 1</h3>
              <p className="text-gray-700">Cargo del miembro 1</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro2.jpg"
                alt="Foto del miembro 2"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 2</h3>
              <p className="text-gray-700">Cargo del miembro 2</p>
            </div>
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro3.jpg"
                alt="Foto del miembro 3"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 3</h3>
              <p className="text-gray-700">Cargo del miembro 3</p>
            </div>
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro4.jpg"
                alt="Foto del miembro 4"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 4</h3>
              <p className="text-gray-700">Cargo del miembro 4</p>
            </div>
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro5.jpg"
                alt="Foto del miembro 5"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 5</h3>
              <p className="text-gray-700">Cargo del miembro 5</p>
            </div>
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro6.jpg"
                alt="Foto del miembro 6"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 6</h3>
              <p className="text-gray-700">Cargo del miembro 6</p>
            </div>
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro7.jpg"
                alt="Foto del miembro 7"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 7</h3>
              <p className="text-gray-700">Cargo del miembro 7</p>
            </div>
            <div className="miembro hover:shadow-lg">
              <img
                src="img/miembro8.jpg"
                alt="Foto del miembro 8"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Nombre del miembro 8</h3>
              <p className="text-gray-700">Cargo del miembro 8</p>
            </div>
          </div>
        </div>

        <Link to="/register">Dejanos tus comentarios</Link>
      </div>
    </div>
  );
};
export default About;

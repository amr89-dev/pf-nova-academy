import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
/* eslint-disable */
// import { useHistory } from 'react-router-dom';

const SingIn = () => {
  // const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // Estado para controlar la redirección
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de inicio de sesión, como validar los datos ingresados y hacer una llamada a la base de datos.

    // Por ejemplo, podrías enviar una solicitud al backend para verificar las credenciales del usuario:
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // manejo la respeusta del back
        if (data.success) {
          setLoggedIn(true);
          // history.push('/otra-pagina'); // defino el estado loggedIn en true para redirigir al usuario
        } else {
          setError("Usuario incorrecto"); // Manejo el caso de inicio de sesión fallido
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (loggedIn) {
    return <redirect to="/" />; // Redirecciona a la pagina de perfil-home con sus datos
  }
  q;
  const clientID =
    "1025111478798-qcpl6unb1c4j99cpnf86ts4p75a4llm5.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);

  const onSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.name);
  };
  const onFailure = (response) => {
    console.log("Something went wrong");
  };
  const handleLogout = () => {
    setUser({});
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <div>
            <GoogleLogin
              clientId={clientID}
              onSuccess={onSuccess}
              onFailure={onFailure}
              buttonText="Continue  with Google"
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className={user ? "profile" : "hidden"}>
            <img src={user.imageUrl} />
            <h3> {user.name}</h3>
          </div>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        {error && <p className="text-red-500">{error}</p>}

        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:underline px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link to="/register">Registrate</Link>
        </div>
      </div>
    </section>
  );
};

export default SingIn;

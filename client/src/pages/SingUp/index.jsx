import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import {signUpSuccess, signUpFailure} from '../../redux/actions/userActions';
import Swal from 'sweetalert2';



const SignUp = ({ signUpSuccess, signUpFailure }) => {

  //definir un solo estado con los 3 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [passwordError, setPasswordError] = useState('');

  


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    // Realizar el envío del formulario o la lógica adicional aquí
    if (!validatePassword(password)) {
      setPasswordError(
        'La contraseña debe tener al menos 8 caracteres, una mayúscula y un número'
      );
      return;
    }

    
    try{
      const response = await axios.post('http://localhost:3001/user/singup',{
        name,
        email,
        password,
        
      });
      console.log('submit exitoso ')
      Swal.fire({
        icon: 'success',
        title: 'Registro completo',
        text: 'Creaste tu cuenta ahora puedes ingresar',
        footer: '<a href="http://localhost:5173/login">Ingresa desde AQUI</a>'}

      )
      const user = response.data;
      

      signUpSuccess(user); // Dispatch de la acción de éxito
      setName('');
      setEmail('');
      setPassword('');
      setPasswordError('');

    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algun dato esta mal, valida cumplir los requisitos',
        
      })
    
      signUpFailure(error); // Dispatch de la acción de fallo
      console.error('Error al registrar', error);
    }

    
  };

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
          <h2 className="text-xl font-semibold mb-4">Registro</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-gray-600">Nombre:</label>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-600">Email:</label>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-600">Contraseña:</label>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>
            
            <button
              className="mt-4 bg-blue-600 hover:underline px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Registrarse
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default connect(null, { signUpSuccess, signUpFailure })(SignUp);

import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { FormSingIn } from "../../components/formSingIn/Formulario";
/* eslint-disable */
// import { useHistory } from 'react-router-dom';

const SingIn = () => {
 

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm ">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm flex-col gap-4 ">
        <div className="text-5xl font-bold text-#000 flex flex-col gap-4" >
          <h1 className=" md:text-4xl text-center">Sign in with</h1>          
            <GoogleLogin buttonText="Continue  with Google" className="w-full cursor-pointer flex  justify-center m-0" />
        </div>
        <div className={/* user ? "profile" : "hidden" */ "hiden"}>
            <img src={/* user.imageUrl */ ""} />
            {/* <h3> {user.name}</h3> */}
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <FormSingIn/>
      
      </div>

    </section>
  );
};

export default SingIn;

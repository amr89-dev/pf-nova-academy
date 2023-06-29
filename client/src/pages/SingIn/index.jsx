import { GoogleLogin } from "@react-oauth/google";
import { FormSingIn } from "../../components/formSingIn/Formulario";
/* eslint-disable */
// import { useHistory } from 'react-router-dom';

const SingIn = () => {
  return (
    <section className="h-[calc(100vh-4.1em)] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0  ">
      <div className="md:w-1/3 max-w-sm ">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm flex-col gap-4 ">
        <div className="text-5xl font-bold text-#000 flex flex-col gap-4">
          <h1 className=" md:text-2xl text-center">
            Inicia session en tu cuenta de Nova Cademy
          </h1>
          <GoogleLogin
          onNonOAuthError
          allowed_parent_origin
          intermediate_iframe_close_callback
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          
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
        <FormSingIn />
      </div>
    </section>
  );
};

export default SingIn;

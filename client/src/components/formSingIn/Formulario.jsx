import { Link, NavLink } from "react-router-dom";
import { Input } from "./inputForm";
import { useForm } from "../../hooks/useForm";
import ModalErrorForm from "./ModalErrorForm";

const objForm = { email: "", password: "", isCheked: false };
export const FormSingIn = () => {
  const {
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
    valueInput,
    errors,
    setShowModal,
    showModal,
  } = useForm(objForm);

  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        className={
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
        name={"email"}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder={"Email Address"}
        value={valueInput.email}
      />
      {errors.email && (
        <p className="text-red text-xs italic">{errors.email}</p>
      )}
      <Input
        className={
          "text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        }
        name={"password"}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder={"Password"}
        value={valueInput.password}
        type={"password"}
      />
      {errors.password && (
        <p className="text-red text-xs italic">{errors.password}</p>
      )}

      <div className="mt-4 flex justify-between font-semibold text-sm">
        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
          <Input
            className={"mr-1"}
            name={"isCheked"}
            type={"checkbox"}
            onChange={handleOnChange}
            checked={valueInput.isCheked}
          />
          Remember Me
        </label>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>

      <div className="flex  mt-4">
        <button
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleOnSubmit}
        >
          Sign In
        </button>
      </div>

      <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
        Don't have an account? <NavLink className={"text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"}>Register</NavLink>
      </p>
      {showModal && (
        <ModalErrorForm showModal={showModal} setShowModal={setShowModal} />
      )}
    </form>
  );
};

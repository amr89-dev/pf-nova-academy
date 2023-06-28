import { useEffect, useState } from "react";
import { validate } from "../helpers/validateSingIn";
import { loginUser } from "../services/loginUserRequest";
import { useNavigate } from "react-router-dom";

export const useForm = (dataValue) => {
  const [showModal, setShowModal] = useState(false);
  const [valueInput, setValueInput] = useState(dataValue);
  const [errors, setErrors] = useState({});
  const [errorsDb, setErrorsDb] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (valueInput.isCheked) {
      window.localStorage.setItem("username", valueInput.email);
      window.localStorage.setItem("password", valueInput.password);
    } else {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
    }
  }, [valueInput.isCheked]);
  useEffect(() => {
    if (errorsDb.error === "user not found") {
      setShowModal(true);
    }
  }, [errorsDb]);
  const handleOnChange = (e) => {
    const { value, name, type, checked } = e.target;
    if (type === "checkbox") setValueInput({ ...valueInput, [name]: checked });
    else setValueInput({ ...valueInput, [name]: value });
    const validationErrors = validate({ ...valueInput, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    const validationErrors = validate({ ...valueInput, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await loginUser(valueInput);
      localStorage.setItem("token", user.data);
      user.status === 200 && navigate("/");
    } catch (error) {
      error.response.status === 404 && setErrorsDb(error.response.data);
      error.response.status === 401 && console.error(error.response.data);
      error.response.status === 403 && console.error(error.response.data);
    }
  };

  return {
    handleOnChange,
    handleOnBlur,
    valueInput,
    errors,
    errorsDb,
    handleOnSubmit,
    setShowModal,
    showModal,
  };
};

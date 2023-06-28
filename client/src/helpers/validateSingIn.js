export const validate = (values) => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Correo electrónico inválido';
    }
  
    if (!values.password) {
      errors.password = 'La contraseña es requerida';
    } else if (values.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = 'La contraseña debe contener al menos una letra mayúscula';
    } else if (!/\d/.test(values.password)) {
      errors.password = 'La contraseña debe contener al menos un número';
    }
  
    return errors;
  };
  
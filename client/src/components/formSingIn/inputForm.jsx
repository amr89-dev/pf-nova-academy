export const Input = ({placeholder,onChange,onBlur,checked,value,name,className,type}) => {
  return (
    <input
    className= {className}
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      checked={checked}
     
    />
  );
};

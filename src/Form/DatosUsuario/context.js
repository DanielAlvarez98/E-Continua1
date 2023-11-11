import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [datos, setDatos] = useState({ value: "", valid: null });
  const [documento, setDocumento] = useState({ value: "", valid: null });
  const [telefono, setTelefono] = useState({ value: "", valid: null });
  const [direccion, setDireccion] = useState({ value: "", valid: null });

  const formContextValue = {
    datos,
    setDatos,
    documento,
    setDocumento,
    telefono,
    setTelefono,
    direccion,
    setDireccion,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  return useContext(FormContext);
};

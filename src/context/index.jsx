import { createContext, useContext, useMemo, useState } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const values = useMemo(() => ({ data, setFormValues }), [data]);

  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);

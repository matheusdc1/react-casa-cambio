import { createContext, useState, useContext, useEffect } from "react";

const SaldoContext = createContext();

export const useSaldo = () => useContext(SaldoContext);

export const SaldoProvider = ({ children }) => {
  // Inicialize o saldo com o valor do localStorage, se existir, ou 0.
  const [saldo, setSaldo] = useState(() => {
    const saldoLocal = localStorage.getItem("saldo");
    return saldoLocal !== null ? parseFloat(saldoLocal) : 0;
  });

  // Atualize o localStorage sempre que o saldo mudar
  useEffect(() => {
    localStorage.setItem("saldo", saldo);
  }, [saldo]);

  return (
    <SaldoContext.Provider value={{ saldo, setSaldo }}>
      {children}
    </SaldoContext.Provider>
  );
};

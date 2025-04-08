import React, { createContext, useState, useContext } from 'react';

const EstoqueContext = createContext();

export const EstoqueProvider = ({ children }) => {
  const [estoque, setEstoque] = useState([
    { id: '1', nome: 'Parafuso', quantidade: 20 },
    { id: '2', nome: 'Porca', quantidade: 15 },
    { id: '3', nome: 'Arruela', quantidade: 30 },
  ]);

  return (
    <EstoqueContext.Provider value={{ estoque, setEstoque }}>
      {children}
    </EstoqueContext.Provider>
  );
};

export const useEstoque = () => useContext(EstoqueContext);

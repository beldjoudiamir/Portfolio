import { creerContext, useState, useEffect } from "react";

export const ContexteUtilisateur = creerContext();

export function creerContextProvider(props) {
  const [modelState, setModelState] = useState({});
  return (
    <ContexteUtilisateur.Provider>
      {props.children}
    </ContexteUtilisateur.Provider>
  );
}

import { useState } from "react";
import "./style.scss";
import icone from "../../assets/google.png";
import Pseudo from "./Validation/pseudo";
import Password from "./Validation/password";
import PasswordConfirmation from "./Validation/passwordConfirmation";

function PageConnexionReactJs() {
  const [inputsStates, setInputsStates] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });

  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });

  console.log(inputsStates);

  function handelSubmit(e) {
    e.preventDefault();

    if (validationCheck()) {
      console.log("envoie du formulaire");
      alert("envoie du formulaire");
    }
  }

  function validationCheck() {
    const areValid = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    };

    if (inputsStates.pseudo.length < 5 || inputsStates.pseudo.length > 40) {
      setShowValidation((state) => ({ ...state, pseudo: true }));
    } else {
      areValid.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }

    if (inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }

    if (inputsStates.passwordConfirmation !== inputsStates.password) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }));
    } else {
      areValid.passwordConfirmation = true;
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }));
    }

    console.log(areValid);

    if (Object.values(areValid).every((value) => value)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <div className="helloPage">
        <div className="imgleft"></div>
        <div className="containerInfo">
          <h1>Sign-in to your Account </h1>
          <p>See what is going on with your business</p>
          <button>
            <img src={icone} alt="icone google" />
            Sign-in with Google
          </button>
          <button className="login">
            ------- or Login in with Email -------
          </button>
          <form
            className=" max-w-xl mx-auto p-10 bg-transparent"
            onSubmit={handelSubmit}
          >
            <Pseudo
              inputsStates={inputsStates}
              setInputsStates={setInputsStates}
              showValidation={showValidation}
            />
            <Password
              inputsStates={inputsStates}
              setInputsStates={setInputsStates}
              showValidation={showValidation}
            />
            <PasswordConfirmation
              inputsStates={inputsStates}
              setInputsStates={setInputsStates}
              showValidation={showValidation}
            />
            <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded font-bold">
              Sign-in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default PageConnexionReactJs;

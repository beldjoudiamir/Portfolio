export default function pseudo({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="userName" className=" text-black bg-transparent">
        Your user name
      </label>
      <input
        id="userName"
        type="text"
        className=" rounded w-full p-1 mt-2 bg-transparent border border-black"
        value={inputsStates.pseudo}
        onChange={(e) =>
          setInputsStates({ ...inputsStates, pseudo: e.target.value })
        }
      />
      {showValidation.pseudo && (
        <p className=" text-red-400 font-semibold text-xs">
          Your username must be between 6 and 50 characters.
        </p>
      )}
    </>
  );
}

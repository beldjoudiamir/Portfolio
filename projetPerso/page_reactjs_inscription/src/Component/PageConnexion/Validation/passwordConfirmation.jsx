export default function passwordConfirmation({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label
        htmlFor="passwordConfirmation"
        className=" text-black bg-transparent"
      >
        password Confirmation
      </label>
      <input
        id="passwordConfirmation"
        type="password"
        className=" rounded w-full p-1 mt-2 bg-transparent border border-black"
        value={inputsStates.passwordConfirmation}
        onChange={(e) =>
          setInputsStates({
            ...inputsStates,
            passwordConfirmation: e.target.value,
          })
        }
      />

      {showValidation.passwordConfirmation && (
        <p className=" text-red-400 font-semibold text-xs">
          The passwords are not identical.
        </p>
      )}
    </>
  );
}

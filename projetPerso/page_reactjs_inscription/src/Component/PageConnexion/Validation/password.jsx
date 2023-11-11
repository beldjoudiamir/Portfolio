export default function password({
  inputsStates,
  setInputsStates,
  showValidation,
}) {
  return (
    <>
      <label htmlFor="password" className=" text-black bg-transparent">
        password
      </label>
      <input
        id="password"
        type="password"
        className=" rounded w-full p-1 mt-2 bg-transparent border border-black"
        value={inputsStates.password}
        onChange={(e) =>
          setInputsStates({ ...inputsStates, password: e.target.value })
        }
      />
      {showValidation.password && (
        <p className=" text-red-400 font-semibold text-xs">
          At least one digit and 6 characters.
        </p>
      )}
    </>
  );
}

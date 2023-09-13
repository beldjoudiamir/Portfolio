import "./style.scss";

function ModalContent({ closeModal }) {
  return (
    <div className=" fixed inset-0 bg-slate-800/75 flex items-center justify-center">
      <div className=" bg-slate-200 text-slate-900 p-10 rounded relative mb-[10vh]">
        <button
          onClick={closeModal}
          className=" absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center"
        >
          X
        </button>

        <h1 className=" text-center font-bold bg-blend-color-burn">Contact</h1>
        <form>
          <div>
            <label>Nom:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <div>
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ModalContent;

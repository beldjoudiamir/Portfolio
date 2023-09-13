import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";

function Popup() {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <a onClick={() => setShowPopUp(true)} className="hover:text-orange-400">
        Contact
      </a>

      {showPopUp &&
        createPortal(
          <ModalContent closeModal={() => setShowPopUp(false)} />,
          document.body,
        )}
    </>
  );
}
export default Popup;

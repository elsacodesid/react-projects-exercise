import Modal from "./modal";
import { useState } from "react";
import "./styles.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleTogglePopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false)
  }

  return (
    <div>
      <button onClick={handleTogglePopup} style={{ color: "white" }}>
        Open Modal Popup
      </button>
      {showModalPopup && <Modal onClose={onClose}/>}
    </div>
  );
}

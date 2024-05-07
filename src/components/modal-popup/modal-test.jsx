import Modal from "./modal";
import { useState } from "react";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleTogglePopup() {
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div>
      <button onClick={handleTogglePopup} style={{ color: "white"}}>Open Modal Popup</button>
      {showModalPopup && <Modal body={<div>Custom Message</div>} />}
    </div>
  );
}

import React from "react";
import "./PakuModal.css";

function PakuModal({ onClose }) {
  return (
    <div className="paku-modal">
      <div className="paku-modal-content">
        <p>다녀온 Paku를 클릭해보세요!</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default PakuModal;

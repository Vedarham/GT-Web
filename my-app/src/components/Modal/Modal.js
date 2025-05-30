import { GiCrossedBones } from "react-icons/gi";
import React from 'react';
import './Modal.css'; 

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><GiCrossedBones/></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

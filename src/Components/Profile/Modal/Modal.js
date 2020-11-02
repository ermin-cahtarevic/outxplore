import React from 'react';
import { ImCross } from 'react-icons/im';
import Proptypes from 'prop-types';

import './modal.css';

const Modal = ({ onSubmit, onChange }) => {
  const handleClose = () => {
    document.querySelector('.modal-wrap').classList.remove('modal-show');
  };

  return (
    <div className="modal-wrap">
      <div className="modal">
        <button type="button" className="modal-close-btn" onClick={handleClose}>
          <ImCross />
        </button>
        <div>
          <h3>Update profile photo</h3>
          <form onSubmit={onSubmit}>
            <input className="modal-file-input" type="file" name="photo" onChange={onChange} />
            <input className="modal-file-submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  onChange: Proptypes.func.isRequired,
};

export default Modal;

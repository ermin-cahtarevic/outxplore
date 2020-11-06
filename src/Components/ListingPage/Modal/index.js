import React from 'react';
import { ImCross } from 'react-icons/im';

import './listing-page-modal.css';

const ListingPageModal = ({ host }) => {
  const handleClose = () => {
    document.querySelector('.listing-page-modal-wrap').classList.remove('modal-show');
    document.querySelector('body').style.overflow = 'visible';
  };

  return (
    <div className="listing-page-modal-wrap">
      <div className="listing-page-modal">
        <button type="button" className="modal-close-btn" onClick={handleClose}>
          <ImCross />
        </button>
        <div>
          <h3>Contact information</h3>
          <div>
            <h4>Phone number</h4>
            <p>{host.phone}</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>{host.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPageModal;

import React, { useEffect, useContext } from 'react';
import './ModalWindow.scss';

const ModalWindow = ({ id, isOpen, setIsOpen, content }) => (
  <div id={id} className={isOpen ? 'modal active' : 'modal'}>
    <div className="modal__content">
      <div className="modal__close" onClick={() => setIsOpen(false)}></div>
      {content}
    </div>
  </div>
);

export default ModalWindow;

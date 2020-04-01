import React from 'react';
import { createPortal } from 'react-dom';
import { useRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import './Modal.scss';

const Modal = ({ children, open, closeModal, position = 'bottom' }) => {
    const ref = useRef();

    useOnClickOutside(ref, closeModal);

    console.log('Modal open', open);

    return open
        ? createPortal(
              <div className="modal is-active">
                  <div className="modal-background"></div>
                  <div className={`modal-content ${position}`} ref={ref}>
                      {children}
                  </div>
                  <button
                      onClick={closeModal}
                      className="modal-close is-large"
                      aria-label="close"></button>
              </div>,
              document.getElementById('portal')
          )
        : null;
};

export default Modal;

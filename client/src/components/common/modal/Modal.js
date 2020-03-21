import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open }) => {
    return open
        ? createPortal(
              <section className="modal">{children}</section>,
              document.getElementById('portal')
          )
        : null;
};

export default Modal;

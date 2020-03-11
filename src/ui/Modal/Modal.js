import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import './Modal.scss'

export const Modal = ({ isOpen, onClose, children, className }) => {
  const modalOverlay = useRef(null)

  const onOverlayClick = e => {
    if (e.target === modalOverlay.current) {
      onClose()
    }
  }

  return isOpen ?
    ReactDOM.createPortal(
      <>
        <div className="modal-wrapper" ref={modalOverlay} onClick={onOverlayClick}>
          <div className="modal">
            <button type="button" className="modal-close-button" onClick={onClose}>
              <span>&times;</span>
            </button>
            {children}
          </div>
        </div>
      </>, document.body
    )
    : null
}


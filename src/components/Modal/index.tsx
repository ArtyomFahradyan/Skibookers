import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import classNames from 'classnames';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const ANIMATION_DURATION = 500;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setClosing(false);
    } else if (show) {
      setClosing(true);
      const timer = setTimeout(() => {
        setShow(false);
        setClosing(false);
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isOpen, show]);

  if (!show) return null;
  return (
    <div
      className={
        styles['modal-overlay'] +
        ' ' +
        (isOpen && !closing
          ? styles['modal-overlay--open']
          : styles['modal-overlay--close'])
      }
      data-testid="modal-overlay"
      onClick={onClose}
    >
      <div
        className={classNames(
          styles['modal-content'],
          isOpen && !closing
            ? styles['modal-content--open']
            : styles['modal-content--close'],
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles['modal-close']}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {title && <h2 className={styles['modal-title']}>{title}</h2>}
        <div className={styles['modal-body']}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

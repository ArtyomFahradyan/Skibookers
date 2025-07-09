import React from 'react';
import styles from './NotificationAlert.module.scss';
import typeIcons from 'constants/typeIcons';
import classNames from 'classnames';

interface NotificationAlertProps {
  message: string;
  onClose: () => void;
  className?: string;
  type: 'success' | 'error' | 'warning';
}

const NotificationAlert: React.FC<NotificationAlertProps> = ({
  message,
  onClose,
  className,
  type,
}) => (
  <div
    className={classNames(
      styles['notification-alert'],
      styles[`notification-alert--${type}`],
      className && styles[className],
    )}
    role="alert"
  >
    <span
      className={styles['notification-alert__icon']}
      role="img"
      aria-label={type}
    >
      {typeIcons[type]}
    </span>
    <span>{message}</span>
    <button
      className={styles['notification-alert__close']}
      onClick={onClose}
      aria-label="Close notification"
    >
      <svg
        width="18"
        height="18"
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
  </div>
);

export default NotificationAlert;

import React from 'react';
import styles from './Spinner.module.scss';
import classNames from 'classnames';

const Spinner: React.FC<{ size?: number; isAbsolute?: boolean }> = ({
  size = 36,
  isAbsolute = false,
}) => {
  const spin = (
    <span
      className={classNames(styles['spinner-container'])}
      style={{ ['--spinner-size' as string]: `${size}px` }}
      role="status"
      aria-label="Loading"
    >
      <svg
        className={styles['spinner-svg']}
        width={size}
        height={size}
        viewBox="0 0 50 50"
      >
        <circle
          className={styles['spinner-circle']}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#4f8cff"
          strokeWidth="5"
          strokeDasharray="90 150"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

  if (isAbsolute) {
    return <div className={classNames(styles['spinner-abs'])}>{spin}</div>;
  }

  return spin;
};

export default Spinner;

import React from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className,
  backgroundImage,
}) => (
  <div className={classNames(styles['card-component'], className)}>
    <div className={styles['card-accent']} />
    {backgroundImage && (
      <div
        className={styles['card-image-section']}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    )}
    <div className={styles['card-content-bg']}>
      {title && <h3 className={styles['card-title']}>{title}</h3>}
      <div className={styles['card-content']}>{children}</div>
    </div>
  </div>
);

export default React.memo(Card);

import React, { useState } from 'react';
import Button from 'components/Button';
import styles from './TotalPriceSection.module.scss';
import classNames from 'classnames';

interface TotalPriceSectionProps {
  totalPrice: number;
  onCheckout: () => void;
}

const TotalPriceSection: React.FC<TotalPriceSectionProps> = ({
  totalPrice,
  onCheckout,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={classNames(styles['trip-total-section'])}>
      <h2 className={styles['trip-total-section'] + '-h2'}>
        Total: ${totalPrice}
      </h2>
      <Button
        onClick={onCheckout}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Continue to Checkout
        <span
          className={classNames(
            styles['checkout-arrow'],
            hovered && styles['checkout-arrow--visible'],
          )}
          aria-hidden="true"
        >
          {'\u2192'}
        </span>
      </Button>
    </div>
  );
};

export default TotalPriceSection;

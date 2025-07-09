import React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import { useTripStore } from 'hooks/useTripStore';
import { useNavigate } from 'react-router-dom';
import styles from './Checkout.module.scss';

const Checkout: React.FC = () => {
  const trip = useTripStore((state) => state.trip);
  const totalPrice = useTripStore((state) => state.totalPrice);
  const navigate = useNavigate();

  return (
    <div className={styles['checkout-root']}>
      <Button
        className={styles['checkout-back-btn']}
        onClick={() => {
          void navigate(-1);
        }}
      >
        ← Back
      </Button>
      <h1 className={styles['checkout-title']}>Checkout</h1>
      <div className={styles['checkout-card-wrapper']}>
        <Card title="Your Trip Summary">
          <div className={styles['checkout-summary']}>
            <div>
              <b>Resort:</b> {trip.resort}
            </div>
            <div>
              <b>Hotel:</b> {trip.hotel}
            </div>
            <div>
              <b>Room:</b> {trip.room}
            </div>
            <div>
              <b>Skipass:</b> {trip.skipass}
            </div>
            <div>
              <b>Transfer:</b> {trip.transfer}
            </div>
            <div>
              <b>Flight:</b> {trip.flight}
            </div>
            <div>
              <b>Insurance:</b> {trip.insurance}
            </div>
            <div>
              <b>Add-ons:</b>{' '}
              {trip.addons && trip.addons.length > 0
                ? trip.addons.join(', ')
                : 'None'}
            </div>
            <div className={styles['checkout-total']}>
              Total Price:{' '}
              <span className={styles['checkout-total-price']}>
                ${totalPrice}
              </span>
            </div>
            <Button disabled className={styles['checkout-pay-btn']}>
              Pay
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;

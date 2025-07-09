import React from 'react';
import Card from 'components/Card';
import Button from 'components/Button';
import type { FieldKey } from 'pages/TripReview';
import styles from './TripPackageSection.module.scss';
import PencilIcon from 'assets/pencil.svg?react';
import { tripCards } from 'constants/tripCards';
import classNames from 'classnames';

interface TripPackageSectionProps {
  tripData: {
    resort: string;
    hotel: string;
    room: string;
    skipass: string;
    transfer: string;
    flight: string;
    insurance: string;
    addons: string[];
  };
  onEdit: (component: FieldKey) => void;
}

const TripPackageSection: React.FC<TripPackageSectionProps> = ({
  tripData,
  onEdit,
}) => (
  <div className={classNames(styles['trip-package-section'])}>
    {tripCards.map((card) => (
      <Card
        key={card.title}
        title={card.title}
        backgroundImage={card.backgroundImage}
      >
        <span className={styles['package-value']}>
          {card.field === 'addons'
            ? tripData.addons.join(', ')
            : tripData[card.field]}
        </span>
        <Button onClick={() => onEdit(card.title)}>
          <PencilIcon />
        </Button>
      </Card>
    ))}
  </div>
);

export default TripPackageSection;

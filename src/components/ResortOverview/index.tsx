import React from 'react';
import styles from './ResortOverview.module.scss';
import classNames from 'classnames';

interface ResortOverviewProps {
  resort: {
    name: string;
    description: string;
    region: string;
    difficulty: string;
    vibe: string;
    image: string;
  };
}

const ResortOverview: React.FC<ResortOverviewProps> = ({ resort }) => (
  <div
    className={classNames(styles['resort-overview'])}
    style={{ backgroundImage: `url(${resort.image})` }}
  >
    <div className={styles['resort-info']}>
      <h1>{resort.name}</h1>
      <p>{resort.description}</p>
      <span>
        {resort.region} | {resort.difficulty} | {resort.vibe}
      </span>
    </div>
  </div>
);

export default ResortOverview;

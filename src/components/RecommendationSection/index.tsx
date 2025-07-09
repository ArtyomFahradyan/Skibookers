import React from 'react';
import styles from './RecommendationSection.module.scss';
import Button from 'components/Button';
import classNames from 'classnames';

interface RecommendationItem {
  title: string;
  description: string;
  icon: string;
  cta: string;
  link: string;
}

interface RecommendationSectionProps {
  reason: string;
  items?: RecommendationItem[];
}

const RecommendationSection: React.FC<RecommendationSectionProps> = ({
  reason,
  items,
}) => (
  <div className={classNames(styles['recommendation-section'])}>
    <h3 className={styles['recommendation-section-h3']}>Recommended for You</h3>
    <p className={styles['recommendation-section-p']}>{reason}</p>
    {items && items.length > 0 && (
      <div className={classNames(styles['recommendation-list'])}>
        {items.map((item) => (
          <div
            className={classNames(styles['recommendation-card'])}
            key={item.title}
          >
            <span className={classNames(styles['recommendation-icon'])}>
              {item.icon}
            </span>
            <div className={classNames(styles['recommendation-content'])}>
              <div className={classNames(styles['recommendation-title'])}>
                {item.title}
              </div>
              <div className={classNames(styles['recommendation-desc'])}>
                {item.description}
              </div>
              <Button disabled>{item.cta}</Button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default RecommendationSection;

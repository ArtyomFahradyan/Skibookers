import React from 'react';
import Button from 'components/Button';
import classNames from 'classnames';
import styles from './EditModal.module.scss';
import type { FieldKey } from 'pages/TripReview';
import type { TripPackage } from 'constants/mockData';

interface OptionListProps {
  editingComponent: FieldKey;
  tripData: TripPackage;
  mockOptions: Record<string, string[]>;
  aiSuggestions: Record<
    string,
    { value: string; priceDelta?: number } | undefined
  >;
  onSelectOption: (option: string) => void;
  fieldMap: Record<FieldKey, keyof TripPackage>;
}

const OptionList: React.FC<OptionListProps> = ({
  editingComponent,
  tripData,
  mockOptions,
  aiSuggestions,
  onSelectOption,
  fieldMap,
}) => (
  <ul className={styles['modal-option-list']}>
    {mockOptions[editingComponent].map((option) => {
      const isSelected =
        editingComponent === 'Add-ons'
          ? tripData.addons.includes(option)
          : tripData[fieldMap[editingComponent]] === option;
      const isAISuggested = aiSuggestions[editingComponent]?.value === option;
      const btnClass = classNames(styles['modal-option-btn'], {
        [styles['selected']]: isSelected,
        [styles['ai-suggested']]: isAISuggested,
      });
      return (
        <li key={option}>
          <Button className={btnClass} onClick={() => onSelectOption(option)}>
            {editingComponent === 'Add-ons' && (
              <input
                type="checkbox"
                checked={isSelected}
                readOnly
                className={styles['modal-checkbox']}
              />
            )}
            {option}
            {isAISuggested && (
              <span
                className={styles['ai-suggestion-emoji']}
                role="img"
                aria-label="AI"
              >
                🤖
              </span>
            )}
          </Button>
        </li>
      );
    })}
  </ul>
);

export default React.memo(OptionList);

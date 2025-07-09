import React from 'react';
import Modal from 'components/Modal';
import type { FieldKey } from 'pages/TripReview';
import { TripPackage } from 'constants/mockData';
import styles from './EditModal.module.scss';
import OptionList from './OptionList';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingComponent: FieldKey | null;
  tripData: TripPackage;
  mockOptions: Record<string, string[]>;
  aiSuggestions: Record<
    string,
    { value: string; priceDelta?: number } | undefined
  >;
  onSelectOption: (option: string) => void;
  fieldMap: Record<FieldKey, keyof TripPackage>;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  editingComponent,
  tripData,
  mockOptions,
  aiSuggestions,
  onSelectOption,
  fieldMap,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={editingComponent ? `Edit ${editingComponent}` : ''}
  >
    {editingComponent && (
      <>
        {aiSuggestions[editingComponent] && (
          <div className={styles['ai-suggestion-box']}>
            <span role="img" aria-label="AI">
              🤖
            </span>
            AI recommends: <b>{aiSuggestions[editingComponent]?.value}</b>
            {aiSuggestions[editingComponent]?.priceDelta !== undefined && (
              <span className={styles['ai-suggestion-price']}>
                {aiSuggestions[editingComponent].priceDelta > 0
                  ? `(+$${aiSuggestions[editingComponent].priceDelta})`
                  : `(-$${-aiSuggestions[editingComponent].priceDelta})`}
              </span>
            )}
          </div>
        )}
        <OptionList
          editingComponent={editingComponent}
          tripData={tripData}
          mockOptions={mockOptions}
          aiSuggestions={aiSuggestions}
          onSelectOption={onSelectOption}
          fieldMap={fieldMap}
        />
      </>
    )}
  </Modal>
);

export default EditModal;

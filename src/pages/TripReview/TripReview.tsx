import React, { useState } from 'react';
import ResortOverview from 'components/ResortOverview';
import TripPackageSection from 'components/TripPackageSection';
import TotalPriceSection from 'components/TotalPriceSection';
import RecommendationSection from 'components/RecommendationSection';
import EditModal from 'components/EditModal';
import {
  tripPackage as initialTripPackage,
  recommendation,
  resorts,
} from 'constants/mockData';
import { mockOptions, aiSuggestions } from 'constants/mockOptions';
import { calculatePrice } from 'utils/calculatePrice';
import styles from './TripReview.module.scss';
import { useNotificationAlert } from 'hooks/useNotificationAlert';
import { useNavigate } from 'react-router-dom';
import { useTripStore } from 'hooks/useTripStore';

const fieldMap = {
  Resort: 'resort',
  Hotel: 'hotel',
  Room: 'room',
  Skipass: 'skipass',
  Transfer: 'transfer',
  Flight: 'flight',
  Insurance: 'insurance',
  'Add-ons': 'addons',
} as const;
export type FieldKey = keyof typeof fieldMap;

const TripReview: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingComponent, setEditingComponent] = useState<FieldKey | null>(
    null,
  );
  const { Notification, toggle } = useNotificationAlert();
  const navigate = useNavigate();

  // Zustand store
  const trip = useTripStore((state) => state.trip);
  const totalPrice = useTripStore((state) => state.totalPrice);
  const setTrip = useTripStore((state) => state.setTrip);
  const updateField = useTripStore((state) => state.updateField);
  const setTotalPrice = useTripStore((state) => state.setTotalPrice);

  React.useEffect(() => {
    setTrip(initialTripPackage);
    setTotalPrice(calculatePrice(initialTripPackage));
  }, [setTrip, setTotalPrice]);

  React.useEffect(() => {
    setTotalPrice(calculatePrice(trip));
  }, [trip, setTotalPrice]);

  // Find the selected resort object
  const selectedResort =
    resorts.find((r) => r.name === trip.resort) || resorts[0];

  const handleEdit = (component: FieldKey) => {
    setEditingComponent(component);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setEditingComponent(null);
  };

  const handleSelectOption = (option: string) => {
    if (!editingComponent) return;
    if (editingComponent === 'Add-ons') {
      const exists = trip.addons.includes(option);
      const newAddons = exists
        ? trip.addons.filter((a: string) => a !== option)
        : [...trip.addons, option];
      updateField('addons', newAddons);
    } else {
      updateField(fieldMap[editingComponent], option);
    }
    const message =
      editingComponent === 'Add-ons'
        ? `Add-ons updated!`
        : `${editingComponent} updated!`;
    toggle({
      message,
      duration: 3500,
      type: 'success',
    });
    if (editingComponent !== 'Add-ons') handleClose();
  };

  return (
    <div className={styles['trip-review-container']}>
      <ResortOverview resort={selectedResort} />
      <TripPackageSection tripData={trip} onEdit={handleEdit} />
      <TotalPriceSection
        totalPrice={totalPrice}
        onCheckout={() => {
          void navigate('/checkout');
        }}
      />
      <RecommendationSection
        reason={recommendation.reason}
        items={recommendation.items}
      />
      <EditModal
        isOpen={modalOpen}
        onClose={handleClose}
        editingComponent={editingComponent}
        tripData={trip}
        mockOptions={mockOptions}
        aiSuggestions={aiSuggestions}
        onSelectOption={handleSelectOption}
        fieldMap={fieldMap}
      />
      {Notification}
    </div>
  );
};

export default TripReview;

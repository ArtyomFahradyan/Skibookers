import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TripPackage } from '../constants/mockData';

interface TripState {
  trip: TripPackage;
  totalPrice: number;
  setTrip: (trip: TripPackage) => void;
  updateField: <K extends keyof TripPackage>(
    field: K,
    value: TripPackage[K],
  ) => void;
  setTotalPrice: (price: number) => void;
}

export const useTripStore = create<TripState>()(
  persist(
    (set) => ({
      trip: {
        resort: '',
        hotel: '',
        room: '',
        skipass: '',
        transfer: '',
        flight: '',
        insurance: '',
        addons: [],
      },
      totalPrice: 0,
      setTrip: (trip) => set({ trip }),
      updateField: (field, value) =>
        set((state) => ({
          trip: { ...state.trip, [field]: value },
        })),
      setTotalPrice: (price) => set({ totalPrice: price }),
    }),
    {
      name: 'skibookers-trip',
      partialize: (state) => ({
        trip: state.trip,
        totalPrice: state.totalPrice,
      }),
    },
  ),
);

import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import OptionList from './OptionList';
import type { TripPackage } from 'constants/mockData';

const mockOptions: Record<string, string[]> = {
  Room: ['Single', 'Double', 'Suite'],
  'Add-ons': ['Spa', 'Lessons'],
};
const aiSuggestions: Record<
  string,
  { value: string; priceDelta?: number } | undefined
> = {
  Room: { value: 'Suite', priceDelta: 50 },
  'Add-ons': { value: 'Spa', priceDelta: 20 },
};
const fieldMap: Record<string, keyof TripPackage> = {
  Room: 'room',
  'Add-ons': 'addons',
  Resort: 'resort',
  Hotel: 'hotel',
  Skipass: 'skipass',
  Transfer: 'transfer',
  Flight: 'flight',
  Insurance: 'insurance',
};
const tripData: Pick<TripPackage, 'room' | 'addons'> = {
  room: 'Double',
  addons: ['Spa'],
};

describe('OptionList', () => {
  it('renders all options', () => {
    render(
      <OptionList
        editingComponent="Room"
        tripData={tripData as TripPackage}
        mockOptions={mockOptions}
        aiSuggestions={aiSuggestions}
        onSelectOption={() => {}}
        fieldMap={fieldMap}
      />,
    );
    expect(screen.getByText('Single')).toBeInTheDocument();
    expect(screen.getByText('Double')).toBeInTheDocument();
    expect(screen.getByText('Suite')).toBeInTheDocument();
  });

  it('calls onSelectOption when an option is clicked', () => {
    const onSelect = vi.fn();
    render(
      <OptionList
        editingComponent="Room"
        tripData={tripData as TripPackage}
        mockOptions={mockOptions}
        aiSuggestions={aiSuggestions}
        onSelectOption={onSelect}
        fieldMap={fieldMap}
      />,
    );
    fireEvent.click(screen.getByText('Single'));
    expect(onSelect).toHaveBeenCalledWith('Single');
  });

  it('shows checkbox for Add-ons', () => {
    render(
      <OptionList
        editingComponent="Add-ons"
        tripData={tripData as TripPackage}
        mockOptions={mockOptions}
        aiSuggestions={aiSuggestions}
        onSelectOption={() => {}}
        fieldMap={fieldMap}
      />,
    );
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
  });
});

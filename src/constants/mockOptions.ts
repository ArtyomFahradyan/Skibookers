export const mockOptions: Record<string, string[]> = {
  Resort: ['Alpine Heights', 'Snowy Peaks', 'Frost Valley'],
  Hotel: ['4* Chalet, near lifts', '3* Lodge, city center', '5* Spa Resort'],
  Room: ['Double Room with breakfast', 'Single Room', 'Suite with balcony'],
  Skipass: ['3 days, premium zone', '5 days, all zones', '2 days, beginner'],
  Transfer: ['From Geneva Airport', 'From Zurich Station', 'Private car'],
  Flight: [
    'Emirates, Economy, 12.01 15:40',
    'Swiss, Business, 12.01 16:00',
    'No flight',
  ],
  Insurance: ['Included, basic', 'Premium', 'None'],
  'Add-ons': ['Ski lessons', 'Spa', 'Nightlife', 'Equipment rental'],
};

export const aiSuggestions: Record<
  string,
  { value: string; priceDelta?: number } | undefined
> = {
  Room: { value: 'Suite with balcony', priceDelta: 50 },
  'Add-ons': { value: 'Ski lessons', priceDelta: 30 },
};

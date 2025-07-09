import type { TripPackage } from 'constants/mockData';

export function calculatePrice(trip: TripPackage) {
  let price = 1500;
  if (trip.room === 'Suite with balcony') price += 200;
  else if (trip.room === 'Single Room') price -= 100;
  if (trip.hotel === '5* Spa Resort') price += 250;
  else if (trip.hotel === '3* Lodge, city center') price -= 100;
  if (trip.skipass === '5 days, all zones') price += 120;
  else if (trip.skipass === '2 days, beginner') price -= 60;
  if (trip.insurance === 'Premium') price += 60;
  else if (trip.insurance === 'None') price -= 30;
  price += trip.addons.length * 40;
  if (trip.flight === 'Swiss, Business, 12.01 16:00') price += 300;
  else if (trip.flight === 'No flight') price -= 200;
  if (trip.resort === 'Frost Valley') price -= 80;
  else if (trip.resort === 'Snowy Peaks') price += 60;
  if (trip.transfer === 'Private car') price += 90;
  return price;
}

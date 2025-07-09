export const resort = {
  name: 'Alpine Heights',
  description: 'Swiss Alps, Party vibe, Intermediate slopes',
  region: 'Swiss Alps',
  difficulty: 'Intermediate',
  vibe: 'Party',
  image:
    'https://www.les2alpes.com/app/uploads/les-deux-alpes/2021/02/thumbs/les2alpes-muzelle-ete-1920x960.jpg',
};

export type TripPackage = {
  resort: string;
  hotel: string;
  room: string;
  skipass: string;
  transfer: string;
  flight: string;
  insurance: string;
  addons: string[];
};

export const tripPackage: TripPackage = {
  resort: 'Alpine Heights',
  hotel: '4* Chalet, near lifts',
  room: 'Double Room with breakfast',
  skipass: '3 days, premium zone',
  transfer: 'From Geneva Airport',
  flight: 'Emirates, Economy, 12.01 15:40',
  insurance: 'Included, basic',
  addons: ['Ski lessons', 'Spa', 'Nightlife'],
};

export const recommendation = {
  reason:
    'Based on your preferences: Party vibe, Medium budget, Group of friends',
  items: [
    {
      title: 'Try the Après-Ski Party',
      description:
        'Join the best party in the Alps with live DJs and happy hour drinks.',
      icon: '🎉',
      cta: 'Book Now',
      link: '#apres-ski',
    },
    {
      title: 'Upgrade to Suite with Balcony',
      description:
        'Enjoy stunning mountain views and extra comfort for only $200 more.',
      icon: '🏔️',
      cta: 'Upgrade Room',
      link: '#upgrade-room',
    },
    {
      title: 'Add Premium Insurance',
      description: 'Get full coverage for peace of mind during your trip.',
      icon: '🛡️',
      cta: 'Add Insurance',
      link: '#add-insurance',
    },
    {
      title: 'Book a Private Ski Lesson',
      description:
        'Improve your skills with a certified instructor for all levels.',
      icon: '⛷️',
      cta: 'Book Lesson',
      link: '#private-lesson',
    },
  ],
};

export const resorts = [
  {
    name: 'Alpine Heights',
    description: 'Swiss Alps, Party vibe, Intermediate slopes',
    region: 'Swiss Alps',
    difficulty: 'Intermediate',
    vibe: 'Party',
    image:
      'https://www.les2alpes.com/app/uploads/les-deux-alpes/2021/02/thumbs/les2alpes-muzelle-ete-1920x960.jpg',
  },
  {
    name: 'Snowy Peaks',
    description: 'French Alps, Family friendly, Wide easy slopes',
    region: 'French Alps',
    difficulty: 'Beginner',
    vibe: 'Family',
    image:
      'https://cdn.maisonsport.com/static/images/search/resorts/val-disere.webp?w=256&=$undefined',
  },
  {
    name: 'Frost Valley',
    description: 'Austrian Alps, Luxury, Challenging runs',
    region: 'Austrian Alps',
    difficulty: 'Advanced',
    vibe: 'Luxury',
    image:
      'https://www.fall-line.co.uk/wp-content/uploads/2023/07/cool-sleeps-fall-line-skiing-sheltyers-experience.jpg',
  },
];

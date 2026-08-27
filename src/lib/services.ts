export type ServicePrice = {
  name: string;
  price: string;
  details: string;
};

export type ServicePerson = {
  name: string;
  role: string;
  image: string;
  bio: string;
  credit: string;
};

export type ServicePhoto = {
  src: string;
  alt: string;
};

export type ServiceQuote = {
  text: string;
  name: string;
  event: string;
};

export type ServiceContent = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  heroImage: string;
  heroAlt: string;
  heroPosition?: 'object-center' | 'object-top';
  previewImage: string;
  icon: 'heart' | 'sparkles' | 'music' | 'music2';
  subtitle: string;
  shortDescription: string;
  metaDescription: string;
  intro: string[];
  highlights: string[];
  pricingEyebrow: string;
  pricingTitle: string;
  prices: ServicePrice[];
  bookingNote: string;
  peopleTitle?: string;
  people?: ServicePerson[];
  genresTitle?: string;
  genres?: string[];
  photos: ServicePhoto[];
  quotes?: ServiceQuote[];
};

export const SERVICE_PAGES: ServiceContent[] = [
  {
    slug: 'planning-and-design',
    navLabel: 'Planning & Design',
    eyebrow: 'Houston Wedding Planner & Event Designer',
    title: 'Planning & Design',
    heroImage: '/services/planning/01.jpg',
    heroAlt: 'Couple styled by Fervent Designs on their wedding day',
    previewImage: '/services/planning/01.jpg',
    icon: 'heart',
    subtitle: 'Full-Service Care',
    shortDescription:
      'From full wedding planning to partial planning and wedding management — we guide you through vendor selection, design, timelines, and flawless day-of execution.',
    metaDescription:
      'Houston wedding planning and event design by Fervent Designs. Full planning, partial planning, wedding management, and micro weddings from $2,400.',
    intro: [
      'Fervent Designs, LLC is a full-service wedding planning and event design company that provides services in Houston, Texas and destination weddings abroad. We plan and execute events for any occasion, any size, and on any budget. Custom payment plans are accepted, and, yes, we travel!',
      'We are the one-stop shop for everything you need to host a beautiful, successful event. If you can dream it, we can make it come to life. We pride ourselves in our customization and our attention to detail. As our motto states, "We\'re passionate about personalizing your party!" Every aspect of your event will be tailored to fit your theme, style, colors, personality, and budget.',
      'After you book wedding management (formerly wedding coordination) or planning, you can add on any other products or services you need, and you pay only one retainer.',
    ],
    highlights: [
      'Full Wedding Planning',
      'Partial Planning',
      'Wedding Management',
      'Micro Weddings',
      'Event Planning',
      'Event Design',
      'Party Decorations',
      'Centerpieces',
      'Floral Designs',
      'Backdrops',
      'Linen',
      'Rentals',
      'DJs',
      'Saxophonist',
      'Photography',
    ],
    pricingEyebrow: 'Wedding Planning Packages',
    pricingTitle: 'Start with planning, then add on anything you need',
    prices: [
      {
        name: '"I Fervently Do" Full Wedding Planning',
        price: '$5,000+',
        details:
          'Complete planning of your wedding weekend with up to 10 monthly meetings from the time of booking. Includes everything in partial planning and wedding management.',
      },
      {
        name: '"With Passion & Love" Partial Planning',
        price: '$4,000+',
        details:
          'Vendor selections, contract negotiations, design, full timeline creation, rehearsal management, and expert planning coverage starting 3 months before your big day.',
      },
      {
        name: '"Fervent Excellence" Wedding Management',
        price: '$2,400+',
        details:
          'Coverage the last 2 months before your wedding: venue walkthrough, floor plan, complete wedding-day timeline, vendor management, ceremony rehearsal, and professional execution of the entire day.',
      },
      {
        name: 'Micro Wedding Packages',
        price: '$2,400+',
        details:
          'Affordable, convenient packages for intimate weddings with fewer than 50 guests. Customize the details to your liking.',
      },
      {
        name: '"Fervently Done" Event Planning',
        price: '$500+',
        details:
          'We handle any and everything needed to plan, design, and execute a wonderful party or event. Design pricing varies.',
      },
      {
        name: 'Retainer to Book',
        price: '$500',
        details:
          'A $500 retainer books your wedding planning or wedding management date. After that, add-on products and services are covered under one retainer.',
      },
    ],
    bookingNote:
      'Custom payment plans are accepted. Book a consultation to discuss how Fervent Designs can bless you.',
    photos: [
      {
        src: '/services/planning/01.jpg',
        alt: 'Bride and groom in a close portrait on their wedding day',
      },
      {
        src: '/services/planning/02.jpg',
        alt: 'Tall white wedding cake with crystal details on a sequin table',
      },
      {
        src: '/services/planning/03.jpg',
        alt: 'Bride and groom exchanging vows under a wooden pavilion',
      },
      {
        src: '/gallery/weddings/08.jpg',
        alt: 'Newlyweds under a glowing LOVE marquee',
      },
      {
        src: '/gallery/weddings/13.jpg',
        alt: 'Couple sharing a kiss in front of a grand estate',
      },
      {
        src: '/gallery/weddings/04.jpg',
        alt: 'Wedding party in tuxedos lined up at a Southern estate',
      },
    ],
    quotes: [
      {
        text: "Rich and her team were such a delight to work with! She was so understanding and helpful even though we had to postpone our wedding multiple times due to my husband's deployment. She always made us feel that our family comes first and everything else will fall into place. Truly world class — hire them, you can't go wrong!",
        name: 'Mrs. Harding',
        event: 'Military Bride',
      },
      {
        text: 'Fervent Designs was my first and last choice! When my hubby and I met with Richandra, we knew she was the event planner for our special day by her willingness to get to know us as a couple. Our wedding was amazing, and the staff was so attentive to our every need!',
        name: 'Mrs. Crowder',
        event: 'Bride',
      },
    ],
  },
  {
    slug: 'party-rentals',
    navLabel: 'Party Rentals',
    eyebrow: 'Backdrops, Decor & Rentals',
    title: 'Party Rentals & Backdrops',
    heroImage: '/gallery/events/08.jpg',
    heroAlt: 'Gold, black, and purple balloon backdrop with marquee numbers',
    previewImage: '/gallery/events/08.jpg',
    icon: 'sparkles',
    subtitle: 'A La Carte Decor',
    shortDescription:
      'Custom backdrops, balloon designs, centerpieces, linen, and party decor packages for birthdays, showers, graduations, and more.',
    metaDescription:
      'Party rentals and custom backdrops from Fervent Designs in Houston. Pipe and drape from $250. Party decor packages from $600.',
    intro: [
      'Due to popular demand, many of our custom backdrops and party rentals are now available a la carte for parties and events.',
      'Let us SLAY your birthday party, baby shower, bridal shower, graduation, or other special event. We can supply the decor and rentals for your celebration, including centerpieces, backdrops, sign-in table decor, linen, signage, and more.',
    ],
    highlights: [
      'Pipe & Drape',
      'Balloon Backdrops',
      'Marquee Letters',
      'Party Decor Packages',
      'Custom Signage',
      'Centerpieces',
      'Linen',
      'Table Styling',
    ],
    pricingEyebrow: 'Rental Pricing',
    pricingTitle: 'A la carte backdrops and party packages',
    prices: [
      {
        name: 'Pipe & Drape / Balloon Backdrops',
        price: '$250+',
        details:
          'Pipe and drape and balloon backdrop designs start at $250 plus tax and delivery.',
      },
      {
        name: 'Party Decor Packages',
        price: '$600+',
        details:
          'Coordinated party decor packages for birthdays, showers, graduations, and other special events.',
      },
      {
        name: 'Custom Signage, Centerpieces & Rentals',
        price: 'Custom',
        details:
          'Custom signage, centerpieces, linen, and other rentals are available. Book a consultation for a tailored quote.',
      },
    ],
    bookingNote:
      'Tax and delivery are additional on backdrop designs. Book a consultation to lock in your date.',
    photos: [
      {
        src: '/services/rentals/01.jpg',
        alt: 'Couple embracing under a sunflower floral arch with draped fabric',
      },
      {
        src: '/gallery/events/08.jpg',
        alt: 'Happy Birthday backdrop with gold and black balloons and marquee 50',
      },
      {
        src: '/gallery/events/02.jpg',
        alt: 'Black and gold table styling with disco-ball centerpiece',
      },
      {
        src: '/gallery/events/05.jpg',
        alt: 'Juneteenth stage with marquee letters, balloons, and pipe and drape',
      },
      {
        src: '/gallery/weddings/01.jpg',
        alt: 'Couple posing in front of a sequin photo-booth backdrop',
      },
      {
        src: '/gallery/events/03.jpg',
        alt: 'Custom gold-and-purple themed centerpiece styling',
      },
    ],
  },
  {
    slug: 'dj',
    navLabel: 'DJ',
    eyebrow: 'DJ & Entertainment',
    title: 'Houston DJ',
    heroImage: '/services/dj/hero.jpg',
    heroAlt: 'Guests dancing at a Fervent Designs wedding reception',
    previewImage: '/services/dj/hero.jpg',
    icon: 'music',
    subtitle: 'Keep the Floor Full',
    shortDescription:
      'Professional DJs, a high-quality sound system, and a wireless microphone — music for weddings, parties, and social events.',
    metaDescription:
      'Affordable Houston DJ services from Fervent Designs. Parties from $125/hour, weddings from $225/hour, three-hour minimum.',
    intro: [
      'Music is a key part of every celebration. We will keep your guests on the dance floor.',
      "Packages include a professional DJ, a high-quality sound system, a wireless microphone, and an extensive selection of music. You want it, we can play it. Of course, ain't no party like a Fervent Designs party!",
    ],
    highlights: [
      'Professional DJ',
      'High-Quality Sound System',
      'Wireless Microphone',
      'Emcee Available',
      'Lighting Add-Ons',
      'Kid-Friendly Sets',
    ],
    pricingEyebrow: 'DJ Packaging & Pricing',
    pricingTitle: 'Starting prices for parties and weddings',
    prices: [
      {
        name: 'Parties / Social Events',
        price: '$125+/hour',
        details:
          'Professional DJ for birthdays, showers, corporate mixers, and other social events. Three-hour minimum.',
      },
      {
        name: 'Weddings',
        price: '$225+/hour',
        details:
          'Wedding DJ coverage with a high-quality sound system, wireless microphone, and an extensive music library. Three-hour minimum.',
      },
    ],
    bookingNote:
      'Emcee, lighting, and other equipment are available for an additional fee. To book your date, a signed contract and a 50% non-refundable retainer is required. Events planned by Fervent Designs receive discounted rates on DJ services.',
    peopleTitle: 'Meet Our DJs',
    people: [
      {
        name: 'DJ Dino',
        role: 'Fervent Designs Lead DJ',
        image: '/services/dj/dino.jpg',
        bio: 'I am DJ Dino AKA "Dino", from Stafford, TX. Disk jockeying has been around my family for over 20 years, and I have been a DJ for the last 12+ years. I have had the pleasure of traveling all across Southeast Texas for events. My favorite genres are Hip-Hop, 90\'s R&B, and Classic Soul.',
        credit: 'Rodney Butler II',
      },
      {
        name: 'DJ Phire & Ice',
        role: 'Fervent Designs DJ',
        image: '/services/dj/phire.jpg',
        bio: 'I am DJ Phire & Ice from New Orleans, Louisiana. I have been DJing for 10+ years and I have performed at many weddings and corporate events. I specialize in all New Orleans culture music, oldies, old-school hip-hop, country, line dancing, and 2nd Line. If you are looking to HEAT your event up, and then COOL it down, DJ Phire & Ice is your DJ.',
        credit: 'Spartacus Brown',
      },
    ],
    genresTitle: 'Types of Music',
    genres: [
      'Hip Hop',
      'Pop',
      'Country',
      'Zydeco',
      'Classic Soul, Blues & Funk',
      'Line Dances',
      'Classical & Smooth Jazz',
      'R&B Old and New',
      'Top 40',
      'Tejano',
      'Reggae',
      'AfroBeats',
      'New Orleans Bounce',
      'Kid Friendly (Radio Edit)',
    ],
    photos: [
      {
        src: '/services/dj/hero.jpg',
        alt: 'Packed dance floor at a Fervent Designs wedding',
      },
      {
        src: '/services/dj/01.jpg',
        alt: 'Fervent Designs DJ at a wedding reception',
      },
      {
        src: '/services/dj/02.jpg',
        alt: 'DJ lighting and entertainment at a Fervent Designs event',
      },
      {
        src: '/services/dj/03.jpg',
        alt: 'DJ Dino at a Fervent Designs multicultural wedding',
      },
      {
        src: '/services/dj/04.jpg',
        alt: 'DJ Dino at a Fervent Designs Nigerian wedding',
      },
    ],
  },
  {
    slug: 'sax',
    navLabel: 'Sax',
    eyebrow: 'Sax Sounds by P-Rich',
    title: 'Houston Saxophonist',
    heroImage: '/services/sax/prich.jpg',
    heroAlt: 'P-Rich, saxophonist with Fervent Designs, holding his saxophone',
    heroPosition: 'object-top',
    previewImage: '/services/sax/prich.jpg',
    icon: 'music2',
    subtitle: 'Live Sax Sounds',
    shortDescription:
      'Live saxophone for wedding ceremonies, cocktail hour, dinner parties, galas, and private events — with a custom set list for your occasion.',
    metaDescription:
      'Houston saxophonist P-Rich with Fervent Designs. Parties from $300/hour, weddings from $400/hour. Custom set lists for any occasion.',
    intro: [
      'Saxophone is a great addition to any special event. Let our saxophonist bring the SAX SOUNDS to your wedding ceremony, cocktail hour, dinner party, gala, banquet, birthday party, or private event.',
      'Whatever your occasion, we can provide a musical presentation that your guests will appreciate and enjoy. Our saxophonist comes with professional instruments, sound equipment, microphones, and backing music to give you a wonderful and memorable experience.',
    ],
    highlights: [
      'Wedding Ceremony',
      'Cocktail Hour',
      'Dinner Parties',
      'Galas & Banquets',
      'Birthday Parties',
      'Private Events',
      'Custom Set List',
      'Alto, Tenor & Soprano',
    ],
    pricingEyebrow: 'Saxophonist Pricing',
    pricingTitle: 'Starting prices tailored to your event',
    prices: [
      {
        name: 'Parties / Social Events',
        price: '$300/initial hour',
        details:
          'Live saxophone for birthday parties, private events, galas, and other social occasions. Pricing is tailored specifically to fit your event.',
      },
      {
        name: 'Weddings',
        price: '$400/initial hour',
        details:
          'Live saxophone for your ceremony, cocktail hour, or reception. A custom set list will be developed specifically for your event.',
      },
    ],
    bookingNote:
      'To book your date, a signed contract and a non-refundable retainer of $175 is required. Events planned by Fervent Designs receive discounted rates on sax services. Email the date, time, location, and type of event to info@ferventdesigns.com.',
    peopleTitle: 'Meet Our Saxophonist',
    people: [
      {
        name: 'P-Rich',
        role: 'Sax Sounds by P-Rich',
        image: '/services/sax/prich.jpg',
        bio: 'I am P-Rich, the saxophonist from Houston, TX. I have enjoyed making sax sounds for over 30 years. I have played in several bands in the Houston area, including the Conrad Johnson Orchestra and Kashmere Reunion Stage Band, and also as a solo artist. I play alto, tenor, and soprano and have a constantly expanding repertoire that includes Soul, R&B, Jazz, Gospel, Rock, Reggae, Country, Pop, Holiday Music, and more.',
        credit: 'Richard Nickerson',
      },
    ],
    genresTitle: 'Repertoire',
    genres: [
      'Soul',
      'R&B',
      'Jazz',
      'Gospel',
      'Rock',
      'Reggae',
      'Country',
      'Pop',
      'Holiday Music',
    ],
    photos: [
      {
        src: '/services/sax/prich.jpg',
        alt: 'P-Rich seated with his saxophone',
      },
    ],
  },
];

export const SERVICE_LINKS = SERVICE_PAGES.map((service) => ({
  label: service.navLabel,
  href: `/services/${service.slug}`,
}));

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}

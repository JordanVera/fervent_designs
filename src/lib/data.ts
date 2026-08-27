export const BRAND = {
  pink: '#ee85d4',
  pinkHover: '#f5a8e8',
  pinkLight: '#fce4f7',
} as const;

export const COMPANY = {
  name: 'Fervent Designs',
  legalName: 'Fervent Designs, LLC',
  tagline: "We're passionate about personalizing your party!",
  motto: 'Let us SLAY your day, YOUR way!',
  phone: '(281) 786-4627',
  phoneHref: '+12817864627',
  email: 'info@FerventDesigns.com',
  address: '8300 Cypress Creek Pkwy, Suite 450',
  city: 'Houston, TX',
  founder: 'Richandra',
  founderNickname: 'Rich',
  founderTitle: 'Owner & Lead Event Planner',
  instagram: 'https://instagram.com/ferventdesigns/',
  instagramHandle: '@ferventdesigns',
  facebook: 'https://www.facebook.com/ferventdesigns',
  website: 'https://www.ferventdesigns.com',
  knotUrl: 'https://www.theknot.com/marketplace/fervent-designs-houston-tx-964892',
  yearsExperience: 15,
  serviceAreas: ['Houston', 'Greater Houston', 'Destination Weddings', 'Texas & Abroad'],
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'weddings', label: 'Fervent Weddings' },
  { id: 'events', label: 'Featured Events' },
  { id: 'videos', label: 'Wedding Videos' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

const weddingImages = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/weddings/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Fervent Designs wedding ${i + 1}`,
  category: 'weddings' as const,
}));

const eventImages = Array.from({ length: 12 }, (_, i) => ({
  id: 100 + i + 1,
  src: `/gallery/events/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Fervent Designs featured event ${i + 1}`,
  category: 'events' as const,
}));

const videoImages = [
  {
    id: 201,
    src: '/gallery/videos/01.jpg',
    alt: 'Nyelle & Jared Highlight Video',
    category: 'videos' as const,
    title: 'Nyelle & Jared Highlight Video',
  },
  {
    id: 202,
    src: '/gallery/videos/02.jpg',
    alt: 'Myriam & MJ Wedding Teaser',
    category: 'videos' as const,
    title: 'Myriam & MJ Wedding Teaser',
  },
  {
    id: 203,
    src: '/gallery/videos/03.jpg',
    alt: 'Ambriana and Jeffery Highlight',
    category: 'videos' as const,
    title: 'Ambriana & Jeffery Highlight',
  },
];

export const GALLERY_IMAGES = [...weddingImages, ...eventImages, ...videoImages];

export const SERVICES = [
  {
    id: 'planning',
    title: 'Wedding Planning',
    subtitle: 'Full-Service Care',
    description:
      'From "I Fervently Do" full planning to partial planning and wedding management — we guide you through vendor selection, design, timelines, and flawless day-of execution. One retainer covers everything you add on.',
    image: '/gallery/weddings/01.jpg',
    icon: 'heart',
  },
  {
    id: 'design',
    title: 'Event Design & Decor',
    subtitle: 'Custom Creations',
    description:
      'Florals, centerpieces, backdrops, linen, signage, and rentals — all designed to your theme, colors, and budget. Themed, destination, and multicultural weddings are our specialty. No cookie-cutter work here.',
    image: '/gallery/events/05.jpg',
    icon: 'sparkles',
  },
  {
    id: 'one-stop',
    title: 'One-Stop Shop',
    subtitle: 'Everything In-House',
    description:
      'Add DJ, photography, videography, stationery, favors, embroidery, and more — all through Fervent Designs with one team and one vision. If you can dream it, we can make it come to life.',
    image: '/gallery/home-01.jpg',
    icon: 'briefcase',
  },
];

export const PACKAGES = [
  {
    name: '"I Fervently Do" Full Wedding Planning',
    price: '$5,000+',
    description:
      'Complete planning of your wedding weekend with up to 10 monthly meetings from booking.',
  },
  {
    name: '"With Passion & Love" Partial Planning',
    price: '$4,000+',
    description:
      'Vendor selections, contract negotiations, design, timeline creation, and expert coverage starting 3 months out.',
  },
  {
    name: '"Fervent Excellence" Wedding Management',
    price: '$2,400+',
    description:
      'Coverage the last 2 months, venue walkthrough, floor plans, vendor management, rehearsal, and full day-of execution.',
  },
];

export const ABOUT_CONTENT = {
  intro:
    'Fervent Designs, LLC is a full-service wedding planning and event design company providing services in Houston, Texas and destination weddings abroad. We plan and execute events for any occasion, any size, and on any budget.',
  body: 'We are the one-stop shop for everything you need to host a beautiful, successful event. If you can dream it, we can make it come to life! We pride ourselves in our customization and our attention to detail.',
  story:
    '"Fervent" means having or displaying a passionate intensity — a nickname given to Richandra in college by her sorority sisters. It describes the sincerity and enthusiasm she brings when she truly cares about a cause, person, or goal. That passion is woven into every event we design.',
  closing:
    'Themed weddings, destination weddings, and multicultural weddings are our specialty. Every detail will be tailored to your needs, vision, and budget. Custom payment plans are accepted, and yes, we travel!',
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mrs. Harding',
    event: 'Military Bride',
    rating: 5,
    text: 'Rich and her team were such a delight to work with! She was so understanding and helpful even though we had to postpone our wedding multiple times due to my husband\'s deployment. She always made us feel that our family comes first and everything else will fall into place. From cake vendors to price changes from our venue, she had our back through everything. Truly world class — hire them, you can\'t go wrong!',
  },
  {
    id: 2,
    name: 'Mrs. Crowder',
    event: 'Bride',
    rating: 5,
    text: 'Fervent Designs was my first and last choice! When my hubby and I met with Richandra, we knew she was the event planner for our special day by her willingness to get to know us as a couple. During the planning process, she was passionate, organized, timely, creative, and had our best interest at heart. Our wedding was amazing, and the staff was so attentive to our every need! Don\'t hesitate to hire this God-sent company.',
  },
  {
    id: 3,
    name: 'Client Review',
    event: 'Destination Wedding',
    rating: 5,
    text: 'From our first meeting, Rich made sure that everything and everyone felt special. She secured an upgraded suite, organized all of the details, and was attentive to all of our needs throughout planning — up until the very end! Richandra and her staff are professional, highly organized, and will be attentive to all of your wedding needs. If you want to schedule a consultation, this is your last stop!',
  },
];

export const AWARDS = [
  { id: 1, src: '/awards/bow-2019.png', alt: 'Best of Weddings 2019' },
  { id: 2, src: '/awards/bow-2018.png', alt: 'Best of Weddings 2018' },
  { id: 3, src: '/awards/knot.png', alt: 'The Knot Recognition' },
  { id: 4, src: '/awards/houston.png', alt: 'Houston Wedding Recognition' },
  { id: 5, src: '/awards/tg-certified.png', alt: 'Certified Wedding Professional' },
  { id: 6, src: '/awards/byblack.png', alt: 'Buy Black Recognition' },
  { id: 7, src: '/awards/abc.png', alt: 'Association of Bridal Consultants' },
];

export const SERVICE_OFFERINGS = [
  'Full & partial wedding planning',
  'Wedding management / coordination',
  'Micro weddings & intimate events',
  'Floral designs & centerpieces',
  'Decor, backdrops & rentals',
  'Linen & table styling',
  'DJ & entertainment',
  'Photography & videography',
  'Invitations & stationery',
  'Souvenirs, favors & embroidery',
];

export const WEDDING_VIDEOS = [
  {
    id: 1,
    title: 'Nyelle & Jared Highlight Video',
    date: 'June 1, 2024',
    thumbnail: '/gallery/videos/01.jpg',
  },
  {
    id: 2,
    title: 'Myriam & MJ Wedding Teaser',
    date: 'Wedding Teaser',
    thumbnail: '/gallery/videos/02.jpg',
  },
  {
    id: 3,
    title: 'Ambriana & Jeffery Highlight',
    date: 'Wedding Highlight',
    thumbnail: '/gallery/videos/03.jpg',
  },
];

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
  founderFullName: 'Richandra Nickerson-Ukpong',
  founderNickname: 'Rich',
  founderTitle: 'Founder & Owner',
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
  pageEyebrow: 'Houston Wedding Planner & One-Stop Shop',
  pageTitle: 'My Story Led To Our Story',
  story: [
    'I am Richandra Nickerson-Ukpong, the founder and owner of Fervent Designs, LLC. I am a native Houstonian. With over 20 years in the event industry, I have planned thousands of events and hundreds of weddings (literally). I love helping people! Outside of work, I am a devoted wife, mother, daughter, and sister. I enjoy spending time with my husband, hanging out with my huge family, and spoiling my beautiful daughters and nieces. As a proud member of Alpha Kappa Alpha Sorority, Inc., member of multiple organizations, and business coach, I spend lots of time giving back to the community.',
    'After graduating with honors in Psychology and English at the University of Houston, I spent over 10 years in a fulfilling career managing corporate training, communications, and events for global oil and gas companies. Then one day, everything changed when the man God sent for me proposed. Like most girls, I had been planning my dream wedding in my head for years. But reality quickly set in: I was planning two weddings, the traditional Nigerian wedding and the American wedding. Unfortunately, like many, I could not get my vision to match my budget, especially since we were having TWO weddings. Therefore, Plan B was quickly implemented: DIY (Do It Yourself). I designed nearly every element of both of my multi-cultural weddings. However, I listened to the best advice ever: I hired a Day of Wedding Coordinator, especially to ensure that everything went as planned on my big day. Of course, both my weddings turned out phenomenal! Shortly afterwards, my coordinator gave me a compliment that sparked the seed for Fervent Designs.',
    'Soon, friends and family began demanding that I plan their events. Before long, it took over all of my free time, but surprisingly, I absolutely loved it! A few of my early customers insisted that I make a business out of it. After hearing it more times than I could count, I thought, "Hmm. Maybe they are on to something here..." After lots of preparation, planning, and of course, FERVENT prayers, Fervent Designs was born! I finally stepped out on faith and decided to follow my dreams and become a full-time entrepreneur. I am so glad I did because I have found my calling! That was over a decade ago! (Wow, time flies!) Today, Fervent Designs allows me to travel the world doing what I love — crafting unique events that create lasting memories for our clients and their families. Who knew we would grow to become an award-winning full-service event firm!?!',
    'Weddings, birthdays, showers, and the like are celebrations that mark life\'s major milestones. Planning these events can be stressful, overwhelming, and quite time-consuming. Many people are not aware of the resources, time, and logistics that go into carrying out beautiful, safe events. But I am, and I DO! I have been blessed to have been on all sides of the equation: I have been the event planner, the bride, the client, the middle man, and now the wedding planner. I have seen it all! I help take the stress out of planning so that YOU can relax and enjoy the occasion. Yes, you deserve to be a guest at your event! There is no better resource for you to have in your corner than Fervent Designs. Bonus: I am an accredited travel agent. My team and I would be honored to serve you!',
  ],
  ourName: {
    title: 'Our Name',
    definition:
      '"Fervent" is an adjective that means "having or displaying a passionate intensity."',
    synonyms:
      'Synonyms include passionate, intense, vehement, ardent, lively, sincere, and fervid.',
    body: '"Fervent" is a nickname that was given to me in college by my sorority sisters. It describes my work ethic and the sincerity and enthusiasm I display when I truly care about a cause, person, concept, goal, or idea. If I love or care about something, I give it my all, and I aim to do it right! "Fervent" was so fitting, so I had to incorporate it into my business name.',
  },
  whyChooseUs: {
    title: 'Why Choose Us',
    paragraphs: [
      'The name says it all. We are FERVENT about your DESIGNS and celebration! Each event receives an abundance of intense professional care, thought, and effort. We love people, planning, organizing, and creating custom designs. And we love LOVE, so weddings and babies are our knack. Custom, unique themed designs are our specialty. You will not see any cookie-cutter work here, and many of our designs are hand-made.',
      'The entire Fervent Designs team shares this passion for unique designs coupled with excellence, professionalism, and personalization. We will work together to make your event a success. Every detail will be tailored to your needs, theme, and taste. And we always strive to stay within budget. Whatever we do, we do it FERVENTLY with passion and love!',
      'Fervent Designs will bring your vision to reality. Most clients admit that we even surpassed their expectations by adding elements to their designs that they never imagined. We hope to provide you with this same level of service, dedication, creativity, and satisfaction.',
      'This business was created because I wanted to do something that I enjoy, I excel at, and that has a lasting impact on people\'s lives. Designs and events are my passion, and my customers are like my family. Join my family, and let Fervent Designs coordinate your celebration. All you will need to do is enjoy yourself, and make more precious memories. Let us bless you.',
    ],
    signature: 'Richandra',
  },
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
  {
    id: 4,
    name: 'Mrs. Wingate',
    event: '10 Year Vow Renewal',
    rating: 5,
    text: 'I recently had the privilege of having Fervent Design handle my 10 year vow renewal, and they WERE AMAZING! If you\'re on the fence about getting a planner, just jump. She was prepared for so many things I would have NEVER thought about. Her ENTIRE team was on point. Richandra works very well with ALL the vendors! And she knows THEIR JOBS and makes sure it gets done. She will definitely make sure your vision becomes a REALITY!',
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

// Exhibition details and artwork content are editable here. The SEO title and description are
// also inserted into index.html by Vite, before React runs.
const title = 'Loose Ends';
const dates = '27 November 2026';

export const exhibition = {
  title,
  dates,
  seoDescription: `${title}, ${dates}. An exhibition exploring the quiet relationship between material, gesture and space. Discover the works and contact the gallery for enquiries.`,
  logo: 'logo.svg',
  venue: 'Field Gallery',
  venueLogo: 'venue-logo.svg',
  copyrightYear: 2026,
  descriptionGR: [
    `Η έκθεση ${title} εξερευνά τη λεπτή σχέση ανάμεσα στην ύλη, τη χειρονομία και τον χώρο. Μέσα από διαφορετικά μέσα και υφές, τα έργα αναζητούν το σημείο όπου η μορφή παύει να είναι σταθερή και γίνεται ανοιχτή σε νέες αναγνώσεις.`,
    'Μια πρόσκληση να παρατηρήσουμε όσα βρίσκονται ανάμεσα στο οικείο και το άγνωστο, το απτό και το αφηρημένο.',
  ],
  descriptionEN: [
    `${title} explores the quiet relationship between material, gesture and space. Working across different media and textures, the exhibition considers the point at which form ceases to be fixed and opens itself to new readings.`,
    'An invitation to look more closely at what lies between the familiar and the unknown, the tangible and the abstract.',
  ],
  contact: {
    text: 'For enquiries about the works or to arrange a visit, please get in touch.',
    email: 'hello@example.com',
    phone: '+30 210 000 0000',
    phoneHref: '+302100000000',
  },
};

// Image paths are relative to public/. Set subtitle or price to an empty
// string to hide that line. Prices are display strings, not numeric values.
export const artworks = [
  { id: 'quiet-interval', image: 'artworks/quiet-interval.svg', alt: 'Abstract composition with overlapping warm clay and cream forms', title: 'A Quiet Interval', subtitle: 'Study I', medium: 'Acrylic on canvas', dimensions: '60 × 80 cm', year: '2026', price: '€650' },
  { id: 'soft-architecture', image: 'artworks/soft-architecture.svg', alt: 'Charcoal geometric shapes and fine graphite lines on pale paper', title: 'Soft Architecture', subtitle: '', medium: 'Graphite and charcoal on paper', dimensions: '42 × 59.4 cm', year: '2025', price: '€420' },
  { id: 'where-light-rests', image: 'artworks/where-light-rests.svg', alt: 'Abstract blue and ochre shapes with a textured dark edge', title: 'Where Light Rests', subtitle: 'From the series In Passing', medium: 'Oil on linen', dimensions: '70 × 70 cm', year: '2026', price: '€900' },
  { id: 'trace-of-a-gesture', image: 'artworks/trace-of-a-gesture.svg', alt: 'Loose black ink gestures on an off-white ground', title: 'Trace of a Gesture', subtitle: '', medium: 'Ink on paper', dimensions: '30 × 40 cm', year: '2024', price: '€280' },
];

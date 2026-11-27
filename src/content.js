const title = 'Loose Ends';
const dates = '27–29 November 2026';
const location = 'Athens, Greece';
const artist = {
  name: 'Stelios Chatzivasileiou',
  email: 'stelioschatzivasileiou@gmail.com',
  phone: '+30 693 9953058',
  phoneHref: '+306939953058',
  instagram: { handle: '@ste_lis_', url: 'https://www.instagram.com/ste_lis_/' },
};
const gallery = {
  name: 'Imposter Studio',
  email: 'studio.imposter@gmail.com',
  logo: 'logos/imposter-studio-logo.png',
  instagram: { handle: '@studio.imposter', url: 'https://www.instagram.com/studio.imposter/' },
};

export const exhibition = {
  title,
  dates,
  location,
  logo: 'logos/loose-ends-logo.png',
  artist,
  gallery,
  copyrightYear: 2026,
  descriptionGR: [
    "Η έκθεση Loose Ends παρουσιάζει το τρέχον σημείο μιας σπουδής του χώρου και της προοπτικής που ξεκίνησε το 2019 και έχει επηρεαστεί έντονα από την αρχιτεκτονική, την τέχνη του δρόμου και το γκράφιτι, καθώς και από μεγάλες ζωγραφικές συνθέσεις, των οποίων στόχος είναι η δημιουργία μιας εικόνας σε απόλυτη ισορροπία.",
    "Στο βασικό τμήμα της έκθεσης, στα έργα με ακρυλικά και ξηρά παστέλ, αφετηρία γίνεται η μορφή ενός αφηρημένου τόπου. Σε αυτόν τοποθετούνται ένα ή περισσότερα αντικείμενα, τα οποία ορίζονται από την αξία του χρώματος και της υφής τους. Η σύνθεση ολοκληρώνεται με τη γραμμή, που βρίσκεται εκεί για να σπάσει την αφηρημένη φόρμα και να φέρει τους θεατές σ’ έναν νέο, πιο οικείο τόπο. Η αλληλεπίδραση των τριών σταδίων δημιουργίας είναι το κύριο αντικείμενο αυτών των έργων, ενώ η αντίληψη των θεατών έρχεται να δώσει μία επιπλέον διάσταση στη σύνθεση.",
    "Το όνομα της έκθεσης προκύπτει από την ανάγκη να συγχωνευθούν σ’ έναν ενιαίο όγκο δουλειάς οι επιμέρους πρακτικές οι οποίες έχουν απασχολήσει αυτή τη μελέτη, μεταξύ των οποίων η ζωγραφική, η ψηφιακή τέχνη, η χαρακτική, η ξυλουργική και το κολλάζ. Ως μία ενδοσκόπηση στην προσπάθεια αυτή έρχεται το δεύτερο τμήμα της έκθεσης: σε αυτό παρουσιάζονται επιλεγμένα έργα κολλάζ, στα οποία σχέδια με μαρκαδόρο και στυλό πλαισιώνονται από διαφορετικές υφές και ρετάλια παλιότερων σχεδίων που «απέτυχαν», δίνοντάς τους δεύτερη ζωή.",
  ],
  descriptionEN: [
    "The exhibition Loose Ends presents the current point of a study of space and perspective that began in 2019 and has been strongly influenced by architecture, street art and graffiti, as well as by large-scale painted compositions, whose aim is the creation of an image in absolute balance.",
    "In the main part of the exhibition, the works in acrylic and dry pastel, the starting point is the form of an abstract place. One or more objects are placed within it, defined by the value of their color and texture. The composition is completed by the line, which is there to break the abstract form and bring viewers to a new, more familiar place. The interaction of these three stages of creation is the main subject of these works, while the viewers' perception adds a further dimension to the composition.",
    "The name of the exhibition arises from the need to merge into a single body of work all the individual practices that have occupied this study, among them painting, digital art, printmaking, woodworking and collage. As a moment of introspection on this endeavor, the second part of the exhibition presents selected collage works, in which drawings in marker and pen are framed by different textures and scraps of older drawings that \"failed,\" giving them a second life.",
  ],
};

export const artworks = [
  { id: 'big-sq', image: 'artworks/big-sq.jpg', alt: 'Abstract composition of blue, green and red geometric forms with white linework', title: 'Big Sq', medium: 'Acrylic and dry pastel on canvas', dimensions: '100 × 100 cm', price: '€870', width: 2492, height: 2519 },
  { id: 'big-hor', image: 'artworks/big-hor.jpg', alt: 'Elongated purple geometric structure on a red, blue and grey background', title: 'Big Hor', medium: 'Acrylic and dry pastel on canvas', dimensions: '100 × 50 cm', price: '€650', width: 2523, height: 1257 },
  { id: 'ver-orange', image: 'artworks/ver-orange.jpg', alt: 'Tall orange geometric form in a grey-blue space outlined in white', title: 'Ver Orange', medium: 'Acrylic and dry pastel on wood panel', dimensions: '28 × 47 cm', price: '€350', width: 1936, height: 3297 },
  { id: 'ver-blue', image: 'artworks/ver-blue.jpg', alt: 'Tall blue geometric structure with white linework and a yellow circle near its base', title: 'Ver Blue', medium: 'Acrylic and dry pastel on wood panel', dimensions: '25 × 50 cm', price: '€330', width: 1893, height: 3804 },
  { id: 'hor-green', image: 'artworks/hor-green.jpg', alt: 'White folded forms and blue shapes against a green background', title: 'Hor Green', medium: 'Acrylic and dry pastel on canvas', dimensions: '45 × 35 cm', price: '€330', width: 4304, height: 3262 },
  { id: 'hor-small', image: 'artworks/hor-small.jpg', alt: 'Long red and purple geometric structure with fine white lines', title: 'Hor Small', medium: 'Acrylic and dry pastel on wood panel', dimensions: '40 × 11 cm', price: '€230', width: 3492, height: 987 },
  { id: 'small-sq', image: 'artworks/small-sq.jpg', alt: 'White angular forms over muted pink and purple shapes, with a red-orange circle', title: 'Small Sq', medium: 'Acrylic and dry pastel on wood panel', dimensions: '20 × 20 cm', price: '€180', width: 2456, height: 2478 },
  { id: 'collage-1', image: 'artworks/collage-1.jpg', alt: 'Paper collage of blue, cream, yellow and black shapes with printed text', title: 'Collage 1', medium: 'Marker, pen and paper collage on wood panel', dimensions: '13 × 15 cm', price: '€85', width: 2053, height: 2277 },
  { id: 'collage-2', image: 'artworks/collage-2.jpg', alt: 'Vertical paper collage of grey, blue, green and burgundy fragments', title: 'Collage 2', medium: 'Marker, pen and paper collage on wood panel', dimensions: '11 × 15 cm', price: '€80', width: 1832, height: 2387 },
  { id: 'collage-3', image: 'artworks/collage-3.jpg', alt: 'Vertical paper collage with printed text, pale blue and black fragments', title: 'Collage 3', medium: 'Marker, pen and paper collage on wood panel', dimensions: '9 × 13 cm', price: '€65', width: 1634, height: 2286 },
  { id: 'collage-hor-sm', image: 'artworks/collage-hor-sm.jpg', alt: 'Horizontal collage of striped paper, colored blocks and red pen lines', title: 'Collage Hor Sm', medium: 'Marker, pen and paper collage on wood panel', dimensions: '9 × 5 cm', price: '€45', width: 1401, height: 732 },
  { id: 'collage-sq-1', image: 'artworks/collage-sq-1.jpg', alt: 'Small pale paper collage with black angular lines and a turquoise rectangle', title: 'Collage Sq 1', medium: 'Marker, pen and paper collage on wood panel', dimensions: '5 × 5 cm', price: '€40', width: 742, height: 753 },
  { id: 'collage-sq-2', image: 'artworks/collage-sq-2.jpg', alt: 'Small paper collage of blue, black, purple and grey rectangles with pen marks', title: 'Collage Sq 2', medium: 'Marker, pen and paper collage on wood panel', dimensions: '5 × 5 cm', price: '€40', width: 781, height: 773 },
];

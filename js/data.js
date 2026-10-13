// All site content lives here — a single source of truth for services, fees,
// opening hours and contact details, taken from the current fairviewdentalclinic.ie.

export const clinic = {
  name: 'Fairview Dental Clinic',
  tagline: 'Family dentistry · Dublin 3',
  phone: '01 833 8985',
  phoneHref: 'tel:+35318338985',
  email: 'reception@fairviewdentalclinic.ie',
  addressLines: ['21 Fairview', 'Dublin 3', 'D03 K4H0'],
  addressText: '21 Fairview, Dublin 3, D03 K4H0',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fairview+Dental+Clinic+21+Fairview+Dublin+3+D03+K4H0',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Fairview+Dental+Clinic+21+Fairview+Dublin+3+D03+K4H0',
  mapEmbed: 'https://www.google.com/maps?q=Fairview+Dental+Clinic,+21+Fairview,+Dublin+3,+D03+K4H0&z=16&output=embed',
  rating: { score: '4.7', count: 79, source: 'Google' },
  instagram: 'https://www.instagram.com/fairviewdentalclinic__/',
  officialSite: 'https://www.fairviewdentalclinic.ie',
};

// day: 0 = Sunday … 6 = Saturday. open/close in minutes after midnight (Irish time).
export const hours = [
  { day: 1, label: 'Monday', text: '9am – 5.30pm', open: 540, close: 1050 },
  { day: 2, label: 'Tuesday', text: '8am – 7pm', open: 480, close: 1140 },
  { day: 3, label: 'Wednesday', text: '8am – 7pm', open: 480, close: 1140 },
  { day: 4, label: 'Thursday', text: '8am – 5.30pm', open: 480, close: 1050 },
  { day: 5, label: 'Friday', text: '9am – 5.30pm', open: 540, close: 1050 },
  { day: 6, label: 'Saturday', text: 'Closed' },
  { day: 0, label: 'Sunday', text: 'Closed' },
];

export const nav = [
  { label: 'Home', path: '' },
  { label: 'About Us', path: 'about' },
  { label: 'Our Team', path: 'team' },
  { label: 'Services', path: 'services' },
  { label: 'Fees', path: 'fees' },
  { label: 'Contact', path: 'contact' },
];

export const highlights = [
  { icon: 'clock', title: 'Open until 7pm', text: 'On Tuesdays and Wednesdays, from 8am.' },
  { icon: 'alert', title: 'Emergency appointments', text: 'Kept free every day for new and existing patients.' },
  { icon: 'badge', title: 'PRSI, VHI and DeCare', text: 'Free PRSI exam for eligible patients.' },
  { icon: 'bus', title: 'Bus stop outside', text: 'Fairview Park, served by 15 routes.' },
];

export const team = [
  {
    name: 'Dr Aoife Lynch',
    role: 'Dentist',
    initials: 'AL',
    quals: 'University College Cork, 2018 · Dip PCD RCSI · MFD RCSI',
    bio: [
      'A native of Tipperary, Aoife studied Dentistry at University College Cork, graduating in 2018. She then worked as a general dentist in Kent, England, before moving back to Dublin in 2020 to continue in general practice.',
      'Alongside general practice, Aoife took up a teaching position on the paediatric clinic at the Dublin Dental Hospital, Trinity College Dublin. She has a passion for maintaining and promoting children’s oral health and wellbeing.',
    ],
    outside: 'Outside work: running, pilates, reading, friends and family.',
  },
  {
    name: 'Dr Aidan Ahern',
    role: 'Dentist',
    initials: 'AA',
    quals: 'University College Cork, 2018 · Dip PCD RCSI · MFD RCSI',
    bio: [
      'Aidan studied Dentistry in his home county at University College Cork, graduating with Aoife in 2018. He gained valuable experience as a general dentist on the NHS in Essex, then moved back to Dublin in 2020 to continue in general practice.',
      'He strives to provide a relaxed and calming environment for anxious patients.',
    ],
    outside: 'Outside work: training for his second marathon, Man Utd and Irish rugby.',
  },
];

export const staff = [
  { name: 'Patrick Donoghue', role: 'Receptionist', initials: 'PD' },
  { name: 'Oleksandra Ouardi', role: 'Dental Nurse', initials: 'OO' },
];

export const aboutPillars = [
  { icon: 'home', title: 'Over 20 years in Fairview', text: 'Fairview Dental Clinic has been proudly serving the people of Fairview for more than two decades.' },
  { icon: 'sparkles', title: 'Newly refurbished', text: 'Under new ownership since December 2022, with a refurbished clinic to welcome you.' },
  { icon: 'book', title: 'Always learning', text: 'Both dentists are Members of the Faculty of Dentistry, RCSI, and regularly attend courses to further their knowledge.' },
  { icon: 'heart', title: 'Care that starts with listening', text: 'Addressing your concerns and a thorough examination are the foundation of excellent dental care.' },
];

// Services — wording adapted from the practice's "Our Services" section.
export const services = [
  {
    id: 'exams', icon: 'search', title: 'Routine exams',
    short: 'Thorough check-ups that start with your concerns.',
    body: [
      'Addressing our patients’ concerns and providing high-quality assessments is of utmost importance to us. We believe a thorough examination is fundamental to excellent dental care.',
      'You may be entitled to a free PRSI examination at our clinic. Our reception team can check your eligibility for you.',
    ],
    fee: 'Exam €60 · PRSI exam, scale & polish €15 if eligible',
  },
  {
    id: 'hygiene', icon: 'droplet', title: 'Dental hygiene',
    short: 'Healthy gums for a healthy mouth and body.',
    body: [
      'Recent research has linked gum disease to many other diseases, such as heart disease and diabetes.',
      'We believe healthy gums are not just important for a healthy mouth, but for your overall health and wellbeing.',
    ],
    fee: 'Scale & polish €85',
  },
  {
    id: 'children', icon: 'smile', title: 'Children’s dentistry',
    short: 'Gentle care for young smiles.',
    body: [
      'Dr Aoife Lynch has a passion for maintaining and promoting children’s oral health and wellbeing, and has taught on the paediatric clinic at the Dublin Dental Hospital, Trinity College Dublin.',
    ],
    fee: 'Ask reception',
  },
  {
    id: 'fillings', icon: 'tooth', title: 'Fillings & dentures',
    short: 'White fillings, plus metal and plastic dentures.',
    body: [
      'We provide white fillings to rebuild teeth damaged by decay or other injuries.',
      'We also provide both metal and plastic dentures to replace missing teeth.',
    ],
    fee: 'Fillings from €180 · dentures from €800',
  },
  {
    id: 'crowns', icon: 'crown', title: 'Crowns & veneers',
    short: 'Protect weakened teeth or change their shape and shade.',
    body: [
      'Crowns protect and improve the appearance of weakened and broken teeth.',
      'Veneers can be used to change the shape and shade of your teeth.',
    ],
    fee: 'from €950',
  },
  {
    id: 'emergency', icon: 'alert', title: 'Emergency dentistry',
    short: 'Appointments kept free every day for emergencies.',
    body: [
      'We keep a number of appointments each day for the emergency dental needs of new and existing patients. Call reception to arrange one.',
    ],
    fee: 'Emergency assessment €60',
  },
  {
    id: 'whitening', icon: 'sun', title: 'Teeth whitening',
    short: 'A safe, effective way to brighten your smile.',
    body: [
      'Teeth whitening is a safe and effective way to brighten your smile.',
    ],
    fee: 'Ask reception',
  },
  {
    id: 'invisalign', icon: 'aligner', title: 'Invisalign',
    short: 'Clear, removable aligners with no wires.',
    body: [
      'Invisalign is a clear aligner system for straightening your teeth. The aligners are discreet and removable at any time, without any wires.',
      'Book a consultation to find out if Invisalign is right for you.',
    ],
    fee: 'Price on enquiry',
  },
  {
    id: 'aesthetics', icon: 'star', title: 'Facial aesthetics',
    short: 'Anti-wrinkle injections, with a free consultation.',
    body: [
      'Anti-wrinkle injections are one of the safest and most popular treatments for reducing facial wrinkles and fine lines.',
      'We provide free consultations to help you discover the right treatment options for you.',
    ],
    fee: 'from €150 · free consultation',
  },
];

// Fees — from the practice's current fee guide (fairviewdentalclinic.ie/fee-guide). Guide prices only.
export const feeGroups = [
  {
    id: 'general', title: 'General', icon: 'search',
    items: [
      ['PRSI exam, scale and polish (if eligible)', '€15'],
      ['Exam / emergency assessment', '€60'],
      ['Scale and polish', '€85'],
      ['Small X-ray', '€30'],
      ['OPG X-ray', '€95'],
    ],
  },
  {
    id: 'hygienist', title: 'Hygienist', icon: 'droplet',
    items: [
      ['30-minute hygienist appointment', '€85'],
      ['60-minute hygienist appointment', '€170'],
    ],
  },
  {
    id: 'fillings', title: 'Fillings', icon: 'tooth',
    items: [
      ['White filling', 'from €180'],
      ['Silver filling', 'from €180'],
    ],
  },
  {
    id: 'crowns', title: 'Crowns & veneers', icon: 'crown',
    items: [
      ['Crowns and veneers', 'from €950'],
    ],
  },
  {
    id: 'root-canal', title: 'Root canal treatment', icon: 'root',
    items: [
      ['Front tooth', '€750'],
      ['Side tooth', '€750'],
      ['Back tooth', '€850'],
    ],
  },
  {
    id: 'extractions', title: 'Extractions', icon: 'minus',
    items: [
      ['Routine extraction', 'from €180'],
      ['Surgical extraction', '€180 – €250'],
    ],
  },
  {
    id: 'dentures', title: 'Dentures', icon: 'smile',
    items: [
      ['Plastic partial denture', 'from €800'],
      ['Plastic full denture (top or bottom)', 'from €800'],
      ['Plastic full dentures (top and bottom)', 'from €1,600'],
      ['Metal denture', 'from €1,400'],
    ],
  },
  {
    id: 'invisalign', title: 'Invisalign', icon: 'aligner',
    items: [
      ['Invisalign clear aligners', 'Price on enquiry'],
    ],
  },
  {
    id: 'aesthetics', title: 'Facial aesthetics', icon: 'star',
    items: [
      ['Consultation', 'Free'],
      ['One area', '€150'],
      ['Two areas', '€250'],
      ['Three areas', '€300'],
    ],
  },
];

export const savings = [
  { title: 'PRSI patients', text: 'Eligible patients pay €15 for an exam, scale and polish. Reception can check your eligibility for you.' },
  { title: 'VHI and DeCare', text: 'We are a member of the VHI Dental and DeCare Dental networks.' },
  { title: 'Free aesthetics consultation', text: 'Talk through your options for anti-wrinkle treatment at no cost.' },
];

export const feeNote = 'All prices are a guide and may vary once we have seen your case. If you are unsure about anything, please call us on 01 833 8985 to discuss your treatment.';

export const areas = {
  walk: ['Fairview', 'Marino', 'Clontarf', 'Ballybough', 'Donnycarney', 'Killester'],
  drive: ['Drumcondra', 'Artane', 'East Wall', 'Beaumont'],
};

export const faqs = [
  { q: 'How do I book an appointment?', a: 'Call reception on <a href="tel:+35318338985">01 833 8985</a> or email <a href="mailto:reception@fairviewdentalclinic.ie">reception@fairviewdentalclinic.ie</a>. We’re open until 7pm on Tuesdays and Wednesdays.' },
  { q: 'I have a dental emergency. Can you see me?', a: 'We keep a number of appointments each day for the emergency dental needs of new and existing patients. Please call reception on <a href="tel:+35318338985">01 833 8985</a>. An emergency assessment is €60.' },
  { q: 'Am I entitled to a free PRSI exam?', a: 'You may be. Our reception team can check your eligibility for you. Eligible patients pay €15 for an exam, scale and polish.' },
  { q: 'Do you accept VHI and DeCare dental cover?', a: 'We are a member of the VHI Dental and DeCare Dental networks.' },
  { q: 'I get nervous at the dentist. Can you help?', a: 'Yes. Dr Aidan Ahern strives to provide a relaxed and calming environment for anxious patients. Let us know when you book.' },
  { q: 'How do I get there, and is there parking?', a: 'The Fairview Park bus stop is just outside our door and is served by 15 Dublin Bus routes, including the H1, H2 and H3. There is also ample on-street parking.' },
];

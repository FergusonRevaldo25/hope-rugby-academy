export type Program = {
  ageRange: string;
  name: string;
  focus: string;
};

export const PROGRAMS: Program[] = [
  { ageRange: "U8", name: "Under 8", focus: "Introduction to rugby through fun games and basic skills." },
  { ageRange: "U10", name: "Under 10", focus: "Building fundamental skills, teamwork, and game awareness." },
  { ageRange: "U12", name: "Under 12", focus: "Developing technical skills and tactical understanding." },
  { ageRange: "U14", name: "Under 14", focus: "Advanced skills, match preparation, and leadership development." },
];

export type Coach = {
  name: string;
  role: string;
  bio: string;
  focus: string;
};

export const COACHES: Coach[] = [
  {
    name: "Coach Belven Hope",
    role: "Head Coach & Founder",
    bio: "Growing up, rugby was more than a sport — it was a lifeline. It taught discipline, gave purpose, and built a community. Belven started Hope Rugby Academy with one simple belief: every child deserves the chance to experience what rugby can do for them.",
    focus: "Skills Development & Leadership",
  },
  {
    name: "Coach Fernal Hansen",
    role: "Assistant Coach",
    bio: "A seasoned rugby veteran, Fernal brings decades of experience and wisdom to the academy. His steady hand and deep knowledge of the game help shape our young players into disciplined, well-rounded athletes.",
    focus: "Forward Play & Set Pieces",
  },
  {
    name: "Coach Rafeeq Davids",
    role: "Fitness & Conditioning Coach",
    bio: "Rafeeq brings energy, strength, and dedication to every session. His focus on fitness and conditioning ensures our players are physically prepared and mentally tough for the challenges ahead.",
    focus: "Strength, Speed & Conditioning",
  },
  {
    name: "Assistant Coach",
    role: "Extra Assistant Coach",
    bio: "A dedicated member of the coaching team, supporting player development across all age groups and bringing fresh energy to training sessions.",
    focus: "Player Development & Support",
  },
];

export const FOUNDER_QUOTE =
  "Rugby doesn't just build players — it builds character. And character is what these kids will carry with them long after they leave the field.";

export type Sponsor = {
  name: string;
  tier: string;
  description: string;
};

export const SPONSORS: Sponsor[] = [
  { name: "Rawson Properties — Meagan Benjamin", tier: "Featured Partner", description: "Diamond Elite Sales & Rental Partner. Proudly backing the next generation of rugby talent." },
  { name: "Mi Attorneys", tier: "Featured Partner", description: "Attorneys · Notaries · Conveyancers. Legal partners committed to community development." },
  { name: "Zwaanswyk Academy Primary", tier: "Platinum Sponsor", description: "Providing training facilities and ground access for all our academy sessions." },
  { name: "Western Cape Government", tier: "Gold Sponsor", description: "Supporting youth sport development programs across the Western Cape." },
  { name: "Community Supporters", tier: "Silver Sponsor", description: "Local families and businesses who contribute equipment and transport for match days." },
];

export type Award = {
  icon: string;
  title: string;
  description: string;
};

export const AWARDS: Award[] = [
  { icon: "🏆", title: "Player of the Season", description: "Awarded to the player who consistently demonstrates skill, leadership, and sportsmanship throughout the entire season." },
  { icon: "📈", title: "Most Improved Player", description: "Recognising the player who has shown the most growth in skill, attitude, and commitment." },
  { icon: "🤝", title: "Team Spirit Award", description: "For the player who best embodies teamwork, encouragement, and the values of Hope Rugby Academy." },
  { icon: "👟", title: "Golden Boot", description: "Awarded to the top try-scorer of the season across all age groups." },
  { icon: "⭐", title: "Coach's Award", description: "A special recognition from the coaching staff for dedication, discipline, and positive attitude." },
  { icon: "🎖️", title: "Fair Play Award", description: "Celebrating the player who shows the greatest respect for opponents, referees, and the game itself." },
];

export const CONTACT = {
  phone: "072 646 1436",
  phoneHref: "tel:+27726461436",
  whatsapp: "062 542 2729",
  whatsappHref: "https://wa.me/27625422729?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Hope%20Rugby%20Academy",
  email: "belven.hope@westerncape.gov.za",
  venue: "Zwaanswyk Academy Primary School",
  address: "338 Main Rd, Retreat, Cape Town, 7945",
  mapsQuery: "Zwaanswyk Academy Primary School, 338 Main Rd, Retreat, Cape Town, 7945",
  location: "Cape Town",
  trainingDay: "Every Friday",
  trainingTime: "16h00 – 18h00",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Zwaanswyk%20Academy%20Primary%20School%2C%20338%20Main%20Rd%2C%20Retreat%2C%20Cape%20Town%2C%207945",
};

export type SessionStep = {
  time: string;
  title: string;
  description: string;
};

export const SESSION_BREAKDOWN: SessionStep[] = [
  { time: "16:00 – 16:15", title: "Arrival & Warm-up", description: "Dynamic stretches, light jogging, and team activation drills." },
  { time: "16:15 – 16:45", title: "Skills Training", description: "Passing, catching, tackling technique, and position-specific drills." },
  { time: "16:45 – 17:15", title: "Game Play", description: "Structured touch rugby or contact games adapted for each age group." },
  { time: "17:15 – 17:45", title: "Fitness & Conditioning", description: "Age-appropriate fitness activities focused on speed, agility, and endurance." },
  { time: "17:45 – 18:00", title: "Cool Down & Debrief", description: "Stretching, team talk, and player recognition." },
];

export type DonationFund = {
  name: string;
  icon: string;
  goal: number;
  raised: number;
  description: string;
};

export const DONATION_FUNDS: DonationFund[] = [
  { name: "General Fund", icon: "🏉", goal: 50000, raised: 0, description: "Supports coaching, transport, medical kit, and day-to-day academy operations." },
  { name: "Equipment Fund", icon: "🎽", goal: 30000, raised: 0, description: "Funds jerseys, tackle pads, scrum machines, balls, cones, and training gear." },
];

export const BANKING = {
  accountName: "Hope Rugby Academy",
  bank: "Absa Bank",
  accountNumber: "4122574955",
  reference: 'Your name + "General" or "Equipment"',
};

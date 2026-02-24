export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  rating: number;
  reviewCount: number;
  enrollmentCount: number;
  priceUSD: number;
  image: string;
  instructor: string;
  features: string[];
  published: boolean;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Private Pilot License Ground School",
    slug: "private-pilot-ground-school",
    description: "Comprehensive ground school training covering all FAA knowledge areas for the Private Pilot Certificate. This course prepares you for the FAA Knowledge Test with detailed lessons on aerodynamics, weather, navigation, regulations, and flight operations.",
    shortDescription: "Complete FAA PPL ground school preparation with exam-ready materials.",
    category: "Pilot Training",
    level: "Beginner",
    duration: "40 hours",
    lessons: 48,
    rating: 4.8,
    reviewCount: 1240,
    enrollmentCount: 5680,
    priceUSD: 299,
    image: "",
    instructor: "Capt. James Mitchell",
    features: ["FAA Knowledge Test Prep", "Interactive Quizzes", "Certificate of Completion", "Lifetime Access"],
    published: true,
  },
  {
    id: "2",
    title: "Instrument Rating Mastery",
    slug: "instrument-rating-mastery",
    description: "Master instrument flying with our comprehensive IFR course. Learn instrument approaches, navigation, weather analysis, and ATC communication for real-world IFR operations.",
    shortDescription: "Advanced IFR training for confident instrument flying.",
    category: "Pilot Training",
    level: "Intermediate",
    duration: "35 hours",
    lessons: 42,
    rating: 4.9,
    reviewCount: 890,
    enrollmentCount: 3420,
    priceUSD: 399,
    image: "",
    instructor: "Capt. Sarah Chen",
    features: ["IFR Procedures", "Approach Plates Training", "Weather Analysis", "ATC Communications"],
    published: true,
  },
  {
    id: "3",
    title: "Aviation Weather & Meteorology",
    slug: "aviation-weather-meteorology",
    description: "Deep dive into aviation meteorology. Understand weather patterns, METARs, TAFs, radar interpretation, and how weather affects flight safety and planning.",
    shortDescription: "Essential weather knowledge for safe flight operations.",
    category: "Safety & Weather",
    level: "Beginner",
    duration: "20 hours",
    lessons: 24,
    rating: 4.7,
    reviewCount: 650,
    enrollmentCount: 4100,
    priceUSD: 149,
    image: "",
    instructor: "Dr. Elena Rodriguez",
    features: ["METAR & TAF Decoding", "Radar Interpretation", "Weather Briefings", "Case Studies"],
    published: true,
  },
  {
    id: "4",
    title: "Airline Transport Pilot (ATP) Prep",
    slug: "atp-prep-course",
    description: "Prepare for the highest level of pilot certification. Comprehensive ATP knowledge test preparation covering advanced systems, high-altitude operations, and airline operations.",
    shortDescription: "Elite preparation for the ATP knowledge examination.",
    category: "Pilot Training",
    level: "Advanced",
    duration: "50 hours",
    lessons: 60,
    rating: 4.9,
    reviewCount: 420,
    enrollmentCount: 1890,
    priceUSD: 599,
    image: "",
    instructor: "Capt. Robert Williams",
    features: ["ATP Knowledge Test", "CRM Training", "High-Altitude Ops", "Airline Procedures"],
    published: true,
  },
  {
    id: "5",
    title: "Drone Pilot Certification (Part 107)",
    slug: "drone-pilot-part-107",
    description: "Everything you need to pass the FAA Part 107 Remote Pilot exam. Covers airspace, weather, regulations, and safe drone operations for commercial use.",
    shortDescription: "FAA Part 107 exam preparation for commercial drone pilots.",
    category: "Drone Operations",
    level: "Beginner",
    duration: "15 hours",
    lessons: 18,
    rating: 4.6,
    reviewCount: 2100,
    enrollmentCount: 8900,
    priceUSD: 99,
    image: "",
    instructor: "Mark Thompson",
    features: ["Part 107 Exam Prep", "Airspace Training", "Practice Tests", "Study Guides"],
    published: true,
  },
  {
    id: "6",
    title: "Aviation Safety Management Systems",
    slug: "aviation-sms",
    description: "Learn to implement and manage Safety Management Systems in aviation organizations. Covers ICAO standards, risk assessment, safety culture, and compliance frameworks.",
    shortDescription: "ICAO-compliant SMS implementation and management.",
    category: "Safety & Weather",
    level: "Advanced",
    duration: "30 hours",
    lessons: 36,
    rating: 4.8,
    reviewCount: 310,
    enrollmentCount: 1200,
    priceUSD: 449,
    image: "",
    instructor: "Dr. Michael Park",
    features: ["ICAO Standards", "Risk Assessment", "Safety Auditing", "Compliance Tools"],
    published: true,
  },
];

export const categories = [...new Set(courses.map((c) => c.category))];

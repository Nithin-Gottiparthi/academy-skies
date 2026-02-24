export interface CourseModule {
  title: string;
  description: string;
  imageKeyword: string;
}

export interface CourseReview {
  name: string;
  role: string;
  rating: number;
  comment: string;
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  overview: string;
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
  learningObjectives: string[];
  modules: CourseModule[];
  whoShouldAttend: string[];
  assessment: string;
  certification: string;
  faqs: CourseFAQ[];
  reviews: CourseReview[];
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Private Pilot License Ground School",
    slug: "private-pilot-ground-school",
    description: "Comprehensive ground school training covering all FAA knowledge areas for the Private Pilot Certificate. This course prepares you for the FAA Knowledge Test with detailed lessons on aerodynamics, weather, navigation, regulations, and flight operations.",
    shortDescription: "Complete FAA PPL ground school preparation with exam-ready materials.",
    overview: "This comprehensive Private Pilot License Ground School course is designed to take you from zero aviation knowledge to being fully prepared for the FAA Private Pilot Knowledge Test. With over 40 hours of expert instruction, interactive simulations, and real-world case studies, you'll gain the confidence and knowledge needed to begin your flying career. The course covers all 11 FAA knowledge areas in depth, with practice tests modeled after the actual exam.",
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
    learningObjectives: [
      "Understand principles of aerodynamics and flight mechanics",
      "Interpret aviation weather reports and forecasts",
      "Navigate using VFR charts, GPS, and radio navigation",
      "Apply FAA regulations and airspace classifications",
      "Perform weight and balance calculations",
      "Execute flight planning and cross-country navigation",
    ],
    modules: [
      { title: "Principles of Flight", description: "Aerodynamics, lift, drag, and the four forces of flight.", imageKeyword: "aerodynamics" },
      { title: "Aircraft Systems", description: "Engine, electrical, fuel, and hydraulic systems.", imageKeyword: "cockpit" },
      { title: "Aviation Weather", description: "Weather patterns, METARs, TAFs, and weather hazards.", imageKeyword: "weather" },
      { title: "Navigation", description: "VFR charts, dead reckoning, pilotage, and GPS navigation.", imageKeyword: "navigation" },
      { title: "FAA Regulations", description: "Part 61, Part 91, and airspace classifications.", imageKeyword: "regulations" },
      { title: "Flight Operations", description: "Airport operations, communications, and emergency procedures.", imageKeyword: "airport" },
    ],
    whoShouldAttend: [
      "Aspiring pilots with no prior aviation experience",
      "Student pilots preparing for the FAA Knowledge Test",
      "Aviation enthusiasts looking to understand flight fundamentals",
      "Career changers pursuing a professional pilot path",
    ],
    assessment: "The course includes progressive module quizzes, 5 full-length practice exams with 60 questions each, and a final comprehensive assessment that mirrors the actual FAA Knowledge Test format.",
    certification: "Upon successful completion and passing the final assessment with 70% or higher, you'll receive an Academy Aviation Online Certificate of Completion, which demonstrates readiness for the FAA Private Pilot Knowledge Test.",
    faqs: [
      { question: "Do I need any prior aviation experience?", answer: "No, this course is designed for complete beginners and requires no prior aviation knowledge." },
      { question: "How long do I have access to the course?", answer: "You get lifetime access to all course materials, including future updates." },
      { question: "Is this course FAA-approved?", answer: "While this is a supplemental ground school, our curriculum aligns with all FAA knowledge areas required for the Private Pilot Knowledge Test." },
      { question: "Can I study on mobile devices?", answer: "Yes, the course is fully responsive and works on all devices including tablets and smartphones." },
    ],
    reviews: [
      { name: "Michael Torres", role: "Student Pilot", rating: 5, comment: "Incredible course! Passed my FAA Knowledge Test on the first attempt with a 92%. The practice exams were spot-on." },
      { name: "Sarah Williams", role: "Career Changer", rating: 5, comment: "As someone with zero aviation background, this course made everything clear and approachable. Highly recommended." },
      { name: "David Chen", role: "Aviation Enthusiast", rating: 4, comment: "Great content and well-structured modules. The weather section was particularly detailed and helpful." },
    ],
  },
  {
    id: "2",
    title: "Instrument Rating Mastery",
    slug: "instrument-rating-mastery",
    description: "Master instrument flying with our comprehensive IFR course. Learn instrument approaches, navigation, weather analysis, and ATC communication for real-world IFR operations.",
    shortDescription: "Advanced IFR training for confident instrument flying.",
    overview: "Take your flying skills to the next level with our Instrument Rating Mastery course. Designed for VFR-rated pilots, this comprehensive program covers everything you need to fly safely and confidently in instrument meteorological conditions. From approach procedures to real-world ATC communications, every module is packed with practical knowledge.",
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
    learningObjectives: [
      "Master ILS, VOR, and GPS approach procedures",
      "Interpret and fly instrument approach plates",
      "Communicate effectively with ATC under IFR",
      "Analyze weather for IFR flight planning",
      "Handle in-flight emergencies under IMC",
      "Understand IFR enroute and terminal procedures",
    ],
    modules: [
      { title: "IFR Flight Planning", description: "Planning routes, alternates, and fuel requirements for IFR.", imageKeyword: "flightplan" },
      { title: "Instrument Approaches", description: "ILS, VOR, RNAV, and GPS approach procedures.", imageKeyword: "approach" },
      { title: "ATC Communication", description: "Clearances, readbacks, and IFR communication procedures.", imageKeyword: "atc" },
      { title: "Weather for IFR", description: "Advanced weather analysis for instrument conditions.", imageKeyword: "ifrweather" },
      { title: "Holding & Procedures", description: "Holding patterns, procedure turns, and DME arcs.", imageKeyword: "holding" },
      { title: "Emergency Procedures", description: "Lost communication, equipment failures, and diversions.", imageKeyword: "emergency" },
    ],
    whoShouldAttend: [
      "Private pilots seeking an instrument rating",
      "Pilots wanting to improve IFR skills and confidence",
      "Commercial pilot candidates building on instrument knowledge",
      "Flight instructors refreshing IFR teaching material",
    ],
    assessment: "Module assessments after each section, scenario-based evaluation flights, and a comprehensive final exam covering all IFR knowledge areas.",
    certification: "Successful graduates receive the Instrument Rating Mastery Certificate, validating readiness for the FAA Instrument Rating Knowledge Test.",
    faqs: [
      { question: "Do I need a Private Pilot License?", answer: "Yes, a PPL or equivalent is recommended before taking this course." },
      { question: "Does this replace flight training?", answer: "No, this is ground school training. You will still need to complete the required flight hours with a CFII." },
      { question: "How current is the content?", answer: "Content is updated quarterly to reflect the latest FAA procedures and regulations." },
    ],
    reviews: [
      { name: "Robert Kim", role: "Private Pilot", rating: 5, comment: "The approach plate training alone is worth the price. Incredibly detailed and practical." },
      { name: "Jennifer Adams", role: "Flight Student", rating: 5, comment: "Captain Chen's teaching style makes complex IFR procedures easy to understand." },
      { name: "Carlos Rivera", role: "Commercial Pilot", rating: 4, comment: "Great refresher course. The ATC communication module was excellent preparation." },
    ],
  },
  {
    id: "3",
    title: "Aviation Weather & Meteorology",
    slug: "aviation-weather-meteorology",
    description: "Deep dive into aviation meteorology. Understand weather patterns, METARs, TAFs, radar interpretation, and how weather affects flight safety and planning.",
    shortDescription: "Essential weather knowledge for safe flight operations.",
    overview: "Weather is the single most critical factor in aviation safety. This course provides pilots and aviation professionals with a deep understanding of meteorological phenomena, from micro-scale turbulence to macro-scale weather systems. Learn to decode weather reports, interpret radar imagery, and make informed go/no-go decisions.",
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
    learningObjectives: [
      "Decode METARs, TAFs, and other aviation weather reports",
      "Understand atmospheric pressure systems and fronts",
      "Identify and avoid hazardous weather conditions",
      "Interpret weather radar and satellite imagery",
      "Conduct effective weather briefings for flight planning",
      "Apply weather knowledge to real-world flight scenarios",
    ],
    modules: [
      { title: "Atmospheric Fundamentals", description: "Pressure, temperature, humidity, and atmospheric layers.", imageKeyword: "atmosphere" },
      { title: "Weather Systems", description: "High/low pressure, fronts, and air masses.", imageKeyword: "weathersystem" },
      { title: "METARs & TAFs", description: "Decoding and interpreting aviation weather reports.", imageKeyword: "metar" },
      { title: "Thunderstorms & Hazards", description: "Convective weather, icing, turbulence, and wind shear.", imageKeyword: "thunderstorm" },
      { title: "Radar & Satellite", description: "Interpreting weather radar and satellite imagery.", imageKeyword: "radar" },
      { title: "Flight Weather Planning", description: "Applying weather knowledge to practical flight decisions.", imageKeyword: "planning" },
    ],
    whoShouldAttend: [
      "Student pilots building foundational weather knowledge",
      "Rated pilots wanting deeper meteorological understanding",
      "Dispatchers and flight operations personnel",
      "Aviation safety professionals",
    ],
    assessment: "Progressive quizzes per module, real-world METAR/TAF decoding exercises, and a comprehensive final weather analysis assessment.",
    certification: "Graduates receive the Aviation Meteorology Proficiency Certificate, recognized across aviation training organizations.",
    faqs: [
      { question: "Is this course only for pilots?", answer: "No, it's valuable for anyone in aviation including dispatchers, ground crew, and safety officers." },
      { question: "Are real weather reports used?", answer: "Yes, we use actual METARs, TAFs, and weather imagery from real-world scenarios." },
    ],
    reviews: [
      { name: "Amanda Liu", role: "Student Pilot", rating: 5, comment: "Finally understand METARs! Dr. Rodriguez explains complex topics in a way that just clicks." },
      { name: "Tom Bradley", role: "Flight Dispatcher", rating: 4, comment: "Excellent course for both pilots and operations staff. Very practical content." },
    ],
  },
  {
    id: "4",
    title: "Airline Transport Pilot (ATP) Prep",
    slug: "atp-prep-course",
    description: "Prepare for the highest level of pilot certification. Comprehensive ATP knowledge test preparation covering advanced systems, high-altitude operations, and airline operations.",
    shortDescription: "Elite preparation for the ATP knowledge examination.",
    overview: "The ATP certificate represents the pinnacle of pilot certification. This intensive course prepares experienced pilots for the FAA ATP Knowledge Test with advanced material covering high-altitude aerodynamics, swept-wing operations, crew resource management, and airline operational procedures. Built by airline captains, for future airline captains.",
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
    learningObjectives: [
      "Master high-altitude aerodynamics and jet performance",
      "Apply CRM principles in multi-crew environments",
      "Understand Part 121 airline operations regulations",
      "Analyze advanced weather phenomena for airline operations",
      "Execute high-altitude flight planning and fuel management",
      "Demonstrate ATP-level systems knowledge",
    ],
    modules: [
      { title: "High-Altitude Aerodynamics", description: "Mach numbers, coffin corner, and swept-wing performance.", imageKeyword: "jet" },
      { title: "Turbine Systems", description: "Jet engine operation, performance charts, and limitations.", imageKeyword: "turbine" },
      { title: "CRM & Human Factors", description: "Crew resource management and decision-making models.", imageKeyword: "crm" },
      { title: "Part 121 Operations", description: "Airline regulations, duty time, and dispatch requirements.", imageKeyword: "airline" },
      { title: "Advanced Navigation", description: "RNAV, RNP, CPDLC, and oceanic procedures.", imageKeyword: "rnav" },
      { title: "ATP Test Preparation", description: "Full-length practice tests and exam strategies.", imageKeyword: "exam" },
    ],
    whoShouldAttend: [
      "Commercial pilots pursuing the ATP certificate",
      "Regional airline first officers preparing for upgrade",
      "Military pilots transitioning to civilian airline careers",
      "Experienced pilots seeking the highest level of certification",
    ],
    assessment: "Rigorous module exams, 3 full-length ATP practice tests (80 questions each), and a comprehensive final assessment with detailed performance analytics.",
    certification: "ATP Readiness Certificate from Academy Aviation Online, demonstrating comprehensive preparation for the FAA ATP Knowledge Test.",
    faqs: [
      { question: "What prerequisites do I need?", answer: "You should hold a Commercial Pilot License and have significant flight experience (typically 1,500+ hours)." },
      { question: "How does this compare to the actual ATP test?", answer: "Our practice tests are designed to match the difficulty and format of the real FAA ATP Knowledge Test." },
    ],
    reviews: [
      { name: "James Patterson", role: "Regional FO", rating: 5, comment: "Passed my ATP with a 96%! This course is the gold standard for ATP preparation." },
      { name: "Lisa Nguyen", role: "Military Transition", rating: 5, comment: "Perfect bridge from military to civilian aviation. The Part 121 module was invaluable." },
    ],
  },
  {
    id: "5",
    title: "Drone Pilot Certification (Part 107)",
    slug: "drone-pilot-part-107",
    description: "Everything you need to pass the FAA Part 107 Remote Pilot exam. Covers airspace, weather, regulations, and safe drone operations for commercial use.",
    shortDescription: "FAA Part 107 exam preparation for commercial drone pilots.",
    overview: "The commercial drone industry is booming, and FAA Part 107 certification is your gateway to professional drone operations. This course covers everything from airspace classifications to drone-specific weather considerations, loading, and performance. Get ready to pass the FAA Remote Pilot exam and launch your drone career.",
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
    learningObjectives: [
      "Understand FAA Part 107 regulations and requirements",
      "Identify airspace classifications and drone restrictions",
      "Apply weather knowledge to drone operations",
      "Calculate drone performance and loading limits",
      "Implement safety procedures and risk management",
      "Pass the FAA Remote Pilot Knowledge Test",
    ],
    modules: [
      { title: "Part 107 Regulations", description: "Rules, waivers, and legal requirements for drone ops.", imageKeyword: "drone" },
      { title: "Airspace for Drones", description: "Controlled and uncontrolled airspace, NOTAMs, and TFRs.", imageKeyword: "airspace" },
      { title: "Drone Weather", description: "Weather effects on drone performance and safety.", imageKeyword: "droneweather" },
      { title: "Loading & Performance", description: "Weight, balance, and performance calculations.", imageKeyword: "droneperformance" },
      { title: "Safety & Operations", description: "Risk management, pre-flight checks, and emergency procedures.", imageKeyword: "dronesafety" },
      { title: "Exam Preparation", description: "Practice tests and study strategies for the knowledge test.", imageKeyword: "droneexam" },
    ],
    whoShouldAttend: [
      "Anyone wanting to fly drones commercially",
      "Photographers and videographers adding aerial capabilities",
      "Surveyors, inspectors, and agricultural professionals",
      "Hobbyists seeking professional certification",
    ],
    assessment: "Module quizzes, 3 full-length practice exams with 60 questions each, and instant score analysis with detailed explanations.",
    certification: "Part 107 Readiness Certificate upon completion, demonstrating preparedness for the FAA Remote Pilot Knowledge Test.",
    faqs: [
      { question: "Do I need any drone experience?", answer: "No, this course covers everything from the ground up. Flight experience is separate from the knowledge test." },
      { question: "How quickly can I complete the course?", answer: "Most students complete it in 1-2 weeks studying part-time, or in a few days of intensive study." },
    ],
    reviews: [
      { name: "Jason Park", role: "Photographer", rating: 5, comment: "Passed Part 107 on my first try! The practice tests were nearly identical to the real exam." },
      { name: "Maria Gonzalez", role: "Surveyor", rating: 4, comment: "Concise and well-organized. Got exactly what I needed to pass the exam quickly." },
    ],
  },
  {
    id: "6",
    title: "Aviation Safety Management Systems",
    slug: "aviation-sms",
    description: "Learn to implement and manage Safety Management Systems in aviation organizations. Covers ICAO standards, risk assessment, safety culture, and compliance frameworks.",
    shortDescription: "ICAO-compliant SMS implementation and management.",
    overview: "Safety Management Systems (SMS) are now mandatory for aviation organizations worldwide. This advanced course equips safety professionals with the knowledge and tools to implement, manage, and continuously improve SMS programs in compliance with ICAO Annex 19 and national regulations. From hazard identification to safety culture development, master every aspect of modern aviation safety management.",
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
    learningObjectives: [
      "Design and implement an SMS compliant with ICAO Annex 19",
      "Conduct systematic hazard identification and risk assessment",
      "Develop safety performance indicators and targets",
      "Build and sustain a positive safety culture",
      "Manage safety audits and regulatory compliance",
      "Analyze safety data for continuous improvement",
    ],
    modules: [
      { title: "SMS Framework", description: "ICAO four pillars and SMS component requirements.", imageKeyword: "sms" },
      { title: "Hazard Identification", description: "Methods for identifying and documenting aviation hazards.", imageKeyword: "hazard" },
      { title: "Risk Assessment", description: "Risk matrices, SPI, and mitigation strategies.", imageKeyword: "risk" },
      { title: "Safety Assurance", description: "Auditing, monitoring, and continuous improvement.", imageKeyword: "audit" },
      { title: "Safety Culture", description: "Building reporting culture and just culture principles.", imageKeyword: "culture" },
      { title: "SMS Implementation", description: "Practical implementation plan and change management.", imageKeyword: "implementation" },
    ],
    whoShouldAttend: [
      "Safety managers and safety officers in aviation",
      "Quality assurance and compliance professionals",
      "Airline and airport management personnel",
      "Aviation regulators and inspectors",
    ],
    assessment: "Case study analyses, SMS implementation project, module assessments, and a comprehensive final exam covering all SMS components.",
    certification: "Aviation SMS Professional Certificate, recognized by aviation organizations for demonstrating SMS competency aligned with ICAO standards.",
    faqs: [
      { question: "Is this relevant outside of airlines?", answer: "Absolutely. SMS is required for airlines, airports, maintenance organizations, and ATC providers worldwide." },
      { question: "Do I need prior safety management experience?", answer: "While some aviation background is helpful, the course is structured to build knowledge progressively from foundations." },
    ],
    reviews: [
      { name: "Rachel Foster", role: "Safety Manager", rating: 5, comment: "The most comprehensive SMS course I've found. Dr. Park's real-world examples make the content come alive." },
      { name: "Ahmed Hassan", role: "Airport Safety Officer", rating: 5, comment: "Immediately applicable. Used the implementation framework to revamp our entire SMS program." },
    ],
  },
];

export const categories = [...new Set(courses.map((c) => c.category))];

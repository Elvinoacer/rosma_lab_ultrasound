export const site = {
  name: "Rosma Laboratory",
  shortName: "Rosma",
  tagline: "Diagnostics & ultrasound, close to home.",
  description:
    "A licensed Class C diagnostic laboratory in Kasarani offering clinical laboratory testing and ultrasound imaging. Quiet, careful answers on Kasarani–Mwiki Road.",
  licensed: "Licensed Class C laboratory · Nairobi, 2026",
  languages: ["English", "Kiswahili"],
  email: "hello@rosmalab.co.ke",
  address: {
    line1: "Kwa Wangari, Kasarani–Mwiki Road",
    line2: "Near Magunas Supermarket",
    city: "Kasarani, Nairobi",
    country: "Kenya",
    full: "Kwa Wangari, Kasarani–Mwiki Road, near Magunas Supermarket, Kasarani, Nairobi",
    note: "Exact shop-front is on Kasarani–Mwiki Road in the Kwa Wangari area, adjacent to Magunas.",
  },
  map: {
    lat: -1.2214,
    lng: 36.8968,
    embed:
      "https://www.openstreetmap.org/export/embed.html?bbox=36.8768%2C-1.2364%2C36.9168%2C-1.2064&layer=mapnik&marker=-1.2214%2C36.8968",
    directions:
      "https://www.openstreetmap.org/?mlat=-1.2214&mlon=36.8968#map=16/-1.2214/36.8968",
  },
  hours: [
    { day: "Monday – Saturday", time: "7:00 am – 7:00 pm" },
    { day: "Sunday", time: "8:00 am – 4:00 pm" },
    { day: "Public holidays", time: "Ask at reception" },
  ],
  hoursShort: "Mon–Sat 7am–7pm · Sun 8am–4pm",
  walkIn: true,
} as const;

export const nav = [
  { href: "/ultrasound", label: "Ultrasound" },
  { href: "/laboratory", label: "Laboratory" },
  { href: "/prepare", label: "Prepare" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/visit", label: "Visit" },
] as const;

export const scans = [
  {
    slug: "obstetric",
    title: "Obstetric",
    kicker: "Pregnancy",
    summary:
      "Dating, growth, anatomy and wellbeing scans — reported with care, in language you can take home.",
    prep: "A comfortably full bladder helps early-pregnancy views. Drink water about an hour before and try not to empty until after the scan.",
    image: "/images/nairobi.jpg",
  },
  {
    slug: "abdominal",
    title: "Abdominal",
    kicker: "Upper abdomen",
    summary:
      "Liver, gallbladder, kidneys, spleen and pancreas — the everyday scan for pain, stones and organ health.",
    prep: "Fast for 6–8 hours. Small sips of water are fine. Take regular medicines unless we advise otherwise.",
    image: "/images/lab.jpg",
  },
  {
    slug: "pelvic",
    title: "Pelvic & TVS",
    kicker: "Women’s health",
    summary:
      "Pelvic and transvaginal imaging for fibroids, cysts, bleeding and fertility work-ups.",
    prep: "A full bladder is useful for the transabdominal view. You may empty before a transvaginal scan if requested.",
    image: "/images/scan.jpg",
  },
  {
    slug: "breast",
    title: "Breast",
    kicker: "Lumps & follow-up",
    summary:
      "Targeted imaging for lumps, pain or follow-up — complementary to clinical examination.",
    prep: "No special preparation. Wear a two-piece outfit if you can.",
    image: "/images/care.jpg",
  },
  {
    slug: "doppler",
    title: "Doppler",
    kicker: "Blood flow",
    summary:
      "Colour and spectral Doppler for vessels, including carotid and obstetric flow studies when indicated.",
    prep: "Depends on the vessel. We will confirm when you book.",
    image: "/images/scientist.jpg",
  },
  {
    slug: "thyroid",
    title: "Thyroid & small parts",
    kicker: "Neck & soft tissue",
    summary:
      "Thyroid, neck nodes and other small-parts imaging — precise, same-visit reporting whenever possible.",
    prep: "None. Leave necklaces at home if you are coming for a neck scan.",
    image: "/images/hero.jpg",
  },
] as const;

export const labPanels = [
  {
    title: "Haematology",
    items: ["Full blood count", "Peripheral film", "ESR", "Sickling / Hb electrophoresis"],
  },
  {
    title: "Infectious disease",
    items: ["Malaria", "HIV", "TB screening", "Hepatitis B & C", "COVID-19 as indicated"],
  },
  {
    title: "Biochemistry",
    items: [
      "Liver & kidney function",
      "Blood sugar & HbA1c",
      "Lipid profile",
      "Electrolytes",
      "Thyroid function",
    ],
  },
  {
    title: "Microbiology",
    items: ["Urine analysis & culture", "Stool analysis", "Wound & throat swabs", "Sensitivity"],
  },
  {
    title: "Women’s health labs",
    items: ["Antenatal profile", "Hormonal assays", "Pregnancy test", "Pap smear support"],
  },
  {
    title: "Wellness panels",
    items: ["Executive check-up", "Pre-employment", "School & travel medicals"],
  },
] as const;

export const journey = [
  {
    step: "01",
    title: "Book or walk in",
    body: "Same-day visits are welcome. Booking helps us hold a quiet slot and send prep notes.",
  },
  {
    step: "02",
    title: "Prepare",
    body: "Fasting for abdominal work. Water for pelvic and early obstetric scans. We keep it simple.",
  },
  {
    step: "03",
    title: "Scan or sample",
    body: "Unhurried rooms, explained steps, English or Kiswahili — you are never rushed through.",
  },
  {
    step: "04",
    title: "Results",
    body: "Many routine labs the same day. Scan reports as soon as they are reviewed. Print, or collect later.",
  },
] as const;

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome for most laboratory tests and many ultrasound slots. Booking is kinder if you need a specific scan, are coming after fasting, or prefer a quieter time of day.",
  },
  {
    q: "Where exactly are you?",
    a: "On Kasarani–Mwiki Road in the Kwa Wangari area, next to Magunas Supermarket. If you reach Seasons Stage you are already close — ask for Rosma Laboratory.",
  },
  {
    q: "How should I prepare for an ultrasound?",
    a: "Abdominal scans: fast 6–8 hours. Pelvic and early obstetric scans: arrive with a comfortably full bladder. Breast, thyroid, Doppler and later obstetric scans usually need no prep. We confirm when you book.",
  },
  {
    q: "How soon will I get results?",
    a: "Routine laboratory work is typically same-day or next morning. Ultrasound reports are often ready before you leave, or within a short review window for more complex studies.",
  },
  {
    q: "Do you accept NHIF or insurance?",
    a: "Payment is by cash or M-Pesa. Selected insurance and scheme letters can be discussed at reception — please bring your card and any pre-authorisation.",
  },
  {
    q: "What will a scan cost?",
    a: "Neighbourhood-fair, quoted before we begin. Comparable Kasarani scans often sit around KSh 1,000–3,000 depending on type. Ask us for today’s list — we do not surprise you at the desk.",
  },
  {
    q: "Which languages do you speak?",
    a: "English and Kiswahili, as you prefer. Tell us at reception.",
  },
  {
    q: "Is the laboratory licensed?",
    a: "Yes. Rosma is a licensed Class C medical laboratory in Nairobi (2026). Class C facilities are required to keep a full complement of certified laboratory technologists and support staff.",
  },
  {
    q: "Can I bring children or a companion?",
    a: "Yes. One companion is welcome in the scan room when it helps. We keep the space calm for the person being examined.",
  },
  {
    q: "What about COVID-19 and infection control?",
    a: "We follow Ministry of Health guidance: hand hygiene, cleaned couches and probes between patients, and masks when indicated. Tell us if you have a cough or fever before you arrive.",
  },
] as const;

export const values = [
  {
    title: "Unhurried rooms",
    body: "A scan is not a queue number. We explain what we are looking at, and we stop if you need a moment.",
  },
  {
    title: "Licensed, local",
    body: "A Class C laboratory on the road you already use. No trip across town for a blood test or a dating scan.",
  },
  {
    title: "Plain language",
    body: "Reports you can read. English or Kiswahili. Questions answered before you step back onto Mwiki Road.",
  },
] as const;

export const serviceOptions = [
  "Obstetric ultrasound",
  "Abdominal ultrasound",
  "Pelvic / TVS",
  "Breast ultrasound",
  "Doppler",
  "Thyroid / small parts",
  "Laboratory tests",
  "Antenatal profile",
  "Not sure — please advise",
] as const;

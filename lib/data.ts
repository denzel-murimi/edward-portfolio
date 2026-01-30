// lib/data.ts

import { link } from "fs";

export const profile = {
  name: "Dr. Edward Kahuthia Murimi",
  role: "Legal Scholar & Human Rights Practitioner",
  headline: "Bridging the Gap Between International Human Rights Theory and Judicial Practice in Africa.",
  location: "Nairobi / Amsterdam",
  email: "kahuthia.edward@gmail.com",
  phone: "+254 723 653 745",
  photo: "/dkt.jpeg",
  about: "I am a legal scholar and practitioner dedicated to strengthening the institutional effectiveness of human rights systems in Africa. Currently serving as a Postdoctoral Researcher at the Amsterdam Centre for International Law, I lead the examination of the African human rights system’s response to democratic backsliding. My experience spans from grassroots legal aid in Kenya to high-level advisory roles with the African Union and the African Court on Human and Peoples’ Rights.",
  socials: {
    linkedin: "https://www.linkedin.com/in/dr-edward-murimi-a3411a4a/", 
    twitter: "https://x.com/edwardkahuthia", 
  }
};

export const education = [
  {
    degree: "Doctor of Law (PhD)",
    institution: "Ghent University",
    location: "Belgium",
    year: "2021 – 2025",
    details: "Thesis: 'Evidentiary regime of the African Court on Human and Peoples’ Rights' (DISSECT Project)."
  },
  {
    degree: "Master of Laws (Distinction)",
    institution: "University of Pretoria",
    location: "South Africa",
    year: "2015",
    details: "Human Rights and Democratisation in Africa."
  },
  {
    degree: "Diploma in Human Rights & Gender Equality",
    institution: "Uppsala University",
    location: "Sweden",
    year: "2011 – 2012"
  },
  {
    degree: "Postgraduate Diploma in Legal Studies",
    institution: "Kenya School of Law",
    location: "Kenya",
    year: "2010 – 2011"
  },
  {
    degree: "Bachelor of Laws (LL.B, Second Class Upper)",
    institution: "University of Nairobi",
    location: "Kenya",
    year: "2005 – 2009"
  }
];

export const certifications = [
  { year: "2023", course: "Transitology – Pathways to and from Democracy", inst: "Global Campus of Human Rights" },
  { year: "2019", course: "Autumn School on Decentralisation and Local Governance", inst: "University of Potsdam, Germany" },
  { year: "2018", course: "Summer School on Development Policy", inst: "University of Bonn, Germany" },
  { year: "2017", course: "International Framework on Freedom of Expression & Safety of Journalists", inst: "University of Pretoria / UNESCO" },
  { year: "2015", course: "Children’s Rights in Africa", inst: "University of Pretoria" },
  { year: "2015", course: "Civil Society Law in Africa", inst: "University of Pretoria" },
  { year: "2015", course: "Disability Rights in an African Context", inst: "University of Pretoria" },
  { year: "2015", course: "The Human Rights of Sexual Minorities in Africa", inst: "University of Pretoria" },
  { year: "2015", course: "Public International Law", inst: "University of Pretoria" },
  { year: "2014", course: "Policy and Legislative Drafting (Training with Clarity)", inst: "TCA" },
];

export const experience = [
  {
    id: "postdoc-2025",
    role: "Postdoctoral Researcher",
    company: "Amsterdam Centre for International Law (UvA)",
    dates: "Sept 2025 – Present",
    description: "Leading the examination of the African human rights system within the 'Beyond Compliance' project. Researching legal-jurisprudential conditions for effectiveness in non-democratic regimes.",
    tags: ["Research", "Human Rights", "Academia"]
  },
  {
    id: "phd-2021",
    role: "Doctoral Researcher",
    company: "Ghent University",
    dates: "Jan 2021 – Mar 2025",
    description: "Investigated the evidentiary regime at the African Court (DISSECT Project). Conducted fieldwork in Arusha, interviewed judges, and lectured on International Human Rights Law.",
    tags: ["Evidence Law", "African Court", "Teaching"]
  },
  {
    id: "afchpr-2022",
    role: "Legal Intern (Legal Division)",
    company: "African Court on Human and Peoples’ Rights",
    dates: "Mar 2022 – June 2022",
    description: "Drafted judgments and rulings. Developed a code of evidentiary standards which was adopted in the Court's revised Practice Directions (March 2024).",
    tags: ["Adjudication", "Drafting", "Arusha"]
  },
  {
    id: "giz-2017",
    role: "Technical Advisor",
    company: "GIZ Kenya (Strengthening Good Governance)",
    dates: "Sept 2017 – Dec 2020",
    description: "Provided advisory services to the Office of the Ombudsman (CAJ). Supported county governments in mainstreaming good governance in agriculture.",
    tags: ["Governance", "Public Administration", "Advisory"]
  },
  {
    id: "au-2016",
    role: "Consultant (Seconded)",
    company: "African Union Commission (Addis Ababa)",
    dates: "June 2016 – Jan 2017",
    description: "Developed draft indicators/benchmarks for the African Governance Platform to measure implementation of the ACDEG. Served as lead speech writer for DPA leadership.",
    tags: ["Policy Drafting", "African Union", "Governance Indicators"]
  },
  {
    id: "munyao-2016",
    role: "Practicing Advocate & Partner",
    company: "Munyao Kayugira and Company Advocates",
    dates: "Jan 2016 – Aug 2017",
    description: "Specialized in Constitutional law, administrative law, employment law, and general commercial litigation.",
    tags: ["Litigation", "Commercial Law", "Human Rights"]
  },
  {
    id: "khrc-2014",
    role: "Programme Advisor",
    company: "Kenya Human Rights Commission",
    dates: "Sept 2014 – Dec 2014",
    description: "Lead implementer of the Kenya Horticulture Project. Coordinated regional colloquiums on economic rights and managed legal aid clinics.",
    tags: ["Labor Rights", "Project Management", "Advocacy"]
  },
  {
    id: "cobades-2011",
    role: "Programme Officer (Labour Rights)",
    company: "COBADES",
    dates: "July 2011 – Aug 2014",
    description: "Trained farm managers and workers in horticulture/tea sectors on gender-based violence and labor rights. Compiled a casebook on industrial court jurisprudence.",
    tags: ["Training", "Labor Rights", "Gender Policy"]
  },
  {
    id: "larc-2010",
    role: "Programme Associate",
    company: "Labour Awareness and Resource Centre",
    dates: "Mar 2010 – Mar 2011",
    description: "Authored IEC materials on labor rights and conducted 'people's parliaments' for workers in the tea and sisal sectors.",
    tags: ["Civic Education", "Grassroots Advocacy"]
  }
];

export const consultancies = [
  {
    role: "Legal Consultant",
    client: "Knoops’ Advocaten (Amsterdam)",
    details: "For an Application filed at the African Court on Human and Peoples’ Rights (Ongoing)."
  },
  {
    role: "Rapporteur",
    client: "African Union",
    details: "Served as Rapporteur for multiple high-level dialogues including the Anti-Corruption Dialogue (2018), Humanitarian Symposium (2019), and Youth Consultation (2019)."
  },
  {
    role: "Consultant",
    client: "Hivos Foundation",
    details: "Developed Position Paper on 'Workplace Sexual Harassment Policies in Kenya’s Horticulture Sector' (2016)."
  },
  {
    role: "Researcher",
    client: "MUHURI",
    details: "Delivered research paper on 'The Legal, Policy and Regulatory Framework in Kenya on Migrant Workers'."
  },
  {
    role: "Consultant",
    client: "CRECO-Kenya",
    details: "Rapid response research project on escalating insecurity in Bungoma County."
  }
];

export const publications = [
  {
    category: "Academic & Journals",
    items: [
      { title: "Fluctuating standards of proof at the African Court: a case for principled flexibility", venue: "African Human Rights Yearbook", year: "2023", link: "https://www.ahry.up.ac.za/images/ahry/volume7/Murimi_2023.pdf" },
      { title: "Youth mobilities and belonging in and out of a Kenyan urban ‘hood’", venue: "Rise Africa Discussion Series", year: "2021", link: "https://riseafrica.iclei.org/thought-pieces/#1627481660341-bd1190a3-a204" },
      { title: "Advancing the Right to Demonstrate in Kenya Through Negotiated Management", venue: "Palgrave Macmillan (Book Chapter)", year: "2020", link: "https://link.springer.com/chapter/10.1007/978-3-030-27049-0_8" },
    ]
  },
  {
    category: "Policy Briefs & Commentary",
    items: [
      { title: "Tanzania and the African Union’s Blind Spots on Democratic Backsliding", venue: "VerfBlog", year: "2025", link: "https://verfassungsblog.de/african-union-unconstitutional-changes-of-government/" },
      { title: "State-sanctioned human rights violations in Kenya: countering repression with resistance", venue: "AfricLaw", year: "2025", link: "https://africlaw.com/2025/08/29/state-sanctioned-human-rights-violations-in-kenya-countering-repression-with-resistance/" },
      { title: "Re-Imagining Standards of Fairness in Open Source Investigations", venue: "Opinio Juris", year: "2023", link: "https://opiniojuris.org/2023/02/10/symposium-on-fairness-equality-and-diversity-in-open-source-investigations-re-imagining-standards-of-fairness-in-open-source-investigations-a-commentary-on-fact-finding-in-the-tigray-conflict/" },
      { title: "Evidentiary challenges for incarcerated applicants at the African Court", venue: "Blog Post", year: "2022", link: "https://dissect.ugent.be/how-long-is-not-too-long-before-filing-an-application-at-the-african-court-evidentiary-challenges-for-incarcerated-applicants/" },
      { title: "Arresting Corruption in Africa: Role of the Youth", venue: "Institute for Security Studies (Policy Brief)", year: "2018", link: "https://issafrica.org/research/policy-brief/arresting-corruption-in-africa-role-of-the-youth" },
      { title: "TBeyond Rhetoric – Engaging Africa’s Youth in Democratic Governance", venue: "Institute for Security Studies ", year: "2017", link: "https://issafrica.org/research/policy-brief/beyond-rhetoric-engaging-africas-youth-in-democratic-governance" },

    ]
  }
];

export const media = [
  { title: "Yes, it’s time to repeal criminal defamation law", outlet: "The Standard", date: "16 Aug 2025",link: "https://www.standardmedia.co.ke/opinion/article/2001451385/yes-its-time-to-repeal-criminal-defamation-law" },
  { title: "How to investigate torture cases and deaths under police custody", outlet: "The Standard", date: "28 June 2025", link: "https://www.standardmedia.co.ke/opinion/article/2001450023/how-to-investigate-torture-cases-and-deaths-under-police-custody" },
  { title: "African Court did not say we postpone the elections", outlet: "Daily Nation", date: "28 July 2021", link: "https://nation.africa/kenya/blogs-opinion/opinion/african-court-did-not-say-we-postpone-the-elections-246112" },
  { title: "Fight coronavirus but respect human rights", outlet: "The Standard", date: "31 Mar 2020" , link: "https://www.standardmedia.co.ke/opinion/article/2001365923/fight-coronavirus-but-respect-human-rights"},
  { title: "Care, lest BBI tampers with graft war", outlet: "Daily Nation", date: "28 Jan 2020", link: "https://nation.africa/kenya/blogs-opinion/opinion/care-lest-bbi-tampers-with-graft-war-222912" },
  { title: "DCI and EACC have shared mandate to investigate corruption", outlet: "The Standard", date: "27 Mar 2019", link: "https://www.standardmedia.co.ke/opinion/article/2001316360/dci-and-eacc-have-shared-mandate-to-investigate-corruption" },
  { title: "Judiciary at fault to issue long pre-trial detention orders", outlet: "The Standard", date: "27 Feb 2019", link: "https://www.standardmedia.co.ke/opinion/article/2001313150/judiciary-at-fault-to-issue-long-pre-trial-detention-orders" },
  { title: "Who is really benefiting from EPZs in Kenya?", outlet: "Business Daily Africa", date: "4 Jan 2012", link: "https://www.businessdailyafrica.com/bd/opinion-analysis/who-is-really-benefiting-from-epzs-in-kenya--3741736" },
  { title: "Weekly Columnist (Governance & Human Rights)", outlet: "Business Daily Newspaper", date: "2011-2012", link: "https://www.businessdailyafrica.com/bd/opinion-analysis/columnists/" },
];

export const affiliations = [
  "Law Society of Kenya (Member)",
  "East African Law Society (Member)",
  "Agora Strategy (Advisor)",
  "African Human Rights Law Journal (Reviewer)"
];
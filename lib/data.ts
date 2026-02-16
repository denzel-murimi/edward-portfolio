// lib/data.ts

import { link } from "fs";
import { title } from "process";

export const profile = {
  name: "Dr. Edward Kahuthia Murimi",
  role: "Legal Scholar & Human Rights Practitioner",
  headline: "Bridging the Gap Between International Human Rights Theory and Judicial Practice in Africa.",
  location: "Nairobi / Amsterdam",
  email: "kahuthia.edward@gmail.com",
  phone: "+254 723 653 745",
  photo: "/dkt.jpeg",
about: `Dr. Edward Kahuthia Murimi is a Kenyan human rights scholar, advocate, and policy expert specializing in international and African human rights law, democratic governance, and accountability.

He is currently a Postdoctoral Researcher at the Amsterdam Centre for International Law, University of Amsterdam, where he leads the examination of the African human rights system within a comparative project assessing the effectiveness of regional human rights regimes in contexts of democratic backsliding and systemic violations.

He holds a Doctor of Law degree from Ghent University, where his doctoral research critically analyzed the evidentiary regime of the African Court on Human and Peoples’ Rights, combining doctrinal analysis with empirical fieldwork at the Court in Arusha, Tanzania.

Dr. Murimi brings over a decade of experience spanning academia, legal practice, civil society, and international development cooperation. He has served as a Technical Advisor with GIZ Kenya, a consultant to the African Union Commission, a Program advisor at the Kenya Human Rights Commission and a practicing advocate in Nairobi, contributing to legal and institutional reforms that advance transparency, access to information, and the rule of law.

A published author and regular commentator on governance and human rights in Africa, his work bridges rigorous scholarship and practical engagement, reflecting a sustained commitment to strengthening democratic institutions and protecting fundamental rights.`,
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
    dates: "Jan 2016 – to date",
    description: "Specialized in Constitutional law, administrative law, employment law, and general commercial litigation.",
    tags: ["Litigation", "Commercial Law", "Human Rights"]
  },
  {
    id: "editor-2017",
    role: "Legal Editor",
    company: "Kenyan Judiciary",
    dates: "2017- Present",
    description: "Legal editor for Kenyan judiciary’s first Bench book on electoral disputes resolution.",
    tags: ["Legal Editing", "Electoral Law", "Judiciary"]

  },
  {
    id: "reviewer-2024",
    role: "Journal Reviewer",
    company: "African Human Rights Law Journal",
    dates: "2024-Present",
    description: "Peer reviewer for the African Human Rights Law Journal, providing critical feedback on submissions related to human rights law and practice in Africa.",
    tags: ["Peer Review", "Human Rights", "Academic Publishing"]

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
  items: [
    {
      client: "African Union",
      details: "2018 African Union Annual African Anti-Corruption Dialogue on Corruption Measurement held from 2nd to 4th October 2018 in Arusha, Tanzania."
    },
    {
      client: "African Union",
      details: "7th Annual Humanitarian Symposium held from 18th to 20th November 2019 in Nairobi, Kenya."
    },
    {
      client: "African Union",
      details: "Continental Youth Consultation: Youth and Forced Displacement in Africa held on 2nd-3rd December 2019 in Kampala, Uganda."
    },
    {
      client: "African Union",
      details: "8th High Level Dialogue on the theme – 'The Year of Refugees, Returnees and Internally Displaced Persons: Towards Durable Solutions to Forced Displacement in Africa' held on 4th -6th December 2019 in Kampala, Uganda."
    },
    {
      client: "Solidarity for African Women's Rights (SOAWR)",
      details: "Annual General Meeting held on 27th -29th January 2020 in Nairobi, Kenya."
    },
    {
      client: "International Development Law Organization (IDLO)",
      details: "National Gender and Equality Commission's Training on Cultural and Traditional Structures on Equality and Inclusion in Elections in May 2017 in Murang'a, Kenya."
    }
  ]
},
  {
    role: "Consultant",
    client: "Hivos Foundation",
    details: "Developed Position Paper on 'Workplace Sexual Harassment Policies in Kenya’s Horticulture Sector' (2016)."
  },
  {
    role: "Workshop Facilitator",
    items: [
      {
        client: "Hivos Foundation - Women@Work Campaign",
        details: "Conducted a workshop in Lusaka, Zambia for Civil Society actors drawn from East and Central Africa on International and Regional Frameworks on Corporate Accountability."
      },
      {
        client: "Kenya Human Rights Commission",
        details: "Facilitated human rights education workshops in Meru and Laikipia Counties in Kenya."
      }
    ]
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
    category: "Academic ",
    items: [
      { title: "Reviewer for the African Human Rights Law Journal ", venue: "African Human Rights Law Journal", year: "2024-Present" },
      { title: "Authored the Afterword in the book by Tatiana Thieme- <em>Hustle Urbanism: Making Life work in Nairobi</em>", venue: "University of Minnesota Press", year: "2025", link: "https://www.upress.umn.edu/9781517917999/hustle-urbanism/" }, 
      { title: "Fluctuating standards of proof at the African Court: a case for principled flexibility", venue: "African Human Rights Yearbook", year: "2023", link: "https://www.ahry.up.ac.za/images/ahry/volume7/Murimi_2023.pdf" },
      { title: "Youth mobilities and belonging in and out of a Kenyan urban ‘hood’", venue: "Rise Africa Discussion Series", year: "2021", link: "https://riseafrica.iclei.org/thought-pieces/#1627481660341-bd1190a3-a204" },
      { title: "Advancing the Right to Demonstrate in Kenya Through Negotiated Management", venue: "Palgrave Macmillan (Book Chapter)", year: "2020", link: "https://link.springer.com/chapter/10.1007/978-3-030-27049-0_8" },
      { title: "Corruption and the right to vote in free and fair elections in Africa: is the will of the people on auction?", venue: "African Human Rights Yearbook 375-399.", year: "2018", link: "https://www.ahry.up.ac.za/en/murimi-e-k-kinyunyu-s" },
      { title: "Slum Upgrading in Kenya: A Double-Edged Sword for the Right to Adequate Housing", venue: "Law Society of Kenya Journal.", year: "2017" },
    ]
  },
  {
    category: "Policy Briefs & Blog Posts",
    items: [
      { title: "Tanzania and the African Union’s Blind Spots on Democratic Backsliding", venue: "VerfBlog", year: "2025", link: "https://verfassungsblog.de/african-union-unconstitutional-changes-of-government/" },
      { title: "State-sanctioned human rights violations in Kenya: countering repression with resistance", venue: "AfricLaw", year: "2025", link: "https://africlaw.com/2025/08/29/state-sanctioned-human-rights-violations-in-kenya-countering-repression-with-resistance/" },
      { title: "Re-Imagining Standards of Fairness in Open Source Investigations", venue: "Opinio Juris", year: "2023", link: "https://opiniojuris.org/2023/02/10/symposium-on-fairness-equality-and-diversity-in-open-source-investigations-re-imagining-standards-of-fairness-in-open-source-investigations-a-commentary-on-fact-finding-in-the-tigray-conflict/" },
      { title: "How long is (not) too long before filing an application at the African Court? Evidentiary challenges for incarcerated applicants", venue: "Blog Post", year: "2022", link: "https://dissect.ugent.be/how-long-is-not-too-long-before-filing-an-application-at-the-african-court-evidentiary-challenges-for-incarcerated-applicants/" },
      { title: "Applying an Evidentiary Lens to the Conflict in Ethiopia: Issues Arising from Investigative Mandates", venue: "Blog Post", year: "2022", link: "https://dissect.ugent.be/applying-an-evidentiary-lens-to-the-conflict-in-ethiopia-issues-arising-from-investigative-mandates/" },     
      { title: "Arresting Corruption in Africa: Role of the Youth", venue: "Institute for Security Studies (Policy Brief)", year: "2018", link: "https://issafrica.org/research/policy-brief/arresting-corruption-in-africa-role-of-the-youth" },
      { title: "Beyond Rhetoric – Engaging Africa’s Youth in Democratic Governance", venue: "Institute for Security Studies ", year: "2017", link: "https://issafrica.org/research/policy-brief/beyond-rhetoric-engaging-africas-youth-in-democratic-governance" },

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
  { title: "It’s duty of State to protect right of assembly and demonstration", outlet: "Daily Nation", date: "18 May 2016", link: "https://nation.africa/oped/Opinion/It-is-duty-of-State-to-protect-right-of-assembly/440808-3208900-cy667j/index.html" },
  { title: "When the arms of government test boundaries’ ", outlet: "The Standard", date: "23 Aug 2015", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6IjgwOGtxc2VPNmQwdHo0OWZ6YnNTNFE9PSIsInZhbHVlIjoieExOMVhyd0xtZjJ3L2c1T0NGcmJzakg4VFJPRWJyNVlQRTlNV3prZmtPa2UwVUFwWndlSUNlbzMvbnRGbHUwNXhGRU5XQ3RjZ0QvSVQzR2F4YldCc3ViekJVdGtGT1JhbkcxVXBmTGxXUHc9IiwibWFjIjoiYWVjNTAyNDBlNDI3YjhlYzIwOTc2NzBkODJjNjVhMWJlYmQ0MmE5NmMzZTYwNzczNDcwMDZiZDE1NGNmNTc0OCIsInRhZyI6IiJ9" },
  { title: "How to tame labour unrest and make employees happy", outlet: "The Standard", date: "5 Jan 2014", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6IjVhZ3l5c2l1aG9nTjZsVjJmZk9oMVE9PSIsInZhbHVlIjoiVjNqK2h5aXl3bXl1c2h0dG9vK3VtRjB3PT0iLCJtYWMiOiJhYjE4ODQyYzA4ODg5YjEwODQxYjA4ODg1ODQyMzE1YjE4MjM0ODg5NDI4MDU1NjA5ODQyNDUxNWU3ZDEzN2EwN2M0ODg5ZDEzIn0=" },
  { title: "How about trade unions creating a ‘strike fund’ for their members?", outlet: "The Standard", date: "5 Aug 2013", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6IjVhZ3l5c2l1aG9nTjZsVjJmZk9oMVE9PSIsInZhbHVlIjoiVjNqK2h5aXl3bXl1c2h0dG9vK3VtRjB3PT0iLCJtYWMiOiJhYjE4ODQyYzA4ODg5YjEwODQxYjA4ODg1ODQyMzE1YjE4MjM0ODg5NDI4MDU1NjA5ODQyNDUxNWU3ZDEzN2EwN2M0ODg5ZDEzIn0=" },
  { title: "Dear Mr. President, don’t discriminate private school children on laptops", outlet: "The Standard", date: "11 Apr 2013", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6IlBRTE5mcWRrL1p5NHg0TXQzUmpyc0E9PSIsInZhbHVlIjoieGh1NkdQdWZzY1dnWHlNRVBlT0FMdTdYNEovbUhPTlpuTFROYnRZSEdSTHRtdGo2WWwrNTdlbzdYaEZhNlVMQk83MUszTG5ObE02M3VSWnIzbm8rbzBmV3Z4VDZQMlhMbGdkeHVPanVWdjg9IiwibWFjIjoiMzc4NDZkMjc2MTkzYjZhODMzNWE2ZDlmMTJjMzdlNjFhODU2YTQxMDBjYWI4ZGQwNjEzZjE1NmUxY2VlNmUyMyIsInRhZyI6IiJ9" },
  { title: "Strikes still remain an option of last resort in industrial disputes", outlet: "The Standard", date: "8 Sep 2012", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6IjBqSlVRR25LLytQS0lSaXpVV2I2cEE9PSIsInZhbHVlIjoiQmhDdWpxb3BGVDcwTkYxSitSZVUxaXcvVDMvS2FpckF6cUFUMlZucVdvOG1JN3g1SW1wSlRGWGord1BWM2RqOXJtTElwbVllN24zVjRqTG55SmxwVkM4K1NXYjNXM0VtMXB3TUY2SUZjYWc9IiwibWFjIjoiMDk2ZDZlMmJmZGE0MWE3MDcyOTQxMTJiZWMzY2ExZjdkZjkxMjExMGM3MTI1YWJjYThkYzRjODNkNjEyZjZmYyIsInRhZyI6IiJ9" },
  { title: "Vet all Industrial Court judges too", outlet: "The Standard", date: "23 Mar 2012", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6InlZVmFHV2tSM2E3NWpJSllRak5NaEE9PSIsInZhbHVlIjoiWjgrVGRxYnNFYzlYSC9vTlV5Z0xIc0ZTZ0pWdFMwU2ozNmp2NXBXSytiRjkyUnF6Q21JVVZIcndhZ2M1aU9sbzlzQXdKWnhNR04rd0VFMlZWd3RnMEZIcU9PVHNXcnNyMGhZb0FXUUVuUDA9IiwibWFjIjoiNDg3YWM2ZTIwYTYyNzg3OTc1Yjg3NWViOGY0MDkwMzA0MzFlYTljY2M0YzczZTgwZTczMGVmYjNlMWMyNTBkOSIsInRhZyI6IiJ9" },
  { title: "Why justice must precede peace", outlet: "The Standard", date: "28 Feb 2012", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6Ii9DU3Y5WER1dzcyRHNZS1d3VVpZWmc9PSIsInZhbHVlIjoiU2JTb01OelpHQUY2OWJkc1JTbUNZWFVRUk1OSmxycHNYOHczNWVmcmlvMU9TSXlIbmtKc0haRVorQnNiR2NiekNwajhwc1lhbGFNOXdscUNRSjh3V2QyKzQ1aWNGZ0RQRGR1eGVJUWszM2M9IiwibWFjIjoiZTAwODhkNzNjOTMxZGI3NTQ3MjE4ZGUxYTg0MjY3NzdhYjM3MGI3YjMxYzNhNmQwODhlNzdkNmM4ZWE3MWYwZCIsInRhZyI6IiJ9" },
  { title: "Who is really benefiting from EPZs in Kenya?", outlet: "Business Daily Africa", date: "4 Jan 2012", link: "https://www.businessdailyafrica.com/bd/opinion-analysis/who-is-really-benefiting-from-epzs-in-kenya--3741736" },
  { title: "The right to life versus the right to strike", outlet: "Business Daily Africa", date: "14 Dec 2011", link: "https://www.businessdailyafrica.com/bd/opinion-analysis/columnists/the-right-to-life-versus-the-right-to-strike-1997136" },
  { title: "Women should demand gender parity", outlet: "Business Daily Newspaper", date: "23 Nov 2011", link: "https://www.businessdailyafrica.com/bd/opinion-analysis/columnists/women-should-demand-gender-parity--1996032" },
  { title: "Labour Institutions Act must be in line with Constitution", outlet: "The Standard", date: "20 Mar 2011", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6ImxUU3JxNmVEdXh4T2szaGN2cnZ3Snc9PSIsInZhbHVlIjoicGdaUnJ0dVc1b21OWk9YR1hKcTRLNzFhR0tyTFhuOTZ3MGlaRGdvWEpUZ1R5U1NhazA2L1F4YnNNM0hJbU5Zb0JoTlM0dGNnQzFIZlhTUk5PVFJmbGFoQmFncEx0bUgySkc2dnM5TDViMEE9IiwibWFjIjoiNzhlNGUyMGUxYjBkMjkyY2M4MGRhNjRkYjRhZmFmMTliYzM5N2I3M2RkODkzNGQzMmMwOTFiMjk2Yzg3NjM0ZiIsInRhZyI6IiJ9" },
  { title: "Trade unions’ elections a sham’", outlet: "The Standard", date: "4 Feb 2011", link: "https://www.standardmedia.co.ke/sso/?content=eyJpdiI6IlBtY2FHbUkrTTdQY1lCbjRLbFdCNUE9PSIsInZhbHVlIjoiTStlZTc3eEdQeWdWSmhMelZlbkpReWFha3BJU3JoQ25DbjlqNm9vZHZjU3FNeDdTck1tUkk1Z1ZtNDgxTkp1ZDQ2UlhuZTBla29rZE1MTmszNUtSWFpiS0tGOVZEdGpONHpSRFNERDU1NHc9IiwibWFjIjoiMzIyMmViMmQ2YzUxOTY1MjQ4OWViOGI0OTNiN2M3NDY1NmQzYjMxMWNlMWIxM2ZkYmIzYWY5MmIwZDg2MGYxNSIsInRhZyI6IiJ9" },
];

export const affiliations = [
  "Law Society of Kenya (Member)",
  "East African Law Society (Member)",
  "Agora Strategy (Advisor)",
  "African Human Rights Law Journal (Reviewer)"
];


export const contactInfo = [
  {
    city: "Nairobi, Kenya",
    affiliation: "Munyao Kayugira & Company Advocates",
    address: "Lower Hill Duplex, 2nd Floor, Room 51, Bunyala Road",
    email: "edward@smkadvocates.com",
    phone: "+254 723 653 745",
    type: "Legal Practice"
  },
  {
    city: "Amsterdam, Netherlands",
    affiliation: "Amsterdam Center for International Law",
    address: "University of Amsterdam, Faculty of Law, REC A, Room 10.02, Nieuwe Achtergracht 166, 1018 WV",
    email: "e.k.murimi@uva.nl",
    phone: "+31 6 26 26 78 52",
    type: "Academic Research"
  }
];
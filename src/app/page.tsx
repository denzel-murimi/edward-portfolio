// app/page.tsx
"use client"; 
import { profile, experience, education, publications, certifications, consultancies, media, contactInfo } from '../../lib/data';
import Image from 'next/image'; 
import { Mail, MapPin, Linkedin, ArrowUpRight, Briefcase, GraduationCap, BookOpen, BadgeCheck, Mic } from "lucide-react";
import { MotionSection } from './components/MotionSection';
import Gallery from './components/gallery';
import MobileNav from './components/mobile';
import TopNavbar from './components/TopNavbar'; // <-- NEW IMPORT
import { use, useState } from "react";
import { motion } from "framer-motion";
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function SectionTitle({
  icon: Icon,
  kicker,
  title,
}: {
  icon: any;
  kicker?: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur p-2">
        <Icon className="h-5 w-5 text-legal-navy" />
      </div>
      <div>
        {kicker && <p className="text-xs font-semibold tracking-widest text-legal-gold uppercase">{kicker}</p>}
        <h3 className="font-serif text-2xl md:text-3xl text-legal-navy leading-tight">{title}</h3>
      </div>
    </div>
  );
}

export default function Home() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const ABOUT_PREVIEW_CHARS = 260;
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* --- NAVIGATION --- */}
      <TopNavbar />
      <MobileNav />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-10 max-w-6xl flex-1">
        
        {/* HERO / ABOUT SECTION (Redesigned Two-Column Layout) */}
        <section
 
  className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-28  scroll-mt-28 md:scroll-mt-32"
>
  {/* Background Glow */}
  <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-legal-gold/10 blur-3xl rounded-full pointer-events-none" />

  {/* LEFT COLUMN */}
  <MotionSection
    id="hero"
    variants={fadeUp}
    initial="hidden"
    animate="show"
    transition={{ duration: 0.5 }}
    className="relative z-10"
  >
    {/* Kicker */}
    <p className="text-xs font-bold tracking-[0.25em] text-legal-gold uppercase mb-4">
      {profile.role}
    </p>

    {/* Headline */}
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-legal-navy leading-[1.05] mb-6 max-w-[14ch]">
      {profile.headline}
    </h1>

    {/* About (preview + fade + toggle) */}
    <div className="max-w-xl mb-8">
      <div className="relative">
        <motion.p
          layout
          className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line"
        >
          {aboutExpanded
            ? profile.about
            : profile.about.length > ABOUT_PREVIEW_CHARS
              ? `${profile.about.slice(0, ABOUT_PREVIEW_CHARS)}…`
              : profile.about}
        </motion.p>

        {/* Fade overlay ONLY when collapsed */}
        {!aboutExpanded && profile.about.length > ABOUT_PREVIEW_CHARS && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>

      {/* Read more/less */}
      {profile.about.length > ABOUT_PREVIEW_CHARS && (
        <button
          type="button"
          onClick={() => setAboutExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-legal-gold hover:text-legal-navy transition-colors"
        >
          {aboutExpanded ? "Read less" : "Read more"}
          <span
            className={[
              "transition-transform duration-300",
              aboutExpanded ? "rotate-180" : "rotate-0",
            ].join(" ")}
          >
            ▼
          </span>
        </button>
      )}
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-4 mb-10">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-legal-navy text-black px-6 py-3 text-sm font-semibold hover:bg-transparent hover:text-legal-navy border border-legal-navy transition-all duration-300 shadow-soft"
      >
        Contact
      </a>

      
    </div>

    {/* Quick Info */}
    <div className="flex flex-col space-y-3 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-gray-400" />
        <span>{profile.location}</span>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="flex items-center gap-2 hover:text-legal-gold transition"
      >
        <Mail className="h-5 w-5 text-gray-400" />
        <span>{profile.email}</span>
      </a>
    </div>
  </MotionSection>

  {/* RIGHT COLUMN */}
  <MotionSection
    variants={fadeUp}
    initial="hidden"
    animate="show"
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative z-10"
  >
    {/* Image Card */}
    <div className="relative h-[460px] md:h-[620px] w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
      <Image
        src="/dkt.jpeg"
        alt={profile.name}
        fill
        className="object-cover object-top"
        priority
      />

      {/* Badge */}
      
    </div>

    {/* Highlights */}
    <div className="mt-6 grid grid-cols-2 gap-4">
      <div className="p-5 bg-white rounded-2xl shadow-soft border border-slate-200">
        <p className="text-2xl font-bold text-legal-navy">15+</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Years Experience
        </p>
      </div>

      <div className="p-5 bg-white rounded-2xl shadow-soft border border-slate-200">
        <p className="text-2xl font-bold text-legal-navy">30+</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Publications
        </p>
      </div>

      <div className="p-5 bg-white rounded-2xl shadow-soft border border-slate-200">
        <p className="text-2xl font-bold text-legal-navy">20+</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          Consultancies
        </p>
      </div>

      
    </div>
  </MotionSection>
</section>

        {/* EXPERIENCE SECTION */}
        <MotionSection
          id="experience"
          className="scroll-mt-28 md:scroll-mt-32"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-3xl border border-black/5 bg-white/75 backdrop-blur shadow-sm p-7 md:p-10">
            <SectionTitle icon={Briefcase} title="Work Experience" />
            <div className="grid gap-6">
              {experience.map((job) => (
                <div key={job.id} className="group rounded-2xl border border-black/5 bg-white p-5 hover:shadow-md transition">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h4 className="text-lg font-bold text-legal-navy">{job.role}</h4>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">{job.company}</span>
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 rounded-full border border-black/5 bg-slate-50 px-3 py-1 w-fit mt-2 sm:mt-0">
                      {job.dates}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-legal-navy/5 text-xs text-legal-navy border border-legal-navy/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* TWO COLUMN LAYOUT FOR EDUCATION & CERTIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* EDUCATION SECTION */}
          <MotionSection
            id="education"
            className="scroll-mt-28 pt-8 md:scroll-mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
              Education
            </h3>
            <div className="grid gap-4">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
                  <h4 className="font-bold text-lg text-legal-navy">{edu.degree}</h4>
                  <p className="text-legal-gold font-medium">{edu.institution}, {edu.location}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  {edu.details && <p className="text-sm text-gray-600 border-t border-gray-100 pt-2 mt-2">{edu.details}</p>}
                </div>
              ))}
            </div>
          </MotionSection>

          {/* CERTIFICATIONS & COURSES */}
          <MotionSection
            className="scroll-mt-28 pt-8 md:scroll-mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
              Specialized Training
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
                  <p className="font-bold text-gray-800 text-sm">{cert.course}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.inst} | {cert.year}</p>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>

        {/* CONSULTANCIES */}
        <MotionSection
          id="consultancies"
          className="mb-16 scroll-mt-28 md:scroll-mt-32"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-3xl border border-black/5 bg-white/75 backdrop-blur shadow-sm p-7 md:p-10">
            <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
              Selected Consultancies
            </h3>
            <ul className="space-y-6">
              {consultancies.map((item, idx) => (
                <li key={idx} className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-bold text-legal-navy md:w-1/4 shrink-0">{item.role}</span>
                  <div className="flex-1">
                    {item.items ? (
                      <ul className="space-y-2">
                        {item.items.map((subItem, subIdx) => (
                          <li key={subIdx} className="text-gray-600">
                            <span className="font-semibold text-legal-gold">{subItem.client}:</span> {subItem.details}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-600">
                        <span className="font-semibold text-legal-gold">{item.client}:</span> {item.details}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </MotionSection>

        {/* PUBLICATIONS & MEDIA (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* PUBLICATIONS */}
          <MotionSection
            id="publications"
            className="scroll-mt-28 md:scroll-mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
              Selected Publications
            </h3>
            <ul className="space-y-6">
              {publications.map((pub, idx) => (
                <li key={idx}>
                  <h4 className="font-bold text-lg text-legal-navy mb-3">{pub.category}</h4>
                  <ul className="space-y-2">
                    {pub.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="group cursor-pointer">
                        <a target="_blank" rel="noopener noreferrer" href={item.link} className="block bg-white hover:bg-slate-100 p-4 rounded-xl transition shadow-sm border border-black/5 hover:border-black/10">
                          <h5 className="font-bold text-legal-navy group-hover:text-amber-600 transition" dangerouslySetInnerHTML={{ __html: item.title }}/>                        
                          <p className="text-sm text-gray-500 italic mt-2">{item.venue}, {item.year}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </MotionSection>

          {/* MEDIA */}
          <MotionSection
            id="media"
            className="scroll-mt-28 md:scroll-mt-32"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
              Newspaper Articles
            </h3>
            <div className="grid gap-3">
              {media.map((item, idx) => (
                <a key={idx} target="_blank" rel="noopener noreferrer" href={item.link} className="flex justify-between items-center group bg-white rounded-xl px-4 py-3 shadow-sm border border-black/5 hover:border-black/10 hover:shadow-md transition">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-amber-600 transition pr-4">{item.title}</span>
                  <span className="text-xs text-gray-400 italic shrink-0">{item.outlet}, {item.date}</span>
                </a>
              ))}
            </div>
          </MotionSection>
        </div>

        {/* --- ENTICING PHOTO GALLERY --- */}
        <section id="gallery" className="mb-24 scroll-mt-28 md:scroll-mt-32">
          <Gallery />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-12 scroll-mt-28 md:scroll-mt-32">
          <h3 className="font-serif text-3xl text-center text-legal-navy mb-10">
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((office, idx) => (
              <div key={idx} className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <h4 className="text-legal-gold font-bold tracking-widest text-xs uppercase mb-2">
                  {office.city}
                </h4>
                <h5 className="font-serif text-xl font-bold mb-4 leading-tight text-white">
                  {office.affiliation}
                </h5>
                <div className="space-y-4 text-sm text-gray-300">
                  <p className="border-l-2 border-legal-gold pl-4 leading-relaxed">
                    {office.address}
                  </p>
                  <div className="pt-2 flex flex-col gap-3">
                    <a href={`mailto:${office.email}`} className="hover:text-white transition flex items-center gap-3">
                      <Mail className="h-4 w-4 text-legal-gold" /> {office.email}
                    </a>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-white transition flex items-center gap-3">
                      <Mic className="h-4 w-4 text-legal-gold" /> {office.phone}
                    </a>
                    <a href={office.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-gray-700 hover:text-legal-navy hover:shadow-md transition mt-4">
                      Visit Website <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="py-8 border-t border-gray-200 text-sm text-center text-gray-500 bg-white mt-auto">
        <p>© {new Date().getFullYear()} Dr. Edward Kahuthia Murimi. All rights reserved.</p>
      </footer>
    </main>
  );
}
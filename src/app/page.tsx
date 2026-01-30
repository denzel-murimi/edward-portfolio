// app/page.tsx
import { profile, experience, education, publications, certifications, consultancies, media } from '../../lib/data';
import Image from 'next/image'; 
import { Mail, MapPin, Linkedin, Twitter, ArrowUpRight, Briefcase, GraduationCap, BookOpen, BadgeCheck, Mic } from "lucide-react";
import { MotionSection } from './components/MotionSection';

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
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      
      {/* LEFT SIDEBAR / HEADER */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-legal-navy text-black p-8 md:fixed md:h-screen overflow-y-auto">
      {/* IMAGE SECTION */}
        <div className="relative w-[168px] h-[168px] rounded-full p-[2px] bg-gradient-to-br from-legal-gold via-yellow-400 to-amber-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl
 mb-6 mx-auto border border-black/20 backdrop-blur-md
">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-black">
            <Image 
              src={profile.photo} 
              alt={profile.name}
              fill
              className="object-cover object-top"
              priority 
            />
          </div>
        </div>
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2 leading-tight">
            {profile.name}
          </h1>
          <p className="text-legal-gold uppercase tracking-widest text-sm font-semibold">
            {profile.role}
          </p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 ">
          <div className="flex items-center gap-2 hover:text-black transition">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>{profile.location}</span>
              </div>
<a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-legal-navy transition hover:text-black transition"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="truncate">{profile.email}</span>
              </a>          

<div className="mt-5 flex flex-wrap gap-2">
              <a
                href={profile.socials.linkedin}
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 text-sm text-gray-700 hover:text-legal-navy hover:bg-gray-50 transition"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={profile.socials.twitter}
                className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-3 py-2 text-sm text-gray-700 hover:text-legal-navy hover:bg-gray-50 transition"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </a>
            </div>


        </div>

        <nav className="mt-12 hidden md:block space-y-4">
          {['About', 'Experience', 'Education', 'Publications'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-400 hover:text-black hover:translate-x-2 transition-transform">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="w-full md:w-2/3 lg:w-3/4 md:ml-[33.33%] lg:ml-[25%] p-8 md:p-16 bg-gradient-to-b from-paper to-white">

        
        {/* HERO SECTION */}
        <MotionSection
            id="about"
            className="scroll-mt-24 mb-10 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl border border-black/5 bg-white/75 backdrop-blur shadow-sm p-7 md:p-10">
              <p className="text-xs font-semibold tracking-widest text-legal-gold uppercase mb-3">
                Professional Profile
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-legal-navy leading-tight">
                {profile.headline}
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
                {profile.about}
              </p>
            </div>
          </MotionSection>

        {/* EXPERIENCE SECTION */}
          <MotionSection
            id="experience"
            className="scroll-mt-24 mb-10 max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-3xl border border-black/5 bg-white/75 backdrop-blur shadow-sm p-7 md:p-10">
              <SectionTitle icon={Briefcase} title="Selected Experience" />
              <div className="grid gap-6">
                {experience.map((job) => (
                  <div
                    key={job.id}
                    className="group rounded-2xl border border-black/5 bg-white p-5 hover:shadow-md transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h4 className="text-lg font-bold text-legal-navy">{job.role}</h4>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">{job.company}</span>
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-gray-500 rounded-full border border-black/5 bg-white px-3 py-1 w-fit">
                        {job.dates}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-gray-700 leading-relaxed">{job.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-legal-navy/5 text-xs text-legal-navy border border-legal-navy/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionSection>

        {/* EDUCATION SECTION */}
        <MotionSection
            id="education"
            className="mb-10 max-w-3xl scroll-mt-24 "
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          > 
          <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
            Education
          </h3>
          <div className="grid gap-6">
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
            className="mb-10 max-w-3xl scroll-mt-24"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
          <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
           Specialized Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {certifications.map((cert, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-md transition">
            <p className="font-bold text-gray-800 text-sm">{cert.course}</p>
            <p className="text-xs text-gray-500 mt-1">{cert.inst} | {cert.year}</p>
          </div>
    ))}
  </div>
         </MotionSection>

{/* CONSULTANCIES */}
<MotionSection
    className="mb-10 max-w-3xl scroll-mt-24"
    variants={fadeUp}
    initial="hidden"
    animate="show"
    transition={{ duration: 0.5 }}
  >
  <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
    Select Consultancies
  </h3>
  <ul className="space-y-4">
    {consultancies.map((item, idx) => (
      <li key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
        <span className="font-bold text-legal-navy min-w-[150px]">{item.role}</span>
        <span className="text-gray-600">
          <span className="font-semibold text-legal-gold">{item.client}:</span> {item.details}
        </span>
      </li>
    ))}
  </ul>
</MotionSection>

{/* MEDIA */}
<MotionSection
    className="mb-10 max-w-3xl scroll-mt-24"
    variants={fadeUp}
    initial="hidden"
    animate="show"
    transition={{ duration: 0.5 }}
  >
  <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
    Media & Commentary
  </h3>
  <div className="grid gap-3">
    {media.map((item, idx) => (
      <a key={idx} target='_blank' rel="noopener noreferrer" href={item.link} className="flex justify-between items-center group border-b border-gray-100 pb-2 flex justify-between items-center group rounded-xl px-3 py-2 hover:bg-white transition">
        <span className="text-gray-700 group-hover:text-legal-navy transition">{item.title}</span>
        <span className="text-xs text-gray-400 italic shrink-0 ml-4">{item.outlet}, {item.date}</span>
      </a>
    ))}
  </div>
</MotionSection>

        {/* PUBLICATIONS SECTION */}
        <MotionSection
            id="publications"
            className="mb-10 max-w-3xl scroll-mt-24"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
          <h3 className="font-serif text-2xl text-legal-navy border-b-2 border-legal-navy/10 pb-4 mb-8">
            Selected Publications
          </h3>
          <ul className="space-y-4">
            {publications.map((pub, idx) => (
              <li key={idx}>
                <h4 className="font-bold text-lg text-legal-navy mb-2">{pub.category}</h4>
                <ul className="space-y-2">
                  {pub.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="group cursor-pointer">
                      <a target='_blank' rel="noopener noreferrer" href={item.link} className="block hover:bg-white p-4 -mx-4 rounded-lg transition block bg-white/0 hover:bg-white p-4 -mx-4 rounded-2xl transition shadow-sm hover:shadow-md border border-transparent hover:border-black/5">
                        <h5 className="font-bold text-legal-navy group-hover:text-legal-gold transition">{item.title}</h5>
                        <p className="text-sm text-gray-500 italic mt-1">{item.venue}, {item.year}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </MotionSection>
        
        {/* FOOTER */}
        <footer className="pt-10 border-t border-gray-200 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Dr. Edward Kahuthia Murimi. All rights reserved.</p>
        </footer>

      </div>
    </main>
  );
}
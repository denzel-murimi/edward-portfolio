// components/TopNavbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type NavItem = { href: string; label: string };

export default function TopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  const items: NavItem[] = useMemo(
    () => [
      { href: "#hero", label: "Home" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#consultancies", label: "Consultancies" },
      { href: "#publications", label: "Publications" },
      { href: "#gallery", label: "Gallery" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  // Scroll styling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight (scroll spy)
  useEffect(() => {
    const ids = items.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header
      className={[
        "hidden md:block sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-slate-200 shadow-soft"
          : "bg-white/50 backdrop-blur-md border-b border-slate-100",
      ].join(" ")}
    >
      {/* Subtle gradient hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-legal-gold/40 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Brand */}
          <Link href="#hero" className="group flex flex-col leading-tight">
            
            <span className="text-lg lg:text-xl font-bold text-legal-navy tracking-tight group-hover:text-legal-gold transition-colors">
              Dr. Edward Kahuthia Murimi
            </span>
          </Link>

          {/* Pill Nav */}
          <nav
            className={[
              "mx-6 flex-1 max-w-3xl",
              "rounded-full border border-slate-200 bg-white/70 backdrop-blur",
              "shadow-soft px-2 py-1",
            ].join(" ")}
            aria-label="Primary"
          >
            <ul className="flex items-center justify-between gap-1 relative">
              {items.map((item) => {
                const isActive = active === item.href;

                return (
                  <li key={item.href} className="flex-1 relative">
                    <Link
                      href={item.href}
                      onClick={() => setActive(item.href)}
                      className={[
                        "relative flex items-center justify-center",
                        "rounded-full px-3 py-2 text-[11px] lg:text-xs",
                        "font-semibold tracking-widest uppercase transition-colors",
                        isActive
                          ? "text-legal-navy"
                          : "text-slate-600 hover:text-legal-navy",
                      ].join(" ")}
                    >
                      {/* Moving active background */}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-pill"
                          className={[
                            "absolute inset-0 -z-10 rounded-full",
                            "bg-legal-gold/15 border border-legal-gold/25",
                            "backdrop-blur",
                            "shadow-[0_8px_30px_rgba(201,166,70,0.22)]",
                          ].join(" ")}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 35,
                          }}
                        />
                      )}

                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}
          
        </div>
      </div>
    </header>
  );
}
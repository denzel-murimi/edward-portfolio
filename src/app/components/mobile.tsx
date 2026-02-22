// components/MobileNav.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { href: "#hero", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#consultancies", label: "Consultancies" },
    { href: "#education", label: "Education" },
    { href: "#publications", label: "Publications" },
    { href: "#media", label: "Media" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl shadow-soft' 
            : 'bg-white/90 backdrop-blur-md'
        } border-b border-gray-200 px-4 py-3 flex justify-between items-center`}
      >
        <span className="font-bold text-xl text-legal-navy">
          <span className="text-legal-gold">E</span>KM
        </span>
        <button 
          onClick={toggleMenu} 
          className="p-2 text-legal-navy bg-slate-50 rounded-xl hover:bg-legal-gold/10 focus:outline-none transition-all duration-200 active:scale-95"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={closeMenu}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[72px] right-4 left-4 bg-legal-navy text-white rounded-2xl shadow-2xl border border-legal-gold/20 overflow-hidden"
            >
              <div className="p-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block py-3 px-4 hover:bg-legal-gold/20 rounded-xl transition-all duration-200 text-slate-100 hover:text-white font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
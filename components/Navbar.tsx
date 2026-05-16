"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ── Liens de navigation ── */
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  /* Détection du scroll pour fond opaque */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Fermer le menu mobile lors d'un changement de page */
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ── Logo ── */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 border border-gold flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <div className="w-3 h-3 bg-gold group-hover:scale-90 transition-transform duration-500" />
          </div>
          <span
            className="font-display text-lg tracking-wide text-cream"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Thibaut{" "}
            <span className="text-gold" style={{ fontStyle: "italic" }}>
              Gervy
            </span>
          </span>
        </Link>

        {/* ── Liens desktop ── */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                pathname === link.href
                  ? "text-gold"
                  : "text-cream-muted hover:text-cream"
              }`}
            >
              {link.label}
              {/* Soulignement doré animé */}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                  pathname === link.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* CTA Contact */}
          <Link href="/contact" className="btn-primary text-sm py-3 px-5">
            Parlons-en
          </Link>
        </div>

        {/* ── Bouton menu mobile ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-cream-muted hover:text-gold transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Menu mobile ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-surface border-b border-dark-border"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-base font-medium border-b border-dark-border/50 last:border-0 transition-colors ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-cream-muted hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

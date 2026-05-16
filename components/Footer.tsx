import Link from "next/link";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

/* ── Liens footer ── */
const footerLinks = {
  navigation: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    {
      href: "https://linkedin.com/in/thibautgervy",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://instagram.com/thibautgervy",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "mailto:thibautgervy.web@gmail.com",
      label: "Email",
      icon: Mail,
    },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      {/* ── CTA bande ── */}
      <div className="border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-display text-2xl text-cream mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prêt à remplir votre agenda ?
            </p>
            <p className="text-cream-muted text-sm">
              Discutons de votre situation sans engagement.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Prendre contact <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Footer principal ── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo + baseline */}
          <div className="md:col-span-1">
            <p
              className="font-display text-xl text-cream mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thibaut{" "}
              <span className="text-gold italic">Gervy</span>
            </p>
            <p className="text-cream-muted text-sm leading-relaxed max-w-xs">
              Spécialiste Meta Ads & conversion pour praticiens et thérapeutes
              bien-être. Des résultats mesurables, un accompagnement humain.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-muted text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux & contact */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-5">
              Me retrouver
            </p>
            <ul className="space-y-3">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cream-muted text-sm hover:text-gold transition-colors duration-200 group"
                    >
                      <Icon
                        size={15}
                        className="group-hover:scale-110 transition-transform"
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Email direct */}
            <div className="mt-6 pt-6 border-t border-dark-border">
              <p className="text-xs text-cream-dim mb-1">Contact direct</p>
              <a
                href="mailto:thibautgervy.web@gmail.com"
                className="text-sm text-cream-muted hover:text-gold transition-colors break-all"
              >
                thibautgervy.web@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── Bas de footer : mentions légales ── */}
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream-dim text-xs">
            © {year} Thibaut Gervy. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/mentions-legales"
              className="text-cream-dim text-xs hover:text-cream-muted transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-cream-dim text-xs hover:text-cream-muted transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

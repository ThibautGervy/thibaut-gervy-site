import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thibautgervy.fr"),
  title: {
    default: "Thibaut Gervy — Meta Ads & Marketing Digital pour Praticiens Bien-être",
    template: "%s | Thibaut Gervy",
  },
  description:
    "Spécialiste Meta Ads et optimisation de conversion pour naturopathes, coachs et thérapeutes. Remplissez votre agenda grâce à des campagnes Facebook & Instagram qui convertissent vraiment. Freelance marketing digital bien-être — toute la France.",
  keywords: [
    "Meta Ads naturopathe",
    "publicité facebook thérapeute",
    "marketing digital bien-être",
    "conversion tunnel systeme.io",
    "Facebook Ads praticien bien-être",
    "Instagram Ads coach",
    "marketing digital naturopathe",
    "publicité facebook naturopathe",
    "Meta Ads coach de vie",
    "marketing digital réflexologue",
    "tunnel de conversion bien-être",
    "systeme.io praticien",
    "freelance marketing bien-être",
    "acquisition client naturopathe",
    "campagnes Meta praticiens",
    "optimisation conversion thérapeute",
  ],
  authors: [{ name: "Thibaut Gervy", url: "https://thibautgervy.fr" }],
  creator: "Thibaut Gervy",
  publisher: "Thibaut Gervy",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thibautgervy.fr",
    siteName: "Thibaut Gervy — Meta Ads Bien-être",
    title: "Thibaut Gervy — Meta Ads & Marketing Digital pour Praticiens Bien-être",
    description:
      "Remplissez votre agenda grâce à des campagnes Meta Ads pensées pour les naturopathes, coachs et thérapeutes. Résultats mesurables, accompagnement humain.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Gervy — Spécialiste Meta Ads pour praticiens bien-être",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thibaut Gervy — Meta Ads & Marketing Digital pour Praticiens Bien-être",
    description:
      "Remplissez votre agenda grâce à des campagnes Meta Ads pensées pour les naturopathes, coachs et thérapeutes.",
    images: ["/og-image.jpg"],
    creator: "@thibautgervy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thibautgervy.fr",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Thibaut Gervy — Marketing Digital",
              description:
                "Spécialiste Meta Ads et optimisation de conversion pour praticiens et thérapeutes bien-être.",
              url: "https://thibautgervy.fr",
              email: "thibautgervy.web@gmail.com",
              areaServed: "France",
              serviceType: [
                "Meta Ads",
                "Facebook Ads",
                "Marketing Digital",
                "Optimisation de conversion",
                "Création de tunnels de vente",
              ],
              knowsAbout: [
                "Meta Ads", "Facebook Ads", "Instagram Ads",
                "Marketing digital bien-être", "Naturopathie",
                "Coaching", "systeme.io", "WordPress", "SEO",
              ],
              priceRange: "€€",
              sameAs: [
                "https://linkedin.com/in/thibautgervy",
                "https://instagram.com/thibautgervy",
              ],
            }),
          }}
        />
      </head>
      <body className="grain-overlay antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

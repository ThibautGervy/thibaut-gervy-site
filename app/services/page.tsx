import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BarChart3, FileText, RefreshCw, MessageSquare, Target, TrendingUp } from "lucide-react";
import AnimatedSection, { StaggerGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Services Meta Ads pour Naturopathes & Thérapeutes — Setup & Suivi Mensuel",
  description:
    "Deux offres Meta Ads sur mesure pour praticiens bien-être : Setup complet Facebook & Instagram Ads (à partir de 690 €) ou Suivi mensuel avec optimisation continue (à partir de 390 €/mois). Tunnel systeme.io inclus.",
  alternates: { canonical: "https://thibautgervy.fr/services" },
  openGraph: {
    title: "Services Meta Ads — Thibaut Gervy",
    description: "Setup complet Meta Ads ou suivi mensuel pour naturopathes, coachs et thérapeutes. Résultats mesurables.",
    url: "https://thibautgervy.fr/services",
  },
};

const setupOffer = {
  badge: "Mission ponctuelle",
  title: "Setup complet Meta Ads",
  subtitle: "Lancez vos premières campagnes Facebook & Instagram sur des bases solides",
  price: "À partir de 690 €",
  priceNote: "Tarif fixe — pas de surprise",
  description:
    "Vous démarrez avec Meta Ads ou vous repartez de zéro ? Je prends en charge l'intégralité du setup : structure du compte, audiences, créatifs, tunnel de conversion (systeme.io ou WordPress). À la livraison, vos campagnes sont prêtes à générer vos premiers rendez-vous.",
  inclus: [
    "Audit de votre situation actuelle (page, audience, concurrents)",
    "Paramétrage du Business Manager & Pixel Meta",
    "Définition des audiences cibles (intérêts, lookalike)",
    "Création des visuels publicitaires (3 à 6 formats)",
    "Rédaction des accroches & copywriting des annonces",
    "Configuration du tunnel de conversion (systeme.io, WordPress ou LearnyBox)",
    "Lancement et tests A/B initiaux",
    "Guide de prise en main pour la suite",
    "1 call de suivi 3 semaines après lancement",
  ],
  benefits: [
    { icon: Target, text: "Ciblage précis dès le départ" },
    { icon: TrendingUp, text: "Fondations solides pour scaler" },
    { icon: FileText, text: "Documentation complète livrée" },
  ],
  ideal: "Idéal si vous voulez démarrer correctement, ou repartir sur des bases saines après des campagnes peu performantes.",
  cta: "Demander un devis gratuit",
};

const monthlyOffer = {
  badge: "Accompagnement continu",
  title: "Suivi mensuel Meta Ads",
  subtitle: "Déléguez, recevez des clients, concentrez-vous sur votre pratique",
  price: "À partir de 390 €/mois",
  priceNote: "Sans engagement — résiliable à tout moment",
  description:
    "Vos campagnes Meta Ads tournent en permanence ? Je m'occupe de tout : optimisation quotidienne, ajustements créatifs, reporting mensuel clair. Vous recevez chaque mois un bilan complet et une stratégie pour le mois suivant.",
  inclus: [
    "Gestion complète de vos campagnes Facebook & Instagram actives",
    "Optimisation hebdomadaire (enchères, audiences, créatifs)",
    "Création de nouveaux visuels chaque mois (2 à 4 formats)",
    "Tests A/B continus",
    "Rapport mensuel détaillé (coût par lead, ROAS, recommandations)",
    "Call mensuel de 45 min — bilan + stratégie",
    "Réactivité sous 24h par email / WhatsApp",
    "Veille et adaptation aux changements de l'algorithme Meta",
  ],
  benefits: [
    { icon: RefreshCw, text: "Optimisation continue sans effort" },
    { icon: BarChart3, text: "Reporting transparent & lisible" },
    { icon: MessageSquare, text: "Accès direct, réponse rapide" },
  ],
  ideal: "Idéal si vous voulez des clients de façon régulière, sans avoir à gérer vous-même la complexité de Meta Ads.",
  cta: "Commencer dès ce mois-ci",
};

const faq = [
  {
    q: "Vous accompagnez quels types de praticiens ?",
    a: "Naturopathes, ostéopathes, réflexologues, coachs de vie, thérapeutes holistiques, sophrologues, nutrithérapeutes… Tout professionnel du bien-être et de la santé naturelle ayant besoin de clients.",
  },
  {
    q: "Combien de temps avant de voir des résultats avec Meta Ads ?",
    a: "En général, les premiers leads arrivent dès les 2 premières semaines. Des résultats stables et optimisés s'observent après 4 à 6 semaines — le temps nécessaire pour que l'algorithme Meta apprenne.",
  },
  {
    q: "Quel budget publicitaire Meta Ads faut-il prévoir ?",
    a: "Je recommande un minimum de 300 €/mois de budget Meta Ads (séparé de ma prestation) pour obtenir des données exploitables. Idéalement 500 à 800 € pour scaler plus rapidement.",
  },
  {
    q: "Est-ce que vous créez aussi le tunnel de conversion sur systeme.io ?",
    a: "Oui. Si votre page actuelle ne convertit pas, je peux l'optimiser ou en créer une nouvelle sur systeme.io, LearnyBox, ou WordPress. C'est souvent la clé pour maximiser le ROI des campagnes Meta Ads.",
  },
  {
    q: "Peut-on tester avant de s'engager sur le mensuel ?",
    a: "Absolument. Commencer par le Setup complet est une excellente façon de tester notre collaboration avant d'envisager un suivi mensuel.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Meta Ads pour praticiens bien-être",
            provider: { "@type": "Person", name: "Thibaut Gervy" },
            areaServed: "France",
            offers: [
              {
                "@type": "Offer",
                name: "Setup complet Meta Ads",
                price: "690",
                priceCurrency: "EUR",
                description: "Création, paramétrage et lancement de campagnes Meta Ads pour praticiens bien-être",
              },
              {
                "@type": "Offer",
                name: "Suivi mensuel Meta Ads",
                price: "390",
                priceCurrency: "EUR",
                description: "Gestion et optimisation mensuelle des campagnes Meta Ads",
              },
            ],
          }),
        }}
      />

      <section className="pt-36 pb-20 bg-dark-surface border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="gold-line mb-5" />
            <h1 className="font-display text-5xl md:text-6xl text-cream mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Mes <em className="text-gold">offres</em>
            </h1>
            <p className="text-cream-muted text-lg max-w-xl leading-relaxed">
              Deux façons d'avancer selon votre situation. Des prestations Meta Ads taillées pour les praticiens bien-être — naturopathes, coachs, thérapeutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase border border-gold/30 px-3 py-1 rounded-sm mb-6">{setupOffer.badge}</span>
                <h2 className="font-display text-4xl md:text-5xl text-cream mb-3" style={{ fontFamily: "var(--font-display)" }}>{setupOffer.title}</h2>
                <p className="text-gold text-base mb-6">{setupOffer.subtitle}</p>
                <p className="text-cream-muted text-base leading-relaxed mb-8">{setupOffer.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {setupOffer.benefits.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.text} className="bg-dark-elevated border border-dark-border rounded-sm p-4 text-center">
                        <Icon size={18} className="text-gold mx-auto mb-2" />
                        <p className="text-cream-muted text-xs leading-tight">{b.text}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-gold/5 border border-gold/20 rounded-sm p-5 mb-8">
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Idéal pour</p>
                  <p className="text-cream-muted text-sm leading-relaxed">{setupOffer.ideal}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div>
                    <p className="text-gold text-3xl font-semibold">{setupOffer.price}</p>
                    <p className="text-cream-dim text-xs mt-1">{setupOffer.priceNote}</p>
                  </div>
                  <Link href="/contact" className="btn-primary">{setupOffer.cta} <ArrowRight size={16} /></Link>
                </div>
              </div>
              <div className="card-glass rounded-sm p-8">
                <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-6">Ce qui est inclus</p>
                <ul className="space-y-4">
                  {setupOffer.inclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-cream-muted text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
      </div>

      <section className="section-padding bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="card-glass rounded-sm p-8 order-2 lg:order-1">
                <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-6">Ce qui est inclus</p>
                <ul className="space-y-4">
                  {monthlyOffer.inclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-cream-muted text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block text-xs font-semibold tracking-widest text-gold uppercase border border-gold/30 px-3 py-1 rounded-sm mb-6">{monthlyOffer.badge}</span>
                <h2 className="font-display text-4xl md:text-5xl text-cream mb-3" style={{ fontFamily: "var(--font-display)" }}>{monthlyOffer.title}</h2>
                <p className="text-gold text-base mb-6">{monthlyOffer.subtitle}</p>
                <p className="text-cream-muted text-base leading-relaxed mb-8">{monthlyOffer.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {monthlyOffer.benefits.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.text} className="bg-dark-elevated border border-dark-border rounded-sm p-4 text-center">
                        <Icon size={18} className="text-gold mx-auto mb-2" />
                        <p className="text-cream-muted text-xs leading-tight">{b.text}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-gold/5 border border-gold/20 rounded-sm p-5 mb-8">
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Idéal pour</p>
                  <p className="text-cream-muted text-sm leading-relaxed">{monthlyOffer.ideal}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  <div>
                    <p className="text-gold text-3xl font-semibold">{monthlyOffer.price}</p>
                    <p className="text-cream-dim text-xs mt-1">{monthlyOffer.priceNote}</p>
                  </div>
                  <Link href="/contact" className="btn-primary">{monthlyOffer.cta} <ArrowRight size={16} /></Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="mb-12">
            <span className="gold-line mb-5" />
            <h2 className="font-display text-4xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
              Questions <em className="text-gold">fréquentes</em>
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-glass rounded-sm p-6">
                  <h3 className="font-medium text-cream mb-3 text-sm">{item.q}</h3>
                  <p className="text-cream-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

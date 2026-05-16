import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Users, Quote } from "lucide-react";
import AnimatedSection, { StaggerGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Meta Ads & Marketing Digital pour Naturopathes et Thérapeutes",
  description:
    "Transformez votre visibilité en clients grâce à des campagnes Meta Ads qui convertissent vraiment. Spécialiste marketing digital pour naturopathes, coachs et thérapeutes bien-être — toute la France.",
  alternates: { canonical: "https://thibautgervy.fr" },
  openGraph: {
    title: "Thibaut Gervy — Meta Ads pour Naturopathes & Thérapeutes",
    description:
      "Remplissez votre agenda grâce à des campagnes Facebook & Instagram pensées pour les praticiens bien-être.",
    url: "https://thibautgervy.fr",
  },
};

const problems = [
  "Vous dépensez en publicité sans voir de retour concret",
  "Votre page de vente attire du trafic mais personne ne prend rendez-vous",
  "Vous manquez de temps pour gérer vos campagnes correctement",
  "Les agences généralistes ne comprennent pas votre secteur",
];

const solutions = [
  {
    icon: Target,
    title: "Campagnes Meta Ads ciblées",
    desc: "Un message précis pour les bonnes personnes au bon moment — pas de gaspillage budgétaire!",
  },
  {
    icon: TrendingUp,
    title: "Tunnel de conversion optimisé",
    desc: "Votre page transformée pour convertir les visiteurs en clients (systeme.io, WordPress).",
  },
  {
    icon: Users,
    title: "Expertise secteur bien-être",
    desc: "Naturopathie, coaching, réflexologie — votre univers est ma spécialité exclusive.",
  },
];

const servicesPrev = [
  {
    label: "Mission ponctuelle",
    title: "Setup complet Meta Ads",
    desc: "Création, paramétrage et lancement de vos campagnes Facebook & Instagram. Prêt à générer vos premiers leads.",
    price: "À partir de 690 €",
  },
  {
    label: "Accompagnement",
    title: "Suivi mensuel",
    desc: "Gestion, optimisation et reporting mensuel de vos campagnes Meta Ads actives.",
    price: "À partir de 390 €/mois",
  },
];

const testimonial = {
  quote:
    "En 6 semaines, j'ai rempli mon carnet de rdv pour les 3 prochains mois. Je n'aurais jamais pensé que Meta Ads pouvait fonctionner aussi bien pour ma pratique de naturopathie.",
  name: "Sophie M.",
  role: "Naturopathe, Lyon",
  initials: "SM",
};

export default function HomePage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">

        {/* ── Photo plein droite ── */}
        <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block">
          <Image
            src="/thibaut-portrait.png"
            alt="Thibaut Gervy — Spécialiste Meta Ads pour praticiens bien-être"
            fill
            priority
            className="object-cover object-top"
            sizes="55vw"
          />
          {/* Fondu gauche vers le fond sombre */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
          {/* Fondu bas subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20" />
        </div>

        {/* ── Contenu texte ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-xl">

            {/* Tagline */}
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-10">
                <span className="gold-line" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  Spécialiste Meta Ads · Bien-être
                </span>
              </div>
            </AnimatedSection>

            {/* H1 — ultra épuré */}
            <AnimatedSection delay={0.1}>
              <h1
                className="font-display text-5xl md:text-6xl lg:text-[68px] text-cream leading-[1.05] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Et si votre agenda
                <br />
                était plein dès
                <br />
                <em className="text-gold not-italic">le mois prochain ?</em>
              </h1>
            </AnimatedSection>

            {/* Sous-titre — 1 seule phrase */}
            <AnimatedSection delay={0.2}>
              <p className="text-cream-muted text-lg leading-relaxed mb-10 max-w-md">
                Campagnes Meta Ads sur mesure pour{" "}
                <span className="text-cream">naturopathes, coachs</span> et{" "}
                <span className="text-cream">thérapeutes</span> qui veulent
                des clients, pas des clics.
              </p>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link href="/contact" className="btn-primary">
                  Parlons de votre projet <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Voir mes offres
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats — preuve sociale */}
            <AnimatedSection delay={0.4}>
              <div className="flex gap-10 pt-8 border-t border-dark-border/60">
                {[
                  { value: "20+", label: "praticiens accompagnés" },
                  { value: "×3", label: "ROI moyen" },
                  { value: "11 €", label: "coût par lead moyen" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display text-2xl text-gold mb-0.5"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-cream-dim text-xs leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Badge flottant sur la photo */}
        <div className="absolute bottom-10 right-10 hidden lg:block z-20">
          <div className="bg-dark-surface/90 backdrop-blur-sm border border-gold/30 rounded-sm px-5 py-4">
            <p className="text-xs text-cream-dim mb-1">Coût par lead après optimisation</p>
            <p className="text-gold font-semibold text-xl">-60% <span className="text-cream-muted text-xs font-normal">en moyenne</span></p>
          </div>
        </div>
      </section>

      {/* ════════ PROBLÈME ════════ */}
      <section className="section-padding bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection direction="left">
                <span className="gold-line mb-5" />
                <h2
                  className="font-display text-4xl md:text-5xl text-cream mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Vous avez le talent.
                  <br />
                  <em className="text-gold">Pas encore les clients.</em>
                </h2>
                <p className="text-cream-muted text-base leading-relaxed mb-8">
                  Être un excellent praticien ne suffit pas pour remplir son
                  agenda. Dans un monde numérique saturé, la visibilité ne
                  s'improvise plus.
                </p>
                <ul className="space-y-4">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream-muted text-sm">
                      <span className="mt-1 w-4 h-4 rounded-full border border-cream-dim/30 flex-shrink-0 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream-dim" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right" className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="/thibaut-laptop.png"
                  alt="Thibaut Gervy analysant des campagnes Meta Ads"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-dark-surface/90 backdrop-blur-sm border border-dark-border rounded-sm px-4 py-3">
                  <p className="text-xs text-cream-dim mb-0.5">Coût par lead moyen</p>
                  <p className="text-gold font-semibold text-lg">
                    -60%{" "}
                    <span className="text-cream-muted text-xs font-normal">après optimisation</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ SOLUTION ════════ */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection direction="left" className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="/thibaut-client.png"
                  alt="Thibaut Gervy en consultation avec une praticienne bien-être"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="gold-line mb-5" />
              <h2
                className="font-display text-4xl md:text-5xl text-cream mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                La solution,{" "}
                <em className="text-gold">c'est la spécialité</em>
              </h2>
              <p className="text-cream-muted text-base leading-relaxed">
                Je ne travaille qu'avec des praticiens bien-être. Je connais
                vos contraintes, votre audience, et ce qui les fait passer à
                l'action. Pas de généraliste, pas de template, une stratégie
                taillée pour vous.
              </p>
            </AnimatedSection>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="card-glass rounded-sm p-8 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl text-cream mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {sol.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">{sol.desc}</p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════ APERÇU SERVICES ════════ */}
      <section className="section-padding bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <span className="gold-line mb-5" />
            <h2 className="font-display text-4xl md:text-5xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
              Deux façons de
              <br />
              <em className="text-gold">travailler ensemble</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesPrev.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="card-glass rounded-sm p-8 h-full hover:border-gold/30 transition-all duration-300 group flex flex-col">
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">{service.label}</span>
                  <h3 className="font-display text-2xl text-cream mb-4" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-dark-border">
                    <span className="text-gold font-semibold">{service.price}</span>
                    <Link href="/services" className="text-xs text-cream-muted hover:text-gold transition-colors flex items-center gap-1 group">
                      En savoir plus <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TÉMOIGNAGE ════════ */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative card-glass rounded-sm p-10 md:p-14 text-center">
              <div className="flex justify-center mb-8">
                <Quote size={36} className="text-gold/40" strokeWidth={1} />
              </div>
              <blockquote
                className="font-display text-2xl md:text-3xl text-cream leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                "{testimonial.quote}"
              </blockquote>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">★</span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold text-sm font-semibold">{testimonial.initials}</span>
                </div>
                <div className="text-left">
                  <p className="text-cream font-medium text-sm">{testimonial.name}</p>
                  <p className="text-cream-dim text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-gold/10 border border-gold/20 rounded-sm px-3 py-1">
                <p className="text-gold text-xs font-medium">Résultat réel</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center mt-12">
            <p className="text-cream-muted mb-5 text-sm">Vous voulez des résultats similaires ?</p>
            <Link href="/contact" className="btn-primary">
              Démarrons ensemble <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

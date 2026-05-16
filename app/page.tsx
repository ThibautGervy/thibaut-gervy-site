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
    desc: "Un message précis pour les bonnes personnes au bon moment — pas de gaspillage budgétaire.",
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fond sombre */}
        <div className="absolute inset-0 bg-dark z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/60 z-10" />

        {/* Photo Thibaut côté droit */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0 hidden lg:block">
          <Image
            src="/thibaut-portrait.png"
            alt="Thibaut Gervy — Spécialiste Meta Ads pour praticiens bien-être"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* Dégradé pour fondre avec le fond */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30" />
        </div>

        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-gold/5 animate-pulse z-10" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-gold/8 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-2xl">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  Meta Ads · Conversion · Bien-être
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.08] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Transformez votre{" "}
                <em className="text-gold not-italic">visibilité</em>
                <br />
                en clients grâce à des
                <br />
                campagnes Meta qui
                <br />
                <em className="text-gold not-italic">convertissent vraiment</em>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-cream-muted text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
                J'aide les{" "}
                <strong className="text-cream font-medium">
                  naturopathes, coachs et thérapeutes
                </strong>{" "}
                à remplir leur agenda grâce à des stratégies{" "}
                <strong className="text-cream font-medium">Meta Ads</strong>{" "}
                pensées pour leur secteur.
              </p>
              <p className="text-cream-muted text-base leading-relaxed mb-10 max-w-xl">
                Pas de solution générique. Un{" "}
                <strong className="text-cream font-medium">
                  tunnel de conversion
                </strong>{" "}
                optimisé et des campagnes qui performent.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Discutons de votre projet <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Voir mes offres
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-dark-border">
                {[
                  { value: "3 ans+", label: "d'expérience Meta Ads" },
                  { value: "20+", label: "praticiens accompagnés" },
                  { value: "×3", label: "ROI moyen constaté" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display text-3xl text-gold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-cream-dim text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ PROBLÈME ════════ */}
      <section
        className="section-padding bg-dark-surface"
        aria-label="Problèmes courants des praticiens bien-être"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
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
                  s'improvise plus. Ça, je le sais — et c'est exactement ce
                  sur quoi je travaille.
                </p>
                <ul className="space-y-4" role="list">
                  {problems.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-cream-muted text-sm"
                    >
                      <span className="mt-1 w-4 h-4 rounded-full border border-cream-dim/30 flex-shrink-0 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cream-dim" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Photo Thibaut au laptop */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="/thibaut-laptop.png"
                  alt="Thibaut Gervy analysant des campagnes Meta Ads pour un praticien bien-être"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-dark-surface/90 backdrop-blur-sm border border-dark-border rounded-sm px-4 py-3">
                  <p className="text-xs text-cream-dim mb-0.5">
                    Coût par lead moyen
                  </p>
                  <p className="text-gold font-semibold text-lg">
                    -60%{" "}
                    <span className="text-cream-muted text-xs font-normal">
                      après optimisation
                    </span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ SOLUTION ════════ */}
      <section
        className="section-padding"
        aria-label="Solutions Meta Ads pour praticiens bien-être"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Photo avec cliente */}
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

            {/* Texte */}
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
                Je ne travaille qu'avec des praticiens bien-être. Naturopathes,
                coachs, réflexologues, thérapeutes — votre secteur est ma
                spécialité. Je connais vos contraintes, votre audience, et ce
                qui les fait passer à l'action.
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
                  <h3
                    className="font-display text-xl text-cream mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {sol.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════ APERÇU SERVICES ════════ */}
      <section className="section-padding bg-dark-surface" aria-label="Offres Meta Ads">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <span className="gold-line mb-5" />
            <h2
              className="font-display text-4xl md:text-5xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Deux façons de
              <br />
              <em className="text-gold">travailler ensemble</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesPrev.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="card-glass rounded-sm p-8 h-full hover:border-gold/30 transition-all duration-300 group flex flex-col">
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">
                    {service.label}
                  </span>
                  <h3
                    className="font-display text-2xl text-cream mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-dark-border">
                    <span className="text-gold font-semibold">
                      {service.price}
                    </span>
                    <Link
                      href="/services"
                      className="text-xs text-cream-muted hover:text-gold transition-colors flex items-center gap-1 group"
                    >
                      En savoir plus{" "}
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TÉMOIGNAGE ════════ */}
      <section className="section-padding" aria-label="Témoignage client">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative card-glass rounded-sm p-10 md:p-14 text-center">
              <div className="flex justify-center mb-8">
                <Quote size={36} className="text-gold/40" strokeWidth={1} />
              </div>
              <blockquote
                className="font-display text-2xl md:text-3xl text-cream leading-relaxed mb-10"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                }}
              >
                "{testimonial.quote}"
              </blockquote>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold text-sm font-semibold">
                    {testimonial.initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-cream font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-cream-dim text-xs">{testimonial.role}</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-gold/10 border border-gold/20 rounded-sm px-3 py-1">
                <p className="text-gold text-xs font-medium">Résultat réel</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center mt-12">
            <p className="text-cream-muted mb-5 text-sm">
              Vous voulez des résultats similaires ?
            </p>
            <Link href="/contact" className="btn-primary">
              Démarrons ensemble <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

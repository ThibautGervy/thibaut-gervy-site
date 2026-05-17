import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Quote } from "lucide-react";
import AnimatedSection, { StaggerGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Meta Ads pour Naturopathes et Thérapeutes — Thibaut Gervy",
  description:
    "J'aide les naturopathes, thérapeutes et coachs bien-être à clarifier leur message, lancer des campagnes Meta Ads propres et transformer leur visibilité en demandes concrètes.",
  alternates: { canonical: "https://thibautgervy.fr" },
  openGraph: {
    title: "Thibaut Gervy — Meta Ads pour Naturopathes et Thérapeutes",
    description:
      "Des campagnes Meta Ads structurées pour praticiens bien-être. Message clair, parcours rassurant, demandes concrètes.",
    url: "https://thibautgervy.fr",
  },
};

const problems = [
  "Vous publiez régulièrement, mais les demandes restent rares.",
  "Vous avez du mal à transformer votre visibilité en rendez-vous.",
  "Vous ne savez pas toujours quoi dire dans vos pubs sans paraître trop commercial.",
  "Vous avez peut-être déjà boosté une publication, sans vrai retour derrière.",
];

const solutions = [
  {
    title: "Message clair",
    desc: "On transforme votre expertise en promesse compréhensible, sans jargon ni discours trop commercial.",
  },
  {
    title: "Campagnes structurées",
    desc: "Des campagnes Meta Ads pensées autour d'un objectif simple : générer des demandes, pas seulement des clics.",
  },
  {
    title: "Parcours rassurant",
    desc: "On vérifie que la page, le message et l'appel à l'action donnent envie de passer à l'étape suivante.",
  },
];

const deliverables = [
  "Un message plus clair pour expliquer votre accompagnement.",
  "Des campagnes Meta Ads structurées autour d'un objectif précis.",
  "Des visuels et textes publicitaires cohérents avec votre pratique.",
  "Un parcours de prise de rendez-vous plus rassurant.",
  "Une lecture simple des résultats pour savoir quoi améliorer.",
];

const forWho = [
  "Vous avez une pratique sérieuse et une offre déjà claire.",
  "Vous voulez obtenir plus de demandes sans publier tous les jours.",
  "Vous êtes prêt à investir dans une stratégie propre, pas juste booster un post.",
  "Vous voulez une communication crédible, humaine et alignée avec votre métier.",
];

const notForWho = [
  "Vous cherchez une promesse miracle en quelques jours.",
  "Votre offre ou votre cible est encore trop floue.",
  "Vous voulez déléguer sans aucun échange sur votre pratique.",
  "Vous n'avez pas de budget publicitaire minimum à investir.",
];

const steps = [
  {
    num: "01",
    title: "Audit du message",
    desc: "On clarifie votre offre, votre cible et ce qui peut bloquer la prise de contact.",
  },
  {
    num: "02",
    title: "Angle de campagne",
    desc: "On trouve le bon angle pour parler à vos futurs clients sans forcer ni survendre.",
  },
  {
    num: "03",
    title: "Création des visuels",
    desc: "Des visuels sobres, crédibles et adaptés à votre univers.",
  },
  {
    num: "04",
    title: "Lancement Meta Ads",
    desc: "Mise en place des campagnes, audiences, budget et suivi des premiers signaux.",
  },
  {
    num: "05",
    title: "Ajustements",
    desc: "Chaque mois, on regarde ce qui attire, ce qui bloque, et ce qu'il faut améliorer.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">

        {/* Photo droite */}
        <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block">
          <Image
            src="/face-thibaut-gris.png"
            alt="Thibaut Gervy, spécialiste Meta Ads pour praticiens bien-être"
            fill
            priority
            className="object-cover object-top"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-dark/15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-[540px]">

            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-10">
                <span className="gold-line" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  Meta Ads · Praticiens bien-être
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                className="font-display text-5xl md:text-6xl text-cream leading-[1.06] mb-7"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Faites de Meta Ads
                <br />
                un vrai levier de
                <br />
                <em className="text-gold not-italic">rendez-vous.</em>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-cream-muted text-base md:text-lg leading-relaxed mb-10 max-w-[480px]">
                J'aide les naturopathes, thérapeutes et coachs bien-être à clarifier leur message, lancer des campagnes Meta Ads propres, et transformer leur visibilité en demandes concrètes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link href="/contact" className="btn-primary">
                  Voir si Meta Ads peut fonctionner pour moi <ArrowRight size={15} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Voir les offres
                </Link>
              </div>
            </AnimatedSection>

            {/* Chiffres contextualisés */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-8 pt-8 border-t border-dark-border/50">
                {[
                  { value: "20+", label: "campagnes analysées" },
                  { value: "Jusqu'à ×3", label: "de retour observé" },
                  { value: "1 €", label: "investi doit servir un objectif clair" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="font-display text-xl md:text-2xl text-gold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-cream-dim text-xs leading-snug max-w-[120px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Badge flottant */}
        <div className="absolute bottom-10 right-10 hidden lg:block z-20">
          <div className="bg-dark-surface/90 backdrop-blur-sm border border-gold/25 rounded-sm px-5 py-4">
            <p className="text-xs text-cream-dim mb-1">Coût par lead constaté</p>
            <p className="text-gold font-semibold text-xl">
              -60% <span className="text-cream-muted text-xs font-normal">après optimisation</span>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          PROBLÈME
      ════════════════════════════════ */}
      <section className="section-padding bg-warm-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <AnimatedSection direction="left">
              <span className="gold-line mb-6" />
              <h2
                className="font-display text-4xl md:text-5xl text-cream mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vous avez le talent.
                <br />
                <em className="text-gold">Pas encore les clients.</em>
              </h2>
              <p className="text-cream-muted text-base leading-relaxed mb-8 max-w-md">
                Souvent, le problème ne vient pas de votre pratique. Il vient d'un message trop flou, d'une offre mal expliquée, ou d'un parcours qui ne rassure pas assez avant la prise de rendez-vous.
              </p>
              <ul className="space-y-5">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-4 text-cream-muted text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="/thibaut-laptop.png"
                  alt="Thibaut Gervy analysant des campagnes Meta Ads pour un praticien bien-être"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-5 left-5 bg-dark-surface/90 backdrop-blur-sm border border-dark-border rounded-sm px-4 py-3">
                  <p className="text-xs text-cream-dim mb-1">Coût par lead constaté</p>
                  <p className="text-gold font-semibold text-base">
                    -60% <span className="text-cream-muted text-xs font-normal">après optimisation</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SOLUTION
      ════════════════════════════════ */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="/thibaut-client.png"
                  alt="Thibaut Gervy en échange avec une praticienne bien-être"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="gold-line mb-6" />
              <h2
                className="font-display text-4xl md:text-5xl text-cream mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Je ne fais pas de
                <br />
                <em className="text-gold">pub générique.</em>
              </h2>
              <p className="text-cream-muted text-base leading-relaxed">
                Avant de lancer une campagne, je travaille votre angle, votre message, votre offre et le parcours de prise de rendez-vous. Parce qu'une publicité qui attire des clics mais ne rassure pas ne sert pas à grand-chose.
              </p>
            </AnimatedSection>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {solutions.map((sol) => (
              <div
                key={sol.title}
                className="card-glass rounded-sm p-7 hover:border-gold/30 transition-all duration-300 group"
              >
                <h3
                  className="font-display text-xl text-cream mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {sol.title}
                </h3>
                <p className="text-cream-muted text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ════════════════════════════════
          MÉTHODE
      ════════════════════════════════ */}
      <section className="section-padding bg-warm-surface">
        <div className="max-w-7xl mx-auto px-6">

          <AnimatedSection className="text-center mb-16">
            <span className="gold-line mb-5" style={{ margin: "0 auto 20px" }} />
            <h2
              className="font-display text-4xl md:text-5xl text-cream mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comment je <em className="text-gold">travaille</em>
            </h2>
            <p className="text-cream-muted text-base max-w-sm mx-auto">
              Cinq étapes, une logique claire, pas de zone floue.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Ligne horizontale desktop */}
            <div
              className="hidden lg:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent"
              style={{ top: "40px" }}
            />

            <StaggerGrid className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full border border-dark-border bg-dark-elevated flex items-center justify-center group-hover:border-gold/40 transition-all duration-500">
                      <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-dark text-xs font-bold z-10">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <h3
                    className="font-display text-base text-cream mb-3 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">{step.desc}</p>
                  <div className="lg:hidden mt-6 text-dark-border">↓</div>
                </div>
              ))}
            </StaggerGrid>
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Planifier un appel gratuit <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════
          OFFRES
      ════════════════════════════════ */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-6">

          <AnimatedSection className="mb-12">
            <span className="gold-line mb-5" />
            <h2
              className="font-display text-4xl md:text-5xl text-cream mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Deux façons de
              <br />
              <em className="text-gold">travailler ensemble</em>
            </h2>
            <p className="text-cream-muted text-base max-w-lg mt-3">
              Selon que vous voulez lancer une campagne proprement ou déléguer le suivi dans la durée.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <AnimatedSection delay={0}>
              <div className="card-glass rounded-sm p-8 h-full hover:border-gold/30 transition-all duration-300 flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-gold uppercase mb-5">Mission ponctuelle</span>
                <h3
                  className="font-display text-2xl text-cream mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Setup complet Meta Ads
                </h3>
                <p className="text-cream-muted text-base leading-relaxed mb-5 flex-1">
                  Pour lancer une campagne claire, propre et prête à convertir, sans partir dans tous les sens.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Clarification du message",
                    "Structure de campagne",
                    "Création ou recommandation des visuels",
                    "Paramétrage Meta Ads",
                    "Recommandations sur le parcours de conversion",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-dark-border mt-auto">
                  <span className="text-gold font-semibold text-lg">À partir de 690 €</span>
                  <Link href="/services" className="text-sm text-cream-muted hover:text-gold transition-colors flex items-center gap-1 group">
                    En savoir plus <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card-glass rounded-sm p-8 h-full hover:border-gold/30 transition-all duration-300 flex flex-col">
                <span className="text-xs font-semibold tracking-widest text-gold uppercase mb-5">Accompagnement mensuel</span>
                <h3
                  className="font-display text-2xl text-cream mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Suivi mensuel
                </h3>
                <p className="text-cream-muted text-base leading-relaxed mb-5 flex-1">
                  Pour piloter vos campagnes dans la durée, suivre les résultats et améliorer vos demandes de rendez-vous mois après mois.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Suivi des campagnes actives",
                    "Lecture et analyse des résultats",
                    "Ajustements des messages et audiences",
                    "Optimisation des visuels",
                    "Recommandations régulières",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-5 border-t border-dark-border mt-auto">
                  <span className="text-gold font-semibold text-lg">À partir de 390 €/mois</span>
                  <Link href="/services" className="text-sm text-cream-muted hover:text-gold transition-colors flex items-center gap-1 group">
                    En savoir plus <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          CE QUE VOUS OBTENEZ — VERSION WOW
      ════════════════════════════════ */}
      <section className="relative section-padding overflow-hidden" style={{ background: "#0d0d10" }}>
        {/* Glow ambiant doré */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(200,169,81,0.07) 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Header section */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-5">Ce que vous obtenez</p>
            <h2
              className="font-display text-4xl md:text-5xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Concret. Clair.
              <br />
              <em className="text-gold">Directement utile.</em>
            </h2>
          </AnimatedSection>

          {/* Grille de livrables — style premium avec numéros géants */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(37,37,53,0.4)" }}>
            {[
              { num: "01", title: "Un message clair", desc: "Une façon d'expliquer votre accompagnement que vos futurs clients comprennent du premier coup." },
              { num: "02", title: "Des campagnes structurées", desc: "Des campagnes Meta Ads pensées autour d'un objectif précis, pas juste d'un budget à dépenser." },
              { num: "03", title: "Des visuels cohérents", desc: "Textes et visuels publicitaires alignés avec votre univers et votre façon d'exercer." },
              { num: "04", title: "Un parcours rassurant", desc: "Un chemin clair de la pub à la prise de contact, sans friction inutile." },
              { num: "05", title: "Une lecture des résultats", desc: "Vous savez ce qui fonctionne, ce qui bloque, et ce qu'on ajuste. Pas de rapport incompréhensible." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="group relative overflow-hidden p-8 h-full flex flex-col justify-between min-h-[200px] cursor-default"
                  style={{ background: "#0d0d10" }}
                >
                  {/* Numéro géant en arrière-plan */}
                  <span
                    className="absolute -top-4 -right-2 font-display text-[88px] font-bold select-none pointer-events-none transition-all duration-500 group-hover:text-gold/10"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "rgba(37,37,53,0.5)",
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </span>

                  {/* Ligne dorée animée en haut */}
                  <div
                    className="absolute top-0 left-0 h-px bg-gold transition-all duration-500 group-hover:w-full"
                    style={{ width: "0%" }}
                  />
                  <div className="absolute top-0 left-0 h-px w-8 bg-gold/30" />

                  {/* Contenu */}
                  <div className="relative z-10">
                    <h3
                      className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-cream-dim text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Shimmer au hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.03) 0%, transparent 60%)" }} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          POUR QUI / PAS POUR QUI — VERSION WOW
      ════════════════════════════════ */}
      <section className="relative section-padding overflow-hidden bg-dark">
        {/* Ligne décorative verticale centrale */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px hidden lg:block" style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,81,0.15), transparent)" }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase mb-5">Compatibilité</p>
            <h2
              className="font-display text-4xl md:text-5xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce travail est
              <br />
              <em className="text-gold">fait pour vous si...</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

            {/* OUI */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-sm border border-green-500/20" style={{ background: "rgba(34,197,94,0.05)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-green-400 text-xs font-semibold tracking-widest uppercase">Oui, c'est pour vous</span>
                </div>

                <ul className="space-y-6">
                  {forWho.map((item, i) => (
                    <AnimatedSection key={i} delay={i * 0.08}>
                      <li className="group flex items-start gap-5">
                        {/* Numéro */}
                        <span
                          className="flex-shrink-0 font-display text-3xl text-dark-border group-hover:text-gold/30 transition-colors duration-300 leading-none mt-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-cream text-base leading-relaxed group-hover:text-cream transition-colors duration-200">{item}</p>
                          <div className="mt-2 h-px w-0 bg-green-400/30 group-hover:w-full transition-all duration-500" />
                        </div>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* NON */}
            <AnimatedSection direction="right">
              <div className="relative">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-sm border border-red-500/20" style={{ background: "rgba(239,68,68,0.05)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="text-red-400 text-xs font-semibold tracking-widest uppercase">Pas encore adapté</span>
                </div>

                <ul className="space-y-6">
                  {notForWho.map((item, i) => (
                    <AnimatedSection key={i} delay={i * 0.08}>
                      <li className="group flex items-start gap-5">
                        <span
                          className="flex-shrink-0 font-display text-3xl text-dark-border group-hover:text-red-400/20 transition-colors duration-300 leading-none mt-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="text-cream-muted text-base leading-relaxed">{item}</p>
                          <div className="mt-2 h-px w-0 bg-red-400/20 group-hover:w-full transition-all duration-500" />
                        </div>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

          </div>

          {/* CTA centré */}
          <AnimatedSection className="text-center mt-16 pt-12 border-t border-dark-border">
            <p className="text-cream-muted text-base mb-6">Vous vous reconnaissez dans la colonne de gauche ?</p>
            <Link href="/contact" className="btn-primary">
              Planifier un appel gratuit <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════
          TÉMOIGNAGE
      ════════════════════════════════ */}
      <section className="section-padding bg-warm-surface">
        <div className="max-w-4xl mx-auto px-6">

          <AnimatedSection>
            <div className="relative card-glass rounded-sm p-10 md:p-14 text-center">
              <div className="flex justify-center mb-8">
                <Quote size={32} className="text-gold/35" strokeWidth={1} />
              </div>
              <blockquote
                className="font-display text-xl md:text-2xl text-cream leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
              >
                "En 6 semaines, j'ai rempli mon carnet de rendez-vous pour les 3 prochains mois. Je n'aurais jamais pensé que Meta Ads pouvait fonctionner aussi bien pour ma pratique de naturopathie."
              </blockquote>

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <span className="text-gold text-xs font-semibold">SM</span>
                </div>
                <div className="text-left">
                  <p className="text-cream font-medium text-sm">Sophie M.</p>
                  <p className="text-cream-dim text-xs">Naturopathe · après 6 semaines d'accompagnement</p>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-gold/8 border border-gold/15 rounded-sm px-3 py-1">
                <p className="text-gold text-xs">Résultat réel</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="text-center mt-10">
            <Link href="/contact" className="btn-primary">
              Planifier un appel gratuit <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

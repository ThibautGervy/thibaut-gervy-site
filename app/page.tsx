import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Users, Quote, CheckCircle2, XCircle } from "lucide-react";
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
  "Vous publiez régulièrement, mais les demandes restent rares.",
  "Vous avez du mal à transformer votre visibilité en rendez-vous.",
  "Vous ne savez pas quoi dire dans vos pubs sans paraître trop commercial.",
  "Vous avez déjà tenté de booster des posts, sans vrai retour.",
];

const solutions = [
  {
    icon: Target,
    title: "Campagnes Meta Ads ciblées",
    desc: "Un message précis pour les bonnes personnes au bon moment. Pas de gaspillage budgétaire.",
  },
  {
    icon: TrendingUp,
    title: "Tunnel de conversion optimisé",
    desc: "Votre page transformée pour convertir les visiteurs en clients sur systeme.io ou WordPress.",
  },
  {
    icon: Users,
    title: "Expertise secteur bien-être",
    desc: "Naturopathie, coaching, réflexologie. Votre univers est ma spécialité exclusive.",
  },
];

const servicesPrev = [
  {
    label: "Mission ponctuelle",
    title: "Setup complet Meta Ads",
    desc: "Vous voulez lancer une campagne proprement, sur des bases solides, sans vous tromper de départ.",
    ideal: "Idéal si vous démarrez ou repartez de zéro.",
    price: "À partir de 690 €",
  },
  {
    label: "Accompagnement mensuel",
    title: "Suivi mensuel",
    desc: "Vous voulez déléguer et améliorer vos résultats mois après mois, sans gérer les campagnes vous-même.",
    ideal: "Idéal si vous voulez des clients réguliers sans vous en occuper.",
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

const forWho = [
  "Vous êtes naturopathe, thérapeute, coach ou praticien bien-être",
  "Vous avez déjà une offre claire et un tarif défini",
  "Vous voulez obtenir plus de demandes qualifiées",
  "Vous êtes prêt à investir sérieusement dans votre visibilité",
];

const notForWho = [
  "Votre offre n'est pas encore clairement définie",
  "Vous cherchez seulement à booster un post à 20 €",
  "Vous voulez des résultats sans suivi ni stratégie",
];

export default function HomePage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
        <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block">
          <Image
            src="/face-thibaut-gris.png"
            alt="Thibaut Gervy, spécialiste Meta Ads pour praticiens bien-être"
            fill
            priority
            className="object-cover object-top"
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-xl">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line" />
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  Spécialiste Meta Ads · Bien-être
                </span>
              </div>
            </AnimatedSection>

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

            {/* Sous-titre plus direct et impactant */}
            <AnimatedSection delay={0.2}>
              <p className="text-cream text-lg leading-relaxed mb-10 max-w-lg">
                J'aide les <strong>naturopathes, thérapeutes et coachs bien-être</strong> à attirer plus de clients qualifiés grâce à des campagnes Meta Ads <strong>claires, rentables et bien positionnées.</strong>
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-14">
                <Link href="/contact" className="btn-primary">
                  Voir si Meta Ads peut fonctionner pour moi <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Voir mes offres
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats contextualisées */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-10 pt-8 border-t border-dark-border/60">
                <div>
                  <p className="font-display text-2xl text-gold mb-0.5" style={{ fontFamily: "var(--font-display)" }}>20+</p>
                  <p className="text-cream-dim text-xs leading-tight">praticiens bien-être<br/>accompagnés</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-gold mb-0.5" style={{ fontFamily: "var(--font-display)" }}>Jusqu'à ×3</p>
                  <p className="text-cream-dim text-xs leading-tight">de retour sur<br/>investissement</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-gold mb-0.5" style={{ fontFamily: "var(--font-display)" }}>11 €</p>
                  <p className="text-cream-dim text-xs leading-tight">coût par lead moyen<br/>après optimisation</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block z-20">
          <div className="bg-dark-surface/90 backdrop-blur-sm border border-gold/30 rounded-sm px-5 py-4">
            <p className="text-xs text-cream-dim mb-1">Coût par lead après optimisation</p>
            <p className="text-gold font-semibold text-xl">-60% <span className="text-cream-muted text-xs font-normal">en moyenne</span></p>
          </div>
        </div>
      </section>

      {/* ════════ PROBLÈME ════════ */}
      <section className="section-padding bg-warm-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection direction="left">
                <span className="gold-line mb-6" />
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
                <ul className="space-y-5">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-4 text-cream-muted text-base">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
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
                    -60% <span className="text-cream-muted text-xs font-normal">après optimisation</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ SOLUTION ════════ */}
      <section className="section-padding bg-dark">
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
              <span className="gold-line mb-6" />
              <h2
                className="font-display text-4xl md:text-5xl text-cream mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                La solution,{" "}
                <em className="text-gold">c'est la spécialité</em>
              </h2>
              <p className="text-cream-muted text-base leading-relaxed">
                Je ne travaille qu'avec des praticiens bien-être. Je connais
                vos contraintes, votre audience, et ce qui les fait passer à
                l'action. Pas de généraliste, pas de template. Une stratégie
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

      {/* ════════ COMMENT JE TRAVAILLE ════════ */}
      <section className="section-padding bg-warm-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="gold-line mb-5" style={{ margin: "0 auto 20px" }} />
            <h2
              className="font-display text-4xl md:text-5xl text-cream mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comment je <em className="text-gold">travaille</em>
            </h2>
            <p className="text-cream-muted max-w-md mx-auto text-base">
              Un processus structuré, de l'analyse jusqu'aux premiers résultats.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" style={{ top: "40px" }} />
            <StaggerGrid className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                { num: "01", icon: "🔍", title: "Audit et Analyse", desc: "Analyse de votre situation, votre audience cible, vos concurrents. On définit ensemble la stratégie adaptée." },
                { num: "02", icon: "🔀", title: "Tunnel de conversion", desc: "Création ou optimisation de votre page sur systeme.io, LearnyBox ou WordPress pour convertir les clics en rdv." },
                { num: "03", icon: "🎨", title: "Création des visuels", desc: "Design des visuels publicitaires adaptés à votre univers bien-être. Stories, carrés, reels." },
                { num: "04", icon: "🚀", title: "Lancement Meta Ads", desc: "Paramétrage complet : audiences, ciblage, copywriting, tests A/B. Campagnes lancées et surveillées." },
                { num: "05", icon: "📈", title: "Optimisation continue", desc: "Analyse hebdomadaire, ajustements, scaling des campagnes qui performent. Rapport mensuel inclus." },
              ].map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full border border-dark-border bg-dark-elevated flex items-center justify-center group-hover:border-gold/40 transition-all duration-500 relative">
                      <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-dark text-xs font-bold z-10">
                        {step.num}
                      </span>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>
                  <h3
                    className="font-display text-base text-cream mb-3 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">{step.desc}</p>
                  <div className="lg:hidden mt-6 text-dark-border text-xl">↓</div>
                </div>
              ))}
            </StaggerGrid>
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link href="/contact" className="btn-primary">
              Planifier un appel gratuit <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════ APERÇU SERVICES ════════ */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <span className="gold-line mb-5" />
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Deux façons de
              <br />
              <em className="text-gold">travailler ensemble</em>
            </h2>
            <p className="text-cream-muted text-base max-w-lg">
              Choisissez selon là où vous en êtes. Les deux mènent au même endroit : un agenda qui se remplit.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesPrev.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="card-glass rounded-sm p-8 h-full hover:border-gold/30 transition-all duration-300 group flex flex-col">
                  <span className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">{service.label}</span>
                  <h3 className="font-display text-2xl text-cream mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {service.title}
                  </h3>
                  <p className="text-cream-muted text-base leading-relaxed mb-4 flex-1">{service.desc}</p>
                  <p className="text-cream text-sm italic mb-6">{service.ideal}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-dark-border">
                    <span className="text-gold font-semibold text-lg">{service.price}</span>
                    <Link href="/services" className="text-sm text-cream-muted hover:text-gold transition-colors flex items-center gap-1 group">
                      En savoir plus <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ POUR QUI / PAS POUR QUI ════════ */}
      <section className="section-padding bg-warm-surface">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="gold-line mb-5" style={{ margin: "0 auto 20px" }} />
            <h2
              className="font-display text-4xl md:text-5xl text-cream mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cet accompagnement
              <br />
              <em className="text-gold">est-il fait pour vous ?</em>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pour qui */}
            <AnimatedSection direction="left">
              <div className="card-glass rounded-sm p-8 border-green-900/30 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                  <h3 className="font-display text-xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
                    C'est fait pour vous si...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {forWho.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-cream-muted">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Pas pour qui */}
            <AnimatedSection direction="right">
              <div className="card-glass rounded-sm p-8 border-red-900/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle size={20} className="text-red-400 flex-shrink-0" />
                  <h3 className="font-display text-xl text-cream" style={{ fontFamily: "var(--font-display)" }}>
                    Ce n'est pas adapté si...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notForWho.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-cream-muted">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ════════ TÉMOIGNAGE ════════ */}
      <section className="section-padding bg-dark">
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
            <p className="text-cream-muted mb-5">Vous voulez des résultats similaires ?</p>
            <Link href="/contact" className="btn-primary">
              Planifier un appel gratuit <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

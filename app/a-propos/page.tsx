import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Shield,
  BarChart2,
  Handshake,
} from "lucide-react";
import AnimatedSection, { StaggerGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "À propos — Thibaut Gervy",
  description:
    "Spécialiste Meta Ads et marketing digital pour praticiens bien-être. Découvrez mon parcours, mes compétences et ma façon de travailler.",
};

/* ── Compétences ── */
const skills = [
  { label: "Meta Ads (Facebook & Instagram)" },
  { label: "Optimisation de conversion (CRO)" },
  { label: "WordPress — création & optimisation" },
  { label: "SEO on-page et technique" },
  { label: "systeme.io & LearnyBox" },
  { label: "Création de design & visuels" },
  { label: "Copywriting & rédaction persuasive" },
  { label: "Analyse de données & reporting" },
];

/* ── Valeurs ── */
const values = [
  {
    icon: Shield,
    title: "Éthique & transparence",
    desc: "Je ne cache rien. Vous avez accès à tous vos comptes, vos données, vos résultats. Aucun jargon obscur, des rapports lisibles.",
  },
  {
    icon: BarChart2,
    title: "Résultats mesurables",
    desc: "Je ne travaille pas à l'intuition. Chaque décision est basée sur des données. Coût par lead, taux de conversion, ROAS — tout est tracé.",
  },
  {
    icon: Handshake,
    title: "Accompagnement humain",
    desc: "Vous n'êtes pas un numéro dans un tableau de bord. Je prends le temps de comprendre votre situation et vos objectifs réels.",
  },
  {
    icon: Heart,
    title: "Approche personnalisée",
    desc: "Pas de template générique. Chaque praticien a ses propres objectifs, son propre univers. Ma stratégie s'adapte à vous, pas l'inverse.",
  },
];

/* ── Timeline parcours ── */
const timeline = [
  {
    period: "Aujourd'hui",
    title: "Spécialiste Meta Ads & Conversion",
    desc: "Accompagnement exclusif de praticiens et thérapeutes bien-être dans leur acquisition client via Meta Ads.",
  },
  {
    period: "2021 – 2023",
    title: "Freelance marketing digital",
    desc: "Missions variées : SEO, WordPress, tunnels de vente, premiers projets Meta Ads pour TPE et indépendants.",
  },
  {
    period: "2019 – 2021",
    title: "Marketing digital & web",
    desc: "Développement de compétences en SEO, création de sites WordPress, initiation à la publicité payante.",
  },
  {
    period: "Début",
    title: "Passion pour le digital",
    desc: "Autodidacte curieux, formation continue en marketing digital, copywriting et optimisation de la conversion.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-36 pb-20 bg-dark-surface border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="gold-line mb-5" />
            <h1
              className="font-display text-5xl md:text-6xl text-cream mb-5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              À <em className="text-gold">propos</em>
            </h1>
            <p className="text-cream-muted text-lg max-w-xl leading-relaxed">
              Derrière les chiffres et les campagnes, il y a un être humain qui
              comprend votre métier — et qui travaille pour votre réussite.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Présentation principale ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Cadre décoratif décalé */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 rounded-sm" />
                <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Thibaut Gervy — Photo placeholder à remplacer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  {/* Badge */}
                  <div className="absolute bottom-6 left-6 bg-dark-surface/90 backdrop-blur-sm border border-gold/30 rounded-sm px-4 py-3">
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-0.5">
                      Thibaut Gervy
                    </p>
                    <p className="text-cream-muted text-xs">
                      Meta Ads · Conversion · Bien-être
                    </p>
                  </div>
                </div>
                {/* Note placeholder */}
                <p className="text-cream-dim text-xs text-center mt-3 italic">
                  ← Photo à remplacer par votre portrait
                </p>
              </div>
            </AnimatedSection>

            {/* Texte */}
            <AnimatedSection direction="right">
              <h2
                className="font-display text-3xl md:text-4xl text-cream mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Je suis Thibaut — et je{" "}
                <em className="text-gold">transforme</em> votre marketing en
                clients concrets.
              </h2>

              <div className="space-y-4 text-cream-muted text-base leading-relaxed">
                <p>
                  Spécialiste en marketing digital depuis plusieurs années, je
                  me suis progressivement spécialisé dans un secteur qui me
                  tient à cœur : le bien-être et la santé naturelle.
                </p>
                <p>
                  Pourquoi ce choix ? Parce que les praticiens bien-être font
                  un travail extraordinaire — et méritent d'être connus. Parce
                  que le marketing générique ne fonctionne pas pour votre
                  secteur. Et parce que j'ai découvert que c'est là où je peux
                  apporter le plus de valeur.
                </p>
                <p>
                  J'ai accompagné des naturopathes, des coachs, des
                  réflexologues et des thérapeutes dans leur acquisition client.
                  À chaque fois, la même problématique : une expertise
                  indéniable, mais une présence digitale qui ne convertit pas.
                </p>
                <p>
                  Ce que je fais ? Je transforme ça. Des campagnes Meta Ads
                  précises, des pages qui convertissent, des tunnels qui
                  transforment le clic en rendez-vous. Avec des chiffres pour
                  mesurer, et un accompagnement humain pour avancer.
                </p>
              </div>

              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Travailler avec moi <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Compétences ── */}
      <section className="section-padding bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <span className="gold-line mb-5" />
              <h2
                className="font-display text-4xl text-cream mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mes <em className="text-gold">compétences</em>
              </h2>
              <p className="text-cream-muted text-base leading-relaxed mb-8">
                Un socle technique solide au service d'un objectif unique :
                vous apporter des clients.
              </p>
              <ul className="space-y-3">
                {skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0" />
                    <span className="text-cream-muted text-sm">{skill.label}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Timeline parcours */}
            <AnimatedSection delay={0.15}>
              <span className="gold-line mb-5" />
              <h2
                className="font-display text-4xl text-cream mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mon <em className="text-gold">parcours</em>
              </h2>
              <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-dark-border" />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-5 relative">
                      {/* Point doré */}
                      <div className="w-4 h-4 rounded-full border-2 border-gold bg-dark-surface flex-shrink-0 mt-1 z-10" />
                      <div>
                        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-1">
                          {item.period}
                        </p>
                        <p
                          className="font-display text-lg text-cream mb-1.5"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {item.title}
                        </p>
                        <p className="text-cream-muted text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <span className="gold-line mb-5" />
            <h2
              className="font-display text-4xl md:text-5xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce en quoi
              <br />
              <em className="text-gold">je crois</em>
            </h2>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="card-glass rounded-sm p-8 group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3
                    className="font-display text-xl text-cream mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Citation personnelle ── */}
      <section className="py-20 bg-dark-surface border-y border-dark-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p
              className="font-display text-2xl md:text-3xl text-cream leading-relaxed italic mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Je ne vends pas de la publicité. Je construis des systèmes
              d'acquisition qui fonctionnent — et je les explique clairement,
              à chaque étape."
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="gold-line" />
              <span className="text-gold text-sm font-medium">Thibaut Gervy</span>
              <span className="gold-line" style={{ transform: "rotate(180deg)" }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2
              className="font-display text-4xl text-cream mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prêt à travailler
              <br />
              <em className="text-gold">ensemble ?</em>
            </h2>
            <p className="text-cream-muted mb-8">
              Un premier échange gratuit de 20 min pour évaluer votre situation
              et voir si on peut avancer ensemble.
            </p>
            <Link href="/contact" className="btn-primary">
              Prendre contact <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

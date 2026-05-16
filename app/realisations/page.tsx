import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import AnimatedSection, { StaggerGrid } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Réalisations — Campagnes & Tunnels",
  description:
    "Découvrez des exemples concrets : visuels publicitaires, tunnels de conversion et résultats de campagnes Meta Ads pour praticiens bien-être.",
};

/* ── Cas clients (avant/après) ── */
const caseStudies = [
  {
    name: "Naturopathe — Lyon",
    type: "Setup complet + tunnel",
    image: "https://images.unsplash.com/photo-1544991875-5dc1b05f5f44?w=800&q=80",
    imageAlt: "Cabinet de naturopathie lumineux",
    before: {
      label: "Avant",
      stats: [
        { value: "0 lead", desc: "par semaine via Meta" },
        { value: "1,8 %", desc: "taux de conversion page" },
        { value: "€ ∞", desc: "coût par acquisition" },
      ],
    },
    after: {
      label: "Après 6 semaines",
      stats: [
        { value: "8–12 leads", desc: "par semaine en moyenne" },
        { value: "6,4 %", desc: "taux de conversion page" },
        { value: "14 €", desc: "coût par lead" },
      ],
    },
    quote: "Mon agenda est plein. C'est la première fois depuis 3 ans.",
    author: "Sophie M.",
  },
  {
    name: "Coach de vie — Paris",
    type: "Suivi mensuel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    imageAlt: "Coach en session avec un client",
    before: {
      label: "Avant",
      stats: [
        { value: "35 €", desc: "coût par lead" },
        { value: "2 clients", desc: "par mois via Meta" },
        { value: "Faible", desc: "cohérence des visuels" },
      ],
    },
    after: {
      label: "Après 3 mois",
      stats: [
        { value: "9 €", desc: "coût par lead" },
        { value: "11 clients", desc: "par mois via Meta" },
        { value: "Forte", desc: "identité de marque" },
      ],
    },
    quote: "Le ROI est là. Et surtout, je ne gère plus rien.",
    author: "Marc T.",
  },
  {
    name: "Réflexologue — Bordeaux",
    type: "Setup + optimisation landing page",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
    imageAlt: "Séance de réflexologie",
    before: {
      label: "Avant",
      stats: [
        { value: "0", desc: "présence Meta Ads" },
        { value: "Page web", desc: "sans formulaire de contact" },
        { value: "0 rdv", desc: "venant du digital" },
      ],
    },
    after: {
      label: "Après 2 mois",
      stats: [
        { value: "20+", desc: "leads par mois" },
        { value: "5,1 %", desc: "taux de conversion" },
        { value: "12 €", desc: "coût par lead" },
      ],
    },
    quote: "Je pensais que le digital n'était pas pour moi. Erreur.",
    author: "Anne-Laure C.",
  },
];

/* ── Types de livrables ── */
const deliverables = [
  {
    title: "Visuels publicitaires",
    desc: "Formats carrés, stories et reels adaptés à chaque audience. Identité visuelle cohérente avec votre univers.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    imageAlt: "Visuels publicitaires bien-être",
    tags: ["Carré 1:1", "Story 9:16", "Bannière 16:9"],
  },
  {
    title: "Tunnels de conversion",
    desc: "Landing pages qui transforment les clics en rendez-vous. Structure persuasive, copywriting ciblé, formulaire optimisé.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    imageAlt: "Interface d'un tunnel de conversion",
    tags: ["systeme.io", "WordPress", "LearnyBox"],
  },
  {
    title: "Copywriting d'annonces",
    desc: "Accroches, textes principaux et CTA rédigés pour toucher l'émotion de votre audience et la faire passer à l'action.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    imageAlt: "Rédaction copywriting",
    tags: ["Accroche", "Corps de texte", "CTA"],
  },
];

/* ── Stats globales ── */
const globalStats = [
  { value: "20+", label: "Praticiens accompagnés", icon: Users },
  { value: "×3,4", label: "ROI moyen constaté", icon: TrendingUp },
  { value: "11 €", label: "Coût par lead moyen", icon: DollarSign },
];

export default function RealisationsPage() {
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
              Réalisations &{" "}
              <em className="text-gold">résultats</em>
            </h1>
            <p className="text-cream-muted text-lg max-w-xl leading-relaxed">
              Des chiffres concrets, des praticiens réels, des résultats
              vérifiables. Voici ce que l'on construit ensemble.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats globales ── */}
      <section className="py-14 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="card-glass rounded-sm p-8 flex items-center gap-5"
                >
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p
                      className="font-display text-3xl text-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-cream-muted text-sm">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Cas clients avant/après ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <span className="gold-line mb-5" />
            <h2
              className="font-display text-4xl md:text-5xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Avant / <em className="text-gold">Après</em>
            </h2>
          </AnimatedSection>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.name}>
                <div className="card-glass rounded-sm overflow-hidden">
                  {/* En-tête */}
                  <div className="border-b border-dark-border px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p
                        className="font-display text-xl text-cream"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {study.name}
                      </p>
                      <p className="text-gold text-xs mt-0.5">{study.type}</p>
                    </div>
                    <span className="text-xs text-cream-dim border border-dark-border px-3 py-1 rounded-sm w-fit">
                      Résultats réels · Données anonymisées
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative aspect-video lg:aspect-auto min-h-[200px] border-b lg:border-b-0 lg:border-r border-dark-border">
                      <Image
                        src={study.image}
                        alt={study.imageAlt}
                        fill
                        className="object-cover opacity-70"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                      {/* Quote flottante */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-cream text-sm italic leading-snug mb-1">
                          "{study.quote}"
                        </p>
                        <p className="text-gold text-xs">— {study.author}</p>
                      </div>
                    </div>

                    {/* Avant */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-dark-border">
                      <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cream-dim" />
                        {study.before.label}
                      </p>
                      <div className="space-y-5">
                        {study.before.stats.map((s, i) => (
                          <div key={i}>
                            <p
                              className="font-display text-2xl text-cream-muted"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {s.value}
                            </p>
                            <p className="text-cream-dim text-xs mt-0.5">
                              {s.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Après */}
                    <div className="p-8 bg-gold/5">
                      <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gold" />
                        {study.after.label}
                      </p>
                      <div className="space-y-5">
                        {study.after.stats.map((s, i) => (
                          <div key={i}>
                            <p
                              className="font-display text-2xl text-gold"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {s.value}
                            </p>
                            <p className="text-cream-dim text-xs mt-0.5">
                              {s.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Types de livrables ── */}
      <section className="section-padding bg-dark-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-14">
            <span className="gold-line mb-5" />
            <h2
              className="font-display text-4xl md:text-5xl text-cream"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ce que je <em className="text-gold">crée</em>
            </h2>
            <p className="text-cream-muted mt-3 max-w-md">
              Chaque livrable est pensé pour votre secteur, votre ton, votre
              audience.
            </p>
          </AnimatedSection>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="card-glass rounded-sm overflow-hidden group hover:border-gold/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.imageAlt}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/30 to-transparent" />
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3
                    className="font-display text-xl text-cream mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {d.title}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed mb-5">
                    {d.desc}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {d.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gold border border-gold/20 px-2.5 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </StaggerGrid>
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
              Votre résultat sera
              <br />
              <em className="text-gold">le prochain présenté ici</em>
            </h2>
            <p className="text-cream-muted mb-8 text-base">
              Chaque praticien a son propre contexte. Parlons du vôtre.
            </p>
            <Link href="/contact" className="btn-primary">
              Démarrer mon projet <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

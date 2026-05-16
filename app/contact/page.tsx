"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Mail, MessageSquare, Clock, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

/* ── Informations de contact ── */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "thibautgervy.web@gmail.com",
    href: "mailto:thibautgervy.web@gmail.com",
  },
  {
    icon: Clock,
    label: "Délai de réponse",
    value: "Sous 24h en semaine",
    href: null,
  },
  {
    icon: MessageSquare,
    label: "Premier échange",
    value: "20 min, gratuit et sans engagement",
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    activity: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    /* Construction du mailto avec les données du formulaire */
    const subject = encodeURIComponent(
      `[Contact site] ${formState.name} — ${formState.activity || "Praticien bien-être"}`
    );
    const body = encodeURIComponent(
      `Bonjour Thibaut,\n\nNom : ${formState.name}\nEmail : ${formState.email}\nActivité : ${formState.activity}\n\nMessage :\n${formState.message}\n\n---\nEnvoyé depuis le formulaire de contact thibautgervy.fr`
    );

    /* Ouverture du client mail */
    window.location.href = `mailto:thibautgervy.web@gmail.com?subject=${subject}&body=${body}`;

    /* Simulation d'envoi */
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

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
              Parlons de votre{" "}
              <em className="text-gold">projet</em>
            </h1>
            <p className="text-cream-muted text-lg max-w-xl leading-relaxed">
              Un premier échange gratuit pour évaluer votre situation et voir
              si on peut avancer ensemble. Sans engagement, sans discours
              commercial.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contenu principal ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Formulaire — colonne principale */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                {isSubmitted ? (
                  /* ── Confirmation ── */
                  <div className="card-glass rounded-sm p-12 text-center">
                    <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={28} className="text-gold" />
                    </div>
                    <h2
                      className="font-display text-3xl text-cream mb-4"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Message prêt à envoyer
                    </h2>
                    <p className="text-cream-muted text-base leading-relaxed mb-8">
                      Votre client mail s'est ouvert avec votre message
                      pré-rempli. Envoyez-le depuis votre messagerie.
                      <br />
                      <br />
                      Je vous réponds sous 24h !
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: "",
                          email: "",
                          activity: "",
                          message: "",
                        });
                      }}
                      className="btn-secondary"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  /* ── Formulaire ── */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Nom */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-medium text-cream-muted mb-2 uppercase tracking-wider"
                        >
                          Nom & prénom *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          placeholder="Marie Dupont"
                          value={formState.name}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-cream-muted mb-2 uppercase tracking-wider"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          placeholder="marie@exemple.fr"
                          value={formState.email}
                          onChange={handleChange}
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Activité */}
                    <div>
                      <label
                        htmlFor="activity"
                        className="block text-xs font-medium text-cream-muted mb-2 uppercase tracking-wider"
                      >
                        Votre activité
                      </label>
                      <select
                        id="activity"
                        name="activity"
                        value={formState.activity}
                        onChange={handleChange}
                        className="input-field"
                        style={{ appearance: "none" }}
                      >
                        <option value="">Sélectionnez votre activité</option>
                        <option value="Naturopathe">Naturopathe</option>
                        <option value="Coach de vie">Coach de vie</option>
                        <option value="Réflexologue">Réflexologue</option>
                        <option value="Ostéopathe">Ostéopathe</option>
                        <option value="Sophrologue">Sophrologue</option>
                        <option value="Thérapeute holistique">
                          Thérapeute holistique
                        </option>
                        <option value="Nutrithérapeute">Nutrithérapeute</option>
                        <option value="Autre praticien bien-être">
                          Autre praticien bien-être
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium text-cream-muted mb-2 uppercase tracking-wider"
                      >
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Décrivez votre situation : où en êtes-vous avec vos campagnes ? Quel est votre objectif principal ? Avez-vous un budget Meta Ads prévu ?"
                        value={formState.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                      />
                    </div>

                    {/* Note RGPD */}
                    <p className="text-cream-dim text-xs leading-relaxed">
                      Vos données sont utilisées uniquement pour vous répondre.
                      Elles ne sont jamais partagées ni utilisées à des fins
                      commerciales.
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full justify-center py-4 disabled:opacity-60"
                    >
                      {isLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                          Préparation…
                        </>
                      ) : (
                        <>
                          Envoyer mon message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar infos */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="right">
                {/* Infos de contact */}
                <div className="card-glass rounded-sm p-6 mb-6">
                  <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-5">
                    Informations
                  </p>
                  <div className="space-y-5">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div key={info.label} className="flex gap-4 items-start">
                          <div className="w-9 h-9 border border-dark-border flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon size={15} className="text-gold" />
                          </div>
                          <div>
                            <p className="text-cream-dim text-xs mb-0.5">
                              {info.label}
                            </p>
                            {info.href ? (
                              <a
                                href={info.href}
                                className="text-cream-muted text-sm hover:text-gold transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-cream-muted text-sm">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ce qu'on va évoquer */}
                <div className="card-glass rounded-sm p-6 mb-6">
                  <p className="text-xs font-semibold tracking-widest text-cream-dim uppercase mb-5">
                    Lors de notre échange
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Votre situation actuelle et vos objectifs",
                      "Ce qui freine votre acquisition de clients",
                      "La stratégie adaptée à votre secteur",
                      "Une estimation réaliste des résultats",
                      "Les prochaines étapes si on travaille ensemble",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={13}
                          className="text-gold mt-0.5 flex-shrink-0"
                        />
                        <span className="text-cream-muted text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lien direct email */}
                <a
                  href="mailto:thibautgervy.web@gmail.com"
                  className="btn-secondary w-full justify-center"
                >
                  <Mail size={15} />
                  Écrire directement
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

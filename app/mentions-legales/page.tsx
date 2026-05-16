import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de Thibaut Gervy.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h1
            className="font-display text-4xl text-cream mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mentions <em className="text-gold">légales</em>
          </h1>

          <div className="space-y-8 text-cream-muted text-sm leading-relaxed">
            <div>
              <h2 className="text-cream font-medium mb-3">Éditeur du site</h2>
              <p>
                Thibaut Gervy — Freelance Marketing Digital
                <br />
                Email : thibautgervy.web@gmail.com
                <br />
                Statut : [À compléter — auto-entrepreneur / EI]
                <br />
                SIRET : [À compléter]
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc.
                <br />
                340 Pine Street, Suite 701, San Francisco, CA 94104, USA
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, structure)
                est la propriété exclusive de Thibaut Gervy et est protégé par
                les lois en vigueur sur la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">
                Données personnelles
              </h2>
              <p>
                Les informations collectées via le formulaire de contact sont
                utilisées uniquement pour répondre à vos demandes. Elles ne
                sont jamais cédées à des tiers. Conformément au RGPD, vous
                disposez d'un droit d'accès, de rectification et de suppression
                de vos données.
              </p>
            </div>

            <p className="text-cream-dim text-xs border-t border-dark-border pt-6">
              * Ces mentions légales sont à compléter avec vos informations
              personnelles (statut juridique, SIRET, adresse) avant mise en
              ligne.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

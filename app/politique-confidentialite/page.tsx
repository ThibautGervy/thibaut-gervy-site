import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h1
            className="font-display text-4xl text-cream mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Politique de{" "}
            <em className="text-gold">confidentialité</em>
          </h1>

          <div className="space-y-8 text-cream-muted text-sm leading-relaxed">
            <div>
              <h2 className="text-cream font-medium mb-3">
                Données collectées
              </h2>
              <p>
                Ce site collecte uniquement les données que vous saisissez dans
                le formulaire de contact : nom, adresse email et message.
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">
                Utilisation des données
              </h2>
              <p>
                Ces données sont utilisées exclusivement pour répondre à votre
                demande. Elles ne sont jamais vendues, échangées ou utilisées à
                des fins marketing sans votre consentement explicite.
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">
                Durée de conservation
              </h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement
                de votre demande, puis supprimées.
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">Vos droits</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD), vous disposez d'un droit d'accès, de rectification,
                d'effacement et d'opposition concernant vos données. Pour
                exercer ces droits, contactez :{" "}
                <a
                  href="mailto:thibautgervy.web@gmail.com"
                  className="text-gold hover:underline"
                >
                  thibautgervy.web@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-cream font-medium mb-3">Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies de traçage ou publicitaires.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

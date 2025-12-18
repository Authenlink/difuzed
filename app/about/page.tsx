import { AboutPageContent } from "@/components/about/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "À propos de DiFuzed - L'agence GEO qui vous place en référence sur ChatGPT, Claude, Gemini",
  description:
    "DiFuzed est l'agence pionnière en Generative Engine Optimization (GEO). Nous faisons de votre entreprise la réponse par défaut citée par ChatGPT, Claude, Gemini, Perplexity et tous les LLM.",
  openGraph: {
    title: "À propos de DiFuzed - Agence GEO spécialisée",
    description:
      "Découvrez DiFuzed, l'agence pionnière en Generative Engine Optimization (GEO). Notre mission : faire de votre entreprise la réponse par défaut des intelligences artificielles.",
    url: "https://difuzed.io/about",
    siteName: "DiFuzed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de DiFuzed - Agence GEO spécialisée",
    description:
      "Découvrez DiFuzed, l'agence pionnière en Generative Engine Optimization (GEO).",
  },
  alternates: {
    canonical: "https://difuzed.io/about",
  },
  metadataBase: new URL("https://difuzed.io"),
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos de DiFuzed",
    description:
      "Découvrez DiFuzed, l'agence pionnière en Generative Engine Optimization (GEO). Notre mission : faire de votre entreprise la réponse par défaut des intelligences artificielles.",
    url: "https://difuzed.io/about",
    mainEntity: {
      "@type": "Organization",
      name: "DiFuzed",
      url: "https://difuzed.io",
      logo: "https://difuzed.io/logo.png",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Hugo Misery",
        jobTitle: "Co-founder & GEO Expert",
        url: "https://www.linkedin.com/in/hugo-misery",
      },
      sameAs: ["https://www.linkedin.com/company/difuzed"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@difuzed.com",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://difuzed.io",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "À propos",
          item: "https://difuzed.io/about",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <AboutPageContent />
    </>
  );
}

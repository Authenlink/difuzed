import { AboutPageContent } from "@/components/about/AboutPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos de DiFuzed - Agence GEO spécialisée",
  description:
    "Découvrez DiFuzed, l'agence pionnière en Generative Engine Optimization (GEO). Notre mission : faire de votre entreprise la réponse par défaut des intelligences artificielles.",
  openGraph: {
    title: "À propos de DiFuzed - Agence GEO spécialisée",
    description:
      "Découvrez DiFuzed, l'agence pionnière en Generative Engine Optimization (GEO). Notre mission : faire de votre entreprise la réponse par défaut des intelligences artificielles.",
    url: "https://difuzed.com/about",
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
    canonical: "https://difuzed.com/about",
  },
};

export default function AboutPage() {
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos de DiFuzed",
    description:
      "Découvrez DiFuzed, l'agence pionnière en Generative Engine Optimization (GEO). Notre mission : faire de votre entreprise la réponse par défaut des intelligences artificielles.",
    url: "https://difuzed.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "DiFuzed",
      url: "https://difuzed.com",
      logo: "https://difuzed.com/logo.png",
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
          item: "https://difuzed.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "À propos",
          item: "https://difuzed.com/about",
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

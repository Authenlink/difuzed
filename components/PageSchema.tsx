"use client";

import { useEffect } from "react";

export default function PageSchema() {
  useEffect(() => {
    const homepageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "DiFuzed - Agence GEO",
      description:
        "L'Agence GEO qui vous placera en tant que référence de votre secteur sur tous les moteurs de recherches IA",
      url: "https://www.difuzed.io",
      mainEntity: {
        "@type": "Service",
        name: "Generative Engine Optimization",
        description:
          "Services d'optimisation pour moteurs de recherche IA incluant audit, documentation technique, configuration technique et suivi continu",
        serviceType: "Generative Engine Optimization",
        areaServed: {
          "@type": "Country",
          name: "France",
        },
        offers: {
          "@type": "Offer",
          description:
            "Audit IA • Documentation technique optimisée • Présence externe stratégique • Monitoring continu",
        },
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.difuzed.io",
          },
        ],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(homepageSchema);
    script.id = "homepage-schema";
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("homepage-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}

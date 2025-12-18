export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est la pratique qui consiste à optimiser ses contenus pour qu'ils soient sélectionnés, cités et utilisés par les moteurs de recherche génératifs (IA comme ChatGPT, Gemini, Perplexity, Bing Chat, Google AI Overviews, etc.) dans leurs réponses directes. Contrairement au SEO classique qui vise le classement dans les pages de résultats (SERP), le GEO vise à devenir la source que l'IA mentionne dans sa réponse synthétique, souvent sans que l'utilisateur ait besoin de cliquer sur un lien.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre GEO et SEO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le SEO classique optimise pour les liens bleus, les snippets enrichis et les pages de résultats traditionnelles, en se concentrant sur les mots‑clés, les backlinks et les signaux techniques. Le GEO, lui, optimise pour que le contenu soit compris, extrait et cité par les LLM dans leurs réponses génératives, en privilégiant la clarté, la structure Q/R, les données structurées et l'autorité perçue.",
        },
      },
      {
        "@type": "Question",
        name: "Le GEO remplace-t-il le SEO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non, le GEO ne remplace pas le SEO, il le complète. Les deux stratégies coexistent : le SEO reste essentiel pour le trafic organique classique (Google, Bing), tandis que le GEO devient crucial pour être visible dans les réponses IA, les assistants vocaux et les moteurs conversationnels.",
        },
      },
      {
        "@type": "Question",
        name: "Quel impact le GEO a-t-il sur le trafic web ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le GEO peut réduire le trafic « zéro‑clic » classique, car les utilisateurs obtiennent leur réponse directement dans la réponse IA sans cliquer sur un lien. En revanche, il augmente la visibilité de marque, la confiance et le trafic de marque (direct et de référence), car être cité comme source crédible par l'IA renforce l'autorité et attire des visites plus qualifiées.",
        },
      },
      {
        "@type": "Question",
        name: "Quels outils et bonnes pratiques pour faire du GEO ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les bonnes pratiques clés sont : structurer le contenu en questions‑réponses, utiliser des données structurées (Schema.org), écrire de manière claire et factuelle, renforcer l'autorité (E‑E‑A‑T) et tester régulièrement ses contenus dans les principaux LLM (ChatGPT, Gemini, Perplexity, etc.).",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

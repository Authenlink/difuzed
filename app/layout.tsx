import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DiFuzed - Agence GEO | Optimisation pour ChatGPT, Claude, Gemini",
  description:
    "Devenez LA référence citée par ChatGPT, Claude, Gemini et Perplexity. DiFuzed optimise votre présence sur les moteurs de recherche IA avec du Generative Engine Optimization (GEO).",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "SEO IA",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Perplexity",
    "optimisation LLM",
  ],
  alternates: {
    canonical: "https://www.difuzed.io",
  },
  openGraph: {
    title: "DiFuzed - Agence GEO | Optimisation pour moteurs de recherche IA",
    description:
      "Devenez LA référence citée par ChatGPT, Claude, Gemini et Perplexity. Services d'optimisation pour moteurs de recherche IA.",
    url: "https://www.difuzed.io",
    siteName: "DiFuzed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiFuzed - Agence GEO",
    description: "Devenez LA référence citée par les moteurs de recherche IA",
  },
  metadataBase: new URL("https://www.difuzed.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DiFuzed",
    description:
      "L'Agence GEO qui vous placera en tant que référence de votre secteur sur tous les moteurs de recherches IA",
    url: "https://www.difuzed.io",
    logo: "https://www.difuzed.io/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["French"],
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Generative Engine Optimization",
      "GEO",
      "SEO IA",
      "Optimisation pour LLM",
      "Documentation technique",
      "Schema.org",
      "llms.txt",
    ],
    offers: {
      "@type": "Service",
      name: "Generative Engine Optimization",
      description:
        "Services d'optimisation pour moteurs de recherche IA incluant audit, documentation technique, configuration technique et suivi continu",
      provider: {
        "@type": "Organization",
        name: "DiFuzed",
      },
      areaServed: {
        "@type": "Country",
        name: "France",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DiFuzed",
    url: "https://www.difuzed.io",
    description:
      "L'Agence GEO qui vous placera en tant que référence de votre secteur sur tous les moteurs de recherches IA",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.difuzed.io/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DiFuzed",
    description:
      "Agence GEO spécialisée en Generative Engine Optimization pour optimiser votre présence sur ChatGPT, Claude, Gemini et Perplexity",
    url: "https://www.difuzed.io",
    logo: "https://www.difuzed.io/logo.png",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services GEO",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Optimisation ChatGPT",
            description:
              "Optimisez votre visibilité sur ChatGPT pour être cité comme source de référence dans les réponses génératives",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Optimisation Claude",
            description:
              "Optimisez votre présence sur Claude (Anthropic) pour améliorer vos citations dans les réponses IA",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Optimisation Gemini et Perplexity",
            description:
              "Développez votre visibilité sur Google Gemini et Perplexity pour maximiser vos citations par les moteurs de recherche IA",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit GEO",
            description:
              "Audit complet de votre présence actuelle sur les moteurs de recherche IA avec recommandations personnalisées",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Documentation technique optimisée",
            description:
              "Création et optimisation de documentation technique structurée (JSON-LD, llms.txt, schémas Schema.org) pour les LLM",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Monitoring continu",
            description:
              "Suivi et analyse continue de votre visibilité sur les principaux moteurs de recherche IA avec rapports détaillés",
          },
        },
      ],
    },
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

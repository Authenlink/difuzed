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
  title: "DiFuzed",
  description:
    "L'Agence GEO qui vous placera en tant que référence de votre secteur sur tous les moteurs de recherches IA ",
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
    url: "https://difuzed.com",
    logo: "https://difuzed.com/logo.png",
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
    url: "https://difuzed.com",
    description:
      "L'Agence GEO qui vous placera en tant que référence de votre secteur sur tous les moteurs de recherches IA",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://difuzed.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
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

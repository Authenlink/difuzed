import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DiFuzed - Prendre rendez-vous pour votre stratégie GEO",
  description:
    "Prenez rendez-vous avec DiFuzed pour optimiser votre présence sur ChatGPT, Claude, Gemini et Perplexity. Audit gratuit et stratégie GEO sur-mesure pour votre entreprise.",
  keywords: [
    "contact GEO",
    "rendez-vous GEO",
    "audit IA",
    "consultation Generative Engine Optimization",
  ],
  alternates: {
    canonical: "https://difuzed.io/contact",
  },
  openGraph: {
    title: "Contact DiFuzed - Prendre rendez-vous pour votre stratégie GEO",
    description:
      "Prenez rendez-vous avec DiFuzed pour optimiser votre présence sur les moteurs de recherche IA. Audit gratuit disponible.",
    url: "https://difuzed.io/contact",
    siteName: "DiFuzed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DiFuzed",
    description:
      "Prenez rendez-vous pour votre stratégie Generative Engine Optimization",
  },
  metadataBase: new URL("https://difuzed.io"),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

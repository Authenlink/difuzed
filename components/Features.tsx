"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import {
  IconChartBar,
  IconTrophy,
  IconBook2,
  IconFileCode,
  IconHierarchy,
  IconMessage2,
  IconQuote,
  IconNews,
  IconActivity,
} from "@tabler/icons-react";

const Features = () => {
  return (
    <div
      id="features"
      className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-8 md:pb-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Solutions <span className="text-primary">GEO</span> pour moteurs de
          recherche IA
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Optimisez votre présence sur les moteurs de recherche IA et devenez la
          référence citée par les LLM grâce au Generative Engine Optimization.
        </p>
      </div>

      <HoverEffect items={features} />
    </div>
  );
};

const features = [
  {
    title: "Audit visibilité IA et benchmark GEO",
    description:
      "Évaluation de votre position sur les moteurs de recherche IA. Analyse de 30-50 requêtes stratégiques pour optimiser votre Generative Engine Optimization.",
    icon: <IconChartBar className="w-8 h-8 text-primary" />,
  },
  {
    title: "Analyse concurrentielle citations IA",
    description:
      "Identification des concurrents cités par les LLM à votre place. Analyse de leurs stratégies GEO pour comprendre leur référencement par les moteurs de recherche IA.",
    icon: <IconTrophy className="w-8 h-8 text-primary" />,
  },
  {
    title: "Documentation technique optimisée LLM",
    description:
      "Création d'une documentation structurée optimisée pour les modèles de langage. Formatage pour maximiser les citations par les LLM et améliorer votre visibilité GEO.",
    icon: <IconBook2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Configuration llms.txt et robots.txt",
    description:
      "Optimisation des fichiers llms.txt et robots.txt pour guider les crawlers IA et améliorer l'indexation par les moteurs de recherche IA.",
    icon: <IconFileCode className="w-8 h-8 text-primary" />,
  },
  {
    title: "Schema.org et JSON-LD pour LLM",
    description:
      "Intégration du balisage Schema.org et JSON-LD pour une meilleure compréhension sémantique par les LLM. Structuration optimisée pour le Generative Engine Optimization.",
    icon: <IconHierarchy className="w-8 h-8 text-primary" />,
  },
  {
    title: "FAQ conversationnelles chatbots IA",
    description:
      "Développement de FAQ optimisées pour alimenter les réponses des chatbots IA. Formatage pour maximiser les citations par les moteurs de recherche IA.",
    icon: <IconMessage2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Contenu citable pour citations IA",
    description:
      "Formatage stratégique de votre contenu (définitions, statistiques, frameworks) pour maximiser les citations par les LLM et améliorer votre référencement GEO.",
    icon: <IconQuote className="w-8 h-8 text-primary" />,
  },
  {
    title: "Autorité média et présence externe",
    description:
      "Publication d'articles sur Medium, LinkedIn, Wikipedia pour renforcer votre autorité. Stratégie permettant aux moteurs de recherche IA de vous identifier comme référence.",
    icon: <IconNews className="w-8 h-8 text-primary" />,
  },
  {
    title: "Monitoring citations IA et reporting GEO",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Suivi mensuel citations moteurs de recherche IA</li>
        <li>Alertes évolutions de position</li>
        <li>Ajustements contenu basés données</li>
        <li>Reporting métriques GEO</li>
      </ul>
    ),
    icon: <IconActivity className="w-8 h-8 text-primary" />,
  },
];

export default Features;

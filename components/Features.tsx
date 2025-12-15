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
      className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Nos Solutions <span className="text-primary">GEO</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Optimisez votre visibilité dans les moteurs de réponse par IA grâce à
          notre approche complète.
        </p>
      </div>

      <HoverEffect items={features} />
    </div>
  );
};

const features = [
  {
    title: "Benchmark position actuelle",
    description:
      "Évaluation précise de votre visibilité actuelle sur les principaux moteurs de recherche et IA génératives.",
    icon: <IconChartBar className="w-8 h-8 text-primary" />,
  },
  {
    title: "Analyse des concurrents",
    description:
      "Identification et analyse approfondie des concurrents cités à votre place pour comprendre leurs stratégies.",
    icon: <IconTrophy className="w-8 h-8 text-primary" />,
  },
  {
    title: "Documentation structurée",
    description:
      "Création d'une documentation technique (type docs.entreprise.com) parfaitement optimisée pour la lecture par les LLM.",
    icon: <IconBook2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Configuration Technique",
    description:
      "Mise en place et optimisation des fichiers llms.txt et robots.txt pour guider efficacement les crawlers d'IA.",
    icon: <IconFileCode className="w-8 h-8 text-primary" />,
  },
  {
    title: "Données Structurées",
    description:
      "Intégration complète du balisage Schema.org et JSON-LD sur vos pages clés pour une compréhension sémantique maximale.",
    icon: <IconHierarchy className="w-8 h-8 text-primary" />,
  },
  {
    title: "FAQ Conversationnelles",
    description:
      "Développement de FAQ conçues spécifiquement pour alimenter les réponses conversationnelles des chatbots.",
    icon: <IconMessage2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Contenu Citable",
    description:
      "Formatage stratégique de votre contenu (définitions, statistiques, frameworks) pour augmenter les chances de citation.",
    icon: <IconQuote className="w-8 h-8 text-primary" />,
  },
  {
    title: "Autorité Média",
    description:
      "Publication d'articles sur des médias sectoriels et enrichissement de vos profils pour renforcer votre autorité en ligne.",
    icon: <IconNews className="w-8 h-8 text-primary" />,
  },
  {
    title: "Suivi & Reporting",
    description: (
      <ul className="list-disc list-inside space-y-1">
        <li>Suivi mensuel des citations IA</li>
        <li>Alertes sur évolutions</li>
        <li>Ajustements de contenu</li>
        <li>Reporting complet</li>
      </ul>
    ),
    icon: <IconActivity className="w-8 h-8 text-primary" />,
  },
];

export default Features;

"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FounderCard } from "./FounderCard";
import { AboutWobbleCards } from "./AboutWobbleCards";

export default function About() {
  const values = [
    {
      title: "Expertise Technique",
      description:
        "Nous parlons le langage des LLMs (JSON-LD, RAG, Knowledge Graph) pour que vous n'ayez pas à le faire.",
      link: "#",
    },
    {
      title: "Transparence",
      description:
        "Pas de boite noire. Nous vous expliquons exactement comment et pourquoi nous optimisons votre contenu.",
      link: "#",
    },
    {
      title: "Innovation",
      description:
        "Le GEO évolue chaque semaine. Nous testons en permanence les nouveaux modèles (Claude 3.5, GPT-4o, Gemini 1.5).",
      link: "#",
    },
  ];

  return (
    <div className="pt-10 md:pt-20 pb-10 mx auto">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-foreground mb-8 mt-10">
        À propos de <span className="text-primary">DiFuzed</span>
      </h1>

      <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
        Nous sommes l&apos;agence pionnière en{" "}
        <span className="font-semibold text-foreground">
          Generative Engine Optimization (GEO)
        </span>
        . Notre mission est simple : faire de votre entreprise la réponse par
        défaut des intelligences artificielles.
      </p>

      <div className="mb-20 px-4">
        <AboutWobbleCards />
      </div>

      <div className="mb-20 px-4">
        <FounderCard />
      </div>

      <div className="mb-20">
        <h2 className="text-5xl font-bold text-center">
          Nos <span className="text-primary">Valeurs</span>
        </h2>
        <HoverEffect items={values} />
      </div>
    </div>
  );
}

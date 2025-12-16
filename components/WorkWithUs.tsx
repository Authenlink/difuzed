"use client";

import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  FaCog,
  FaDatabase,
  FaCode,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div
      className=" max-w-7xl mx-auto flex flex-col items-center px-5 my-8 md:my-20 pt-8 md:pt-20"
      id="Collaboration"
    >
      <h2 className="text-center text-4xl font-bold text-foreground mb-8">
        Notre <span className="text-primary">approche GEO</span> en 5 étapes
      </h2>
      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl">
        De l&apos;audit de visibilité à l&apos;optimisation continue, nous
        maximisons votre présence SEO et GEO pour dominer les moteurs de
        recherche IA.
      </p>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 w-full">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<FaCog className="h-4 w-4 text-foreground" />}
          title="1. Audit de visibilité IA"
          description="Benchmark position actuelle sur 30-50 requêtes clés. Analyse des concurrents cités à votre place et identification des gaps de visibilité."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<FaDatabase className="h-4 w-4 text-foreground" />}
          title="2. Documentation technique IA-ready"
          description="Création d'une documentation structurée optimisée pour les LLM. Configuration llms.txt, Schema.org et contenu formaté pour être citable."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<FaCode className="h-4 w-4 text-foreground" />}
          title="3. Stratégie de présence externe"
          description="Contenu stratégique sur les sources que les IA utilisent. Articles sectoriels, présence Wikipedia, profils enrichis et guest posts d'autorité."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<FaUserTie className="h-4 w-4 text-foreground" />}
          title="4. Monitoring continu"
          description="Suivi mensuel des citations IA avec alertes sur évolutions. Ajustements de contenu et reporting détaillé pour optimisation continue."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<FaChartLine className="h-4 w-4 text-foreground" />}
          title="5. Formation & Évolution"
          description="Formation technique pour vos équipes. Documentation et support pour faire évoluer votre présence en continu et adopter les nouvelles techniques émergentes."
        />
      </ul>
    </div>
  );
};

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-primary/20 bg-card p-6 md:p-6 shadow-sm">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-border p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-foreground md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-muted-foreground md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Experience;

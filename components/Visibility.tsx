"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

const Visibility = () => {
  return (
    <div className="w-full pt-10 pb-20 mb-10 px-4">
      <h2 className="text-center text-4xl font-bold text-foreground mb-12 max-w-4xl mx-auto">
        <span className="text-primary">Trackez</span> et{" "}
        <span className="text-primary">Optimisez</span> votre visibilité sur les
        moteurs de recherche IA.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Card SEO - Grande gauche */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              SEO
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Boostez votre trafic avec des outils SEO alimentés par IA et des
              workflows automatisés.
            </p>
          </div>
          <Image
            src="/blog.png"
            width={500}
            height={500}
            alt="SEO Dashboard"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl opacity-80"
          />
        </WobbleCard>

        {/* Card GEO - Petite droite */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            GEO
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Développez votre visibilité dans tous les outils de recherche IA et
            modèles de langage (LLM).
          </p>
        </WobbleCard>

        {/* Card Visibilité Totale - Très grande bas */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#fb2c36] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Visibilité Totale
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Gagnez tous les types de recherche - du SEO traditionnel au GEO,
              en passant par les réponses génératives.
            </p>
          </div>
          <Image
            src="/doc.png"
            width={500}
            height={500}
            alt="Documentation GEO"
            className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl opacity-90"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default Visibility;

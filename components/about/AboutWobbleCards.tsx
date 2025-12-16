"use client";

import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

export function AboutWobbleCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {/* Card Pourquoi DiFuzed - Grande gauche */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Pourquoi DiFuzed ?
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Le SEO est mort, vive le GEO. Vos clients ne cherchent plus des
            liens bleus, ils posent des questions complexes à ChatGPT, Claude et
            Perplexity. Nous nous assurons que ces IA vous connaissent, vous
            comprennent et vous recommandent.
          </p>
        </div>
        <Image
          src="/medium.png"
          width={500}
          height={500}
          alt="Medium SEO article"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl opacity-80"
        />
      </WobbleCard>

      {/* Card Notre Vision - Petite droite */}
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Notre Vision
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Un web où l&apos;information est structurée pour être comprise
          instantanément par les machines, au service des humains.
        </p>
      </WobbleCard>

      {/* Card Une approche data-driven - Très grande bas */}
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm md:max-w-lg">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Une approche data-driven
          </h2>
          <p className="mt-4 max-w-[26rem] md:max-w-[32rem] text-left text-base/6 text-neutral-200">
            Nous combinons expertise sémantique et analyse de données pour
            maximiser votre impact sur les LLMs.
            <br />
            <br />
            Nous développons votre documentation technique et créons des formats
            spécifiques pour LLM (JSON-LD, llms.txt, schémas structurés).
            <br />
            <br />
            L&apos;objectif : que les intelligences artificielles vous
            comprennent et vous recommandent naturellement.
          </p>
        </div>
        <Image
          src="/documentation.png"
          width={500}
          height={500}
          alt="Documentation GEO"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl opacity-90"
        />
      </WobbleCard>
    </div>
  );
}

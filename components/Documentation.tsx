"use client";

import { Tabs } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Documentation() {
  const { theme } = useTheme();

  const tabs = [
    {
      title: "Documentation",
      value: "documentation",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#fb2c36] to-[#b91c1c]">
          <p>Construisez votre documentation pour nourrir les IA</p>
          <DummyContent
            imageSrc={theme === "dark" ? "/doc.png" : "/docwhite.png"}
            alt="Documentation technique optimisée pour les LLM et moteurs de recherche IA - DiFuzed"
          />
        </div>
      ),
    },
    {
      title: "Wikipedia",
      value: "wikipedia",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-indigo-900">
          <p>Présence sur Wikipedia et sources externes</p>
          <DummyContent
            imageSrc={theme === "dark" ? "/wikidark.png" : "/wikiwhite.png"}
            alt="Présence sur Wikipedia et sources externes pour améliorer la visibilité GEO - DiFuzed"
          />
        </div>
      ),
    },
    {
      title: "LinkedIn Entreprise",
      value: "linkedin",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0077B5] to-[#005885]">
          <p>Optimisez votre présence LinkedIn Entreprise</p>
          <DummyContent
            imageSrc="/linkedin.png"
            alt="Optimisation de la présence LinkedIn Entreprise pour le Generative Engine Optimization - DiFuzed"
          />
        </div>
      ),
    },
    {
      title: "Medium",
      value: "medium",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Publiez et partagez vos expertises sur Medium</p>
          <DummyContent
            imageSrc="/medium.png"
            alt="Publication d'articles SEO et GEO sur Medium pour renforcer l'autorité - DiFuzed"
          />
        </div>
      ),
    },
    {
      title: "Crunchbase",
      value: "crunchbase",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-pink-500 to-pink-700">
          <p>Présence sur Crunchbase pour la visibilité B2B</p>
          <DummyContent
            imageSrc="/crunchbase.png"
            alt="Profil Crunchbase optimisé pour la visibilité B2B et le référencement IA - DiFuzed"
          />
        </div>
      ),
    },
    {
      title: "Reddit",
      value: "reddit",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-500 to-red-700">
          <p>Communauté et discussions sur Reddit</p>
          <DummyContent
            imageSrc={theme === "dark" ? "/redditdark.png" : "/redditwhite.png"}
            alt="Engagement communautaire sur Reddit pour améliorer la présence GEO - DiFuzed"
          />
        </div>
      ),
    },
    {
      title: "Substack",
      value: "substack",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-700">
          <p>Créez et monétisez votre newsletter sur Substack</p>
          <DummyContent
            imageSrc="/substack.png"
            alt="Newsletter Substack pour développer l'autorité et la visibilité dans les LLM - DiFuzed"
          />
        </div>
      ),
    },
  ];

  return (
    <div
      id="documentation"
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-40 mt-20"
    >
      <h2 className="text-center text-4xl font-bold text-foreground mb-10">
        Optimisez votre présence sur les{" "}
        <span className="text-primary">plateformes stratégiques</span>
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ imageSrc, alt }: { imageSrc: string; alt: string }) => {
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={1000}
      height={1000}
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default Documentation;

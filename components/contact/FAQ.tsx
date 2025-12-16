"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconBrain,
  IconScale,
  IconReplace,
  IconChartBar,
  IconTools,
  IconChevronDown,
} from "@tabler/icons-react";

const items = [
  {
    id: 1,
    question: "Qu’est-ce que le GEO (Generative Engine Optimization) ?",
    answer: (
      <>
        <p className="mb-2">
          C’est la pratique qui consiste à optimiser ses contenus pour qu’ils
          soient sélectionnés, cités et utilisés par les moteurs de recherche
          génératifs (IA comme ChatGPT, Gemini, Perplexity, Bing Chat, Google AI
          Overviews, etc.) dans leurs réponses directes.
        </p>
        <p>
          Contrairement au SEO classique qui vise le classement dans les pages
          de résultats (SERP), le GEO vise à devenir la source que l’IA
          mentionne dans sa réponse synthétique, souvent sans que l’utilisateur
          ait besoin de cliquer sur un lien.
        </p>
      </>
    ),
    icon: (
      <IconBrain className="text-neutral-500 dark:text-neutral-300" size={24} />
    ),
  },
  {
    id: 2,
    question: "Quelle est la différence entre GEO et SEO ?",
    answer: (
      <>
        <p className="mb-2">
          Le SEO classique optimise pour les liens bleus, les snippets enrichis
          et les pages de résultats traditionnelles, en se concentrant sur les
          mots‑clés, les backlinks et les signaux techniques.
        </p>
        <p>
          Le GEO, lui, optimise pour que le contenu soit compris, extrait et
          cité par les LLM dans leurs réponses génératives, en privilégiant la
          clarté, la structure Q/R, les données structurées et l’autorité
          perçue.
        </p>
      </>
    ),
    icon: (
      <IconScale className="text-neutral-500 dark:text-neutral-300" size={24} />
    ),
  },
  {
    id: 3,
    question: "Le GEO remplace-t-il le SEO ?",
    answer: (
      <>
        <p className="mb-2">
          Non, le GEO ne remplace pas le SEO, il le complète.
        </p>
        <p>
          Les deux stratégies coexistent : le SEO reste essentiel pour le trafic
          organique classique (Google, Bing), tandis que le GEO devient crucial
          pour être visible dans les réponses IA, les assistants vocaux et les
          moteurs conversationnels.
        </p>
      </>
    ),
    icon: (
      <IconReplace
        className="text-neutral-500 dark:text-neutral-300"
        size={24}
      />
    ),
  },
  {
    id: 4,
    question: "Quel impact le GEO a-t-il sur le trafic web ?",
    answer: (
      <>
        <p className="mb-2">
          Le GEO peut réduire le trafic « zéro‑clic » classique, car les
          utilisateurs obtiennent leur réponse directement dans la réponse IA
          sans cliquer sur un lien.
        </p>
        <p>
          En revanche, il augmente la visibilité de marque, la confiance et le
          trafic de marque (direct et de référence), car être cité comme source
          crédible par l’IA renforce l’autorité et attire des visites plus
          qualifiées.
        </p>
      </>
    ),
    icon: (
      <IconChartBar
        className="text-neutral-500 dark:text-neutral-300"
        size={24}
      />
    ),
  },
  {
    id: 5,
    question: "Quels outils et bonnes pratiques pour faire du GEO ?",
    answer: (
      <>
        <p>
          Les bonnes pratiques clés sont : structurer le contenu en
          questions‑réponses, utiliser des données structurées (Schema.org),
          écrire de manière claire et factuelle, renforcer l’autorité (E‑E‑A‑T)
          et tester régulièrement ses contenus dans les principaux LLM (ChatGPT,
          Gemini, Perplexity, etc.).
        </p>
      </>
    ),
    icon: (
      <IconTools className="text-neutral-500 dark:text-neutral-300" size={24} />
    ),
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-foreground">
        Questions <span className="text-primary">Fréquentes</span>
      </h2>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900/50"
          >
            <button
              onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
              className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                  {item.icon}
                </div>
                <span className="font-semibold text-lg md:text-xl text-foreground">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: openItem === item.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <IconChevronDown className="text-neutral-500" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openItem === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-4 md:px-6 pb-6 pt-0 text-neutral-600 dark:text-neutral-400 ml-[calc(3rem+16px)]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  SiOpenai,
  SiGooglegemini,
  SiOllama,
  SiX,
  SiPerplexity,
  SiClaude,
} from "react-icons/si";

// Icônes officielles Simple Icons (toutes en couleur primary)
const OpenAIIcon = () => <SiOpenai className="w-full h-full text-primary" />;
const ClaudeIcon = () => <SiClaude className="w-full h-full text-primary" />; // Utilisation d'OpenAI pour Claude (pas d'icône Anthropic dédiée)
const GeminiIcon = () => (
  <SiGooglegemini className="w-full h-full text-primary" />
);
const LlamaIcon = () => <SiOllama className="w-full h-full text-primary" />;
// const MistralIcon = () => <SiOpenai className="w-full h-full text-primary" />; // Utilisation d'OpenAI pour Mistral (pas d'icône dédiée)
const GrokIcon = () => <SiX className="w-full h-full text-primary" />;
const PerplexityIcon = () => (
  <SiPerplexity className="w-full h-full text-primary" />
);

// Configuration des éléments du dock avec les LLM
const llmDockItems = [
  {
    title: "ChatGPT",
    icon: <OpenAIIcon />,
    href: "https://chat.openai.com/",
  },
  {
    title: "Claude",
    icon: <ClaudeIcon />,
    href: "https://claude.ai/",
  },
  {
    title: "Gemini",
    icon: <GeminiIcon />,
    href: "https://gemini.google.com/",
  },
  {
    title: "Llama",
    icon: <LlamaIcon />,
    href: "https://llama.meta.com/",
  },
  {
    title: "Grok",
    icon: <GrokIcon />,
    href: "https://x.ai/grok/",
  },
  {
    title: "Perplexity",
    icon: <PerplexityIcon />,
    href: "https://www.perplexity.ai/",
  },
];

export default function LLMFloatingDock() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={llmDockItems} />
    </div>
  );
}

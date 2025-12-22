"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { Spotlight } from "./ui/spotlight-new";
import MagicButton from "./ui/MagicButton";
import { IconCalendar } from "@tabler/icons-react";
import Link from "next/link";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return (
    <div
      className="pt-20 mb-4 md:mb-20 relative min-h-[80vh] flex flex-col justify-center"
      id="acceuil"
    >
      <Spotlight
        gradientFirst={
          mounted && resolvedTheme === "white"
            ? "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, .08) 0, hsla(0, 0%, 55%, .02) 50%, hsla(0, 0%, 45%, 0) 80%)"
            : "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 100%, 85%, .16) 0, hsla(0, 100%, 55%, .04) 50%, hsla(0, 100%, 45%, 0) 80%)"
        }
        gradientSecond={
          mounted && resolvedTheme === "white"
            ? "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .06) 0, hsla(0, 0%, 55%, .02) 80%, transparent 100%)"
            : "radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 85%, .12) 0, hsla(0, 100%, 55%, .04) 80%, transparent 100%)"
        }
        gradientThird={
          mounted && resolvedTheme === "white"
            ? "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .04) 0, hsla(0, 0%, 45%, .02) 80%, transparent 100%)"
            : "radial-gradient(50% 50% at 50% 50%, hsla(0, 100%, 85%, .08) 0, hsla(0, 100%, 45%, .04) 80%, transparent 100%)"
        }
      />

      <div className="h-[60vh] md:h-[65vh] w-full bg-background absolute top-10 left-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <ContainerScroll
        titleComponent={
          <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
              <p className="uppercase tracking-widest text-md max-w-80 mb-5">
                Generative Engine Optimization
              </p>

              <div className="text-3xl md:text-4xl lg:text-6xl leading-normal font-black text-foreground">
                Soyez LA première source citée par{" "}
                <FlipWords
                  words={[
                    "ChatGPT",
                    "Claude",
                    "Gemini",
                    "Grok",
                    "Perplexity",
                    "Mistral",
                    "Llama",
                  ]}
                  duration={3000}
                  className="text-primary leading-tight"
                />
              </div>

              {/* Bouton Prendre rendez-vous */}
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground mt-6">
                Audit IA • Documentation technique optimisée • Présence externe
                stratégique • Monitoring continu
              </p>

              <div className="lg:mt-0 mt-4 min-w-[230px] pt-4 md:pt-10">
                <Link href="/contact">
                  <MagicButton
                    title="Prendre rendez-vous"
                    icon={<IconCalendar className="w-4 h-4" />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
          </div>
        }
      >
        <Image
          src={
            mounted && resolvedTheme === "light"
              ? "/difuzedWhite.png"
              : "/difuzedDark.png"
          }
          alt="Interface de l'application DiFuzed - Outil d'audit GEO automatisé pour l'optimisation des moteurs de recherche IA"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top draggable-false"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default Hero;

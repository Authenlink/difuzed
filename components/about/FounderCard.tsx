"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function FounderCard() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-10 w-full max-w-6xl mx-auto">
      {/* 3D Card à gauche */}
      <div className="flex-1 w-full max-w-md">
        <CardContainer className="inter-var">
          <CardBody className="bg-card relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-border w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-sm transition-all duration-200">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Hugo Misery
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Fondateur d&apos;AuthenLink & DiFuzed
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={
                  mounted && resolvedTheme === "light"
                    ? "/authenlinkWhite.png"
                    : "/authenlinkWebsite.png"
                }
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-border/50"
                alt="AuthenLink Website"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://authenlink.com"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/authenlink.png"
                    alt="AuthenLink Logo"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  Visiter AuthenLink
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://linkedin.com/in/hugo-misery"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Linkedin
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>

      {/* Texte de présentation à droite */}
      <div className="flex-1 space-y-6 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          L&apos;Expertise derrière la méthode
        </h2>
        <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
          <p>
            Je suis <span className="text-primary font-semibold">Hugo</span>,
            fondateur d&apos;
            <Link
              href="https://authenlink.com"
              className="underline hover:text-primary transition-colors"
            >
              AuthenLink
            </Link>
            .
          </p>
          <p>
            Mon expertise réside dans la création d&apos;agents IA sur-mesure,
            allant des solutions
            <span className="font-semibold text-foreground"> low-code</span> aux
            architectures
            <span className="font-semibold text-foreground">
              {" "}
              full-code (Python)
            </span>{" "}
            complexes.
          </p>
          <p>
            Je me spécialise particulièrement dans le{" "}
            <span className="font-semibold text-foreground">
              fine-tuning de modèles
            </span>{" "}
            et l&apos;implémentation de{" "}
            <span className="font-semibold text-foreground">tool calling</span>,
            permettant aux IA d&apos;interagir réellement avec vos systèmes et
            données.
          </p>
          <p>
            C&apos;est cette compréhension profonde du fonctionnement des LLMs
            qui a donné naissance à
            <span className="font-semibold text-foreground"> DiFuzed</span> :
            une approche technique du référencement conçue pour parler
            directement aux algorithmes.
          </p>
        </div>
      </div>
    </div>
  );
}

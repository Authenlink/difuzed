"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Ripple } from "@/components/ui/ripple";

export default function ContactHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden min-h-[50vh] w-full pt-20">
      <Ripple
        mainCircleSize={210}
        numCircles={8}
        className="z-0"
        circleClassName="bg-primary border-primary pt-20"
      />

      <div className="z-10 flex flex-col items-center text-center px-4 mt-10">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-foreground  py-4">
          Contactez-nous
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm md:text-base">
          Une question, un projet ou simplement envie d'échanger ? <br />
          Nous sommes à votre écoute pour vous accompagner.
        </p>
      </div>
    </div>
  );
}

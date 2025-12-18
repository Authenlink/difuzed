"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarThemeToggle,
} from "@/components/ui/resizable-navbar";
import MagicButton from "@/components/ui/MagicButton";
import { IconCalendar } from "@tabler/icons-react";
import { navItems } from "@/data/navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useState } from "react";
import Visibility from "@/components/Visibility";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Documentation from "@/components/Documentation";
import LLMFloatingDock from "@/components/LLMFloatingDock";
import Experience from "@/components/WorkWithUs";
import FAQ from "@/components/contact/FAQ";
import FAQSchema from "@/components/FAQSchema";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "DiFuzed - Agence GEO",
            description:
              "L'Agence GEO qui vous placera en tant que référence de votre secteur sur tous les moteurs de recherches IA",
            url: "https://www.difuzed.io",
            mainEntity: {
              "@type": "Service",
              name: "Generative Engine Optimization",
              description:
                "Services d'optimisation pour moteurs de recherche IA incluant audit, documentation technique, configuration technique et suivi continu",
              serviceType: "Generative Engine Optimization",
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              offers: {
                "@type": "Offer",
                description:
                  "Audit IA • Documentation technique optimisée • Présence externe stratégique • Monitoring continu",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://www.difuzed.io",
                },
              ],
            },
          }),
        }}
      />
      <FAQSchema />
      <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto px-2">
        <div className="w-full">
          <Navbar>
            <NavBody>
              <NavbarLogo />
              <NavItems items={navItems} />
              <div className="flex items-center gap-2">
                <NavbarThemeToggle />
                <Link href="/contact">
                  <MagicButton
                    title="Rendez-vous"
                    icon={<IconCalendar size={20} />}
                    position="right"
                    className="md:w-auto h-10"
                    otherClasses="!px-4 !text-sm !font-bold"
                  />
                </Link>
              </div>
            </NavBody>
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <div className="flex items-center gap-3">
                  <NavbarThemeToggle />
                  <MobileNavToggle
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </div>
              </MobileNavHeader>
              <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="text-neutral-600 dark:text-neutral-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
          <div className="hidden md:block">
            <TracingBeam>
              <Hero />
              <Visibility />
              <Features />
              <Documentation />
              <Experience />
              <Contact />
              <FAQ />
              <Footer />
              <LLMFloatingDock />
            </TracingBeam>
          </div>
          <div className="md:hidden">
            <Hero />
            <Visibility />
            <Features />
            <Experience />
            <Contact />
            <FAQ />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

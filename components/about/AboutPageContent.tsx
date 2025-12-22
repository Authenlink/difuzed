"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import About from "@/components/about/About";
import Footer from "@/components/Footer";

export function AboutPageContent() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    if (link.startsWith("#")) {
      router.push(`/${link}`);
    }
  };

  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto px-2">
      <div className="w-full">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-2">
              <NavbarThemeToggle />
              <Link
                href="https://app.difuzed.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="Launch App"
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
              {navItems.map((item, idx) => {
                const isExternalLink = item.link.startsWith("http");
                const isAnchor = item.link.startsWith("#");

                if (isAnchor) {
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.link)}
                      className="text-neutral-600 dark:text-neutral-600 text-left"
                    >
                      {item.name}
                    </button>
                  );
                }

                return (
                  <a
                    key={idx}
                    href={item.link}
                    className="text-neutral-600 dark:text-neutral-600"
                    onClick={() => setIsOpen(false)}
                    {...(isExternalLink && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {item.name}
                  </a>
                );
              })}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <div className="hidden md:block">
          <TracingBeam>
            <About />
            <Footer />
          </TracingBeam>
        </div>
        <div className="md:hidden">
          <About />
          <Footer />
        </div>
      </div>
    </main>
  );
}

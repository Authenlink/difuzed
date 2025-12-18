"use client";

import { FaCalendarAlt } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="w-full pt-20 pb-1" id="Rendez-vous">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center justify-center">
          Prêt à devenir <span className="text-primary">La Référence</span> et
          être visible partout où vos prospects effectuent des cherchent ?
        </h1>
        <p className="text-muted-foreground md:mt-10 my-5 text-center">
          Nous échangerons pendant 30 minutes sur les{" "}
          <span className="text-primary">besoins</span> de votre entreprise et
          les <span className="text-primary">actions</span> que vous
          souhaiteriez mettre en place.
        </p>

        <MagicButton
          title="Prendre rendez-vous"
          icon={<FaCalendarAlt />}
          position="right"
          handleClick={() => {
            router.push("/contact");
          }}
        />
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-muted-foreground">
          Copyright © 2024 Difuzed/difuzed.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;

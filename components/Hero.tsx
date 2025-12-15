import { FlipWords } from "./ui/flip-words";
import { Spotlight } from "./ui/spotlight";
import { ParticlesBackground } from "./ui/ParticlesBackground";
import { DottedMap } from "./ui/dotted-map";
import MagicButton from "./ui/MagicButton";
import { IconCalendar } from "@tabler/icons-react";

const Hero = () => {
  const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
    { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
    { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
    { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
    { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
    { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
    { lat: 55.7558, lng: 37.6176, size: 0.3 }, // Moscow
    { lat: 39.9042, lng: 116.4074, size: 0.3 }, // Beijing
    { lat: 28.6139, lng: 77.209, size: 0.3 }, // New Delhi
    { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
    { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
    { lat: 25.2048, lng: 55.2708, size: 0.3 }, // Dubai
  ];

  return (
    <div
      className="pt-20 mb-4 md:mb-20 relative min-h-[80vh] flex flex-col justify-center"
      id="acceuil"
    >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="red"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className="absolute inset-0 w-full h-full bg-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <ParticlesBackground />
        </div>
        <div className="absolute inset-0 w-full h-full block md:hidden opacity-30">
          <DottedMap markers={markers} />
        </div>
      </div>

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

          <div className="lg:mt-0 mt-4 min-w-[230px] pt-10">
            <MagicButton
              title="Prendre rendez-vous"
              icon={<IconCalendar className="w-4 h-4" />}
              position="right"
              handleClick={() => {
                // Handle appointment booking logic here
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

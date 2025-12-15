"use client";

import {
  IconMail,
  IconPhone,
  IconSend,
  IconCalendar,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import MagicButtonTwo from "@/components/ui/MagicButtonTwo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez-nous
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une question, un projet ? N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Form */}
          <div className="order-2 lg:order-1">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    placeholder="Votre nom"
                    className="h-12 bg-card dark:bg-card"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    placeholder="Votre prénom"
                    className="h-12 bg-card dark:bg-card"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Entreprise</Label>
                <Input
                  id="company"
                  placeholder="Nom de votre entreprise"
                  className="h-12 bg-card dark:bg-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Adresse email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  className="h-12 bg-card dark:bg-card"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Comment pouvons-nous vous aider ?
                </Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  className="min-h-36 resize-none bg-card dark:bg-card"
                />
              </div>

              <MagicButtonTwo
                title="Envoyer"
                icon={<IconSend className="w-4 h-4" />}
                position="right"
                otherClasses="w-full"
              />
            </form>
          </div>

          {/* Right Side - Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Email Card */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-card">
                    <IconMail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Écrivez-nous</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-base mb-4">
                  Vous avez une idée, un projet ou simplement envie d&apos;en
                  savoir plus ? On vous lit et on revient vers vous rapidement.
                </CardDescription>
                <a
                  href="mailto:difuzed.fr@gmail.com"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all"
                >
                  difuzed.fr@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Sales Card */}
            <Card className="border-border/50 hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-card">
                    <IconPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      Parlons de votre projet
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-base mb-4">
                  Envie d&apos;échanger en direct ? Réservez un créneau pour
                  discuter de vos besoins et voir comment Difuzed peut vous
                  aider.
                </CardDescription>
                <MagicButtonTwo
                  title="Réserver un appel"
                  icon={<IconCalendar className="w-4 h-4" />}
                  position="right"
                  handleClick={() => {
                    // Handle calendar booking logic here
                  }}
                  otherClasses="w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

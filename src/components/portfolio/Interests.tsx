import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Dumbbell, HeartHandshake } from "lucide-react";

const interests = [
  {
    icon: Dumbbell,
    title: "Powerlifting",
    description: "Pratique intensive du powerlifting (squat, bench, deadlift). Développement de la force brute, de la discipline mentale et de la résilience.",
  },
  {
    icon: HeartHandshake,
    title: "ONG Recyclage Technologique – Huesca, Espagne",
    description: "Membre actif depuis 2023 → Collecte, diagnostic, réparation et reconditionnement d’ordinateurs usagés destinés à des familles et écoles défavorisées. Mise en place et optimisation complète du flux logistique et technique.",
  },
];

export const Interests = () => {
  const { t } = useLanguage();

  return (
    <section id="interests" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {t("interests.title") || "Centres d’intérêt"}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="group p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="h-9 w-9 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {interest.title}
                </h3>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  {interest.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
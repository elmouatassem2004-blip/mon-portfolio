import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Cycle ingénieur généraliste",
    school: "IMT Mines d'Albi, Albi",
    period: "2026 - 2029",
    description: "Spécialisation en Matériaux et Procédés Avancés pour l'Aéronautique et l'Aérospatial",
  },
  {
    degree: "CPGE TSI 1ère et 2ème années",
    school: "Lycée Saint-Cricq, Pau",
    period: "2023 - 2026",
    description: "Science de l'Ingénieur, Mécanique, Science des Matériaux, RDM, Physique",
  },
  {
    degree: "Baccalauréat Technologique",
    school: "Lycée Saint-Cricq, Pau",
    period: "2021 - 2023",
    description: "Mention Très Bien",
  },
];

export const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {t("education.title") || "Formation"}
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Ligne verticale centrale (timeline) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Point timeline + icône */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center ring-8 ring-background shadow-lg">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Carte */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <Card className="p-7 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {edu.degree}
                      </h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-lg font-semibold text-primary mb-2">
                      {edu.school}
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </Card>
                </div>

                {/* Espace vide pour alterner sur desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
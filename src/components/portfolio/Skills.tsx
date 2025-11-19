import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const languages = [
  { name: "Français", level: "Natif" },
  { name: "Espagnol", level: "Natif" },
  { name: "Anglais", level: "C1" },
];

const technicalSkills = [
  "Gestion de projets industriels",
  "Optimisation des processus",
  "Pack Office",
  "Capacité d'apprentissage",
  "Optimisation supply chain",
  "SolidWorks/CATIA",
  "Python",
];

const certifications = [
  {
    name: "Spécialisation Fabrication Additive",
    description: "Procédés de production innovants",
    status: "En cours de validation",
  },
  {
    name: "Spécialiste de la Supply Chain Airbus",
    description: "Compréhension des enjeux logistiques et de la chaîne de valeur du secteur",
    status: "En cours de validation",
  },
];

export const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {t("skills.title")}
        </h2>

        {/* Changement clé : grid → space-y (empilé verticalement sur tous les écrans) */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Compétences techniques */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.technical") || "Compétences techniques"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm sm:text-base px-5 py-2.5 font-medium hover:bg-secondary/80 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.certifications") || "Certifications"}
            </h3>
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 bg-background/70 rounded-xl border border-border/50"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-lg">{cert.name}</h4>
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Langues */}
          <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-8 text-primary">
              {t("skills.languages") || "Langues"}
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <Badge
                  key={lang.name}
                  variant="default"
                  className="text-base px-6 py-3 font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {lang.name} — <span className="ml-1 font-bold">{lang.level}</span>
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
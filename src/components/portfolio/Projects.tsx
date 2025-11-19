import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TIPE 2025-2026",
    description: "Plateforme e-commerce complète avec panier, paiement et gestion des stocks",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "TIPE 2024-2025",
    description: "Application de gestion de tâches avec système de notifications en temps réel",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Titre identique à toutes les autres sections */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center gradient-text">
          {t("projects.title") || "Projets"}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-border/50"
            >
              {/* Placeholder élégant pour une future capture d’écran */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b">
                <div className="text-6xl font-bold text-primary/20 select-none">
                  0{index + 1}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </a>
                  </Button>

                  <Button size="lg" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      {t("projects.view") || "Voir le projet"}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
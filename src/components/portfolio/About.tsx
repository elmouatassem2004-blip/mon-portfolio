import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-subtle section-padding px-6"
    >
      <div className="container-custom max-w-4xl">
        <div className="text-center space-y-8">
          {/* Tout est centré */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="gradient-text">TALBI El Mouatassem</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
            Ingénieur matériaux et procédés aéronautiques
          </p>

          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            {t("about.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-10">
            <Button onClick={scrollToContact} size="lg" className="shadow-soft text-lg px-10">
              {t("about.cta")}
            </Button>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
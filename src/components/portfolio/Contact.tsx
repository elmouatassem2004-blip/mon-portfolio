import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Titre identique aux autres sections */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            {t("contact.title") || "Contact"}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle") || "N’hésite pas à me contacter pour toute opportunité ou question"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coordonnées (colonne gauche) */}
          <div className="space-y-6">
            <Card className="p-7 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t("contact.location") || "Localisation"}</h3>
                  <p className="text-muted-foreground mt-1">Pau, France</p>
                </div>
              </div>
            </Card>

            <Card className="p-7 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t("contact.email") || "Email"}</h3>
                  <p className="text-muted-foreground mt-1 break-all">elmouatassem2004@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-7 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{t("contact.phone") || "Téléphone"}</h3>
                  <p className="text-muted-foreground mt-1">+33 6 21 07 82 05</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulaire (2 colonnes à droite) */}
          <Card className="lg:col-span-2 p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <Label htmlFor="name" className="text-base font-semibold">
                  {t("contact.name") || "Nom"}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12"
                  placeholder="Ton nom"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-semibold">
                  {t("contact.email") || "Email"}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12"
                  placeholder="ton.email@exemple.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base font-semibold">
                  {t("contact.message") || "Message"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="mt-2 resize-none"
                  placeholder="Écris-moi quelque chose..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg h-14 shadow-soft">
                {t("contact.send") || "Envoyer le message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
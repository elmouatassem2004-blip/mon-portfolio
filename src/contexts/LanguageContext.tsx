import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.interests": "Centres d'intérêt",
    "nav.contact": "Contact",

    // About
    "about.description": "Actuellement étudiant en 2ème année de CPGE TSI (classé dans les 2 premiers), j'ai été admis à l'IMT Mines Albi en filière Ingénieur Généraliste. Option ciblée: Matériaux et procédés avancés pour l'Aéronautique et l'Aérospatial. Je recherche un contrat d'apprentissage de 3 ans pour mettre ma rigueur scientifique et mon approche de la qualité des matériaux et process aéronautiques au service de la performance, de l'allègement ou de la décarbonation.",
    "about.cta": "Me contacter",

    // Skills
    "skills.title": "Compétences",
    "skills.languages": "Langues",
    "skills.technical": "Compétences techniques",
    "skills.certifications": "Certifications",

    // Education
    "education.title": "Analyse des défaillances matériaux et composants",

    // Experience
    "experience.title": "Expériences professionnelles",

    // Projects
    "projects.title": "Projets GitHub",
    "projects.view": "Voir le projet",

    // Interests
    "interests.title": "Activités & Centres d'intérêt",

    // Contact
    "contact.title": "Me contacter",
    "contact.subtitle": "N'hésitez pas à me contacter pour toute opportunité ou question",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer",
    "contact.location": "Localisation",
    "contact.phone": "Téléphone",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.interests": "Interests",
    "nav.contact": "Contact",

    "about.description": "Currently a 2nd year student in CPGE TSI (ranked in the top 2), I have been admitted to IMT Mines Albi in the General Engineering program. Targeted option: Advanced Materials and Processes for Aeronautics and Aerospace. I am looking for a 3-year apprenticeship contract to put my scientific rigor and approach to the quality of aeronautical materials and processes at the service of performance, weight reduction or decarbonization.",
    "about.cta": "Contact Me",

    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.technical": "Technical Skills",
    "skills.certifications": "Certifications",

    "education.title": "Education",

    "experience.title": "Professional Experience",

    "projects.title": "GitHub Projects",
    "projects.view": "View Project",

    "interests.title": "Activities & Interests",

    "contact.title": "Contact Me",
    "contact.subtitle": "Feel free to reach out for any opportunity or question",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send",
    "contact.location": "Location",
    "contact.phone": "Phone",
  },
  es: {
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.education": "Formación",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.interests": "Intereses",
    "nav.contact": "Contacto",

    "about.description": "Actualmente estudiante de 2º año de CPGE TSI (clasificado entre los 2 primeros), he sido admitido en IMT Mines Albi en la carrera de Ingeniería General. Opción específica: Materiales y procesos avanzados para la Aeronáutica y el Aeroespacial. Busco un contrato de aprendizaje de 3 años para poner mi rigor científico y mi enfoque de la calidad de los materiales y procesos aeronáuticos al servicio del rendimiento, la reducción de peso o la descarbonización.",
    "about.cta": "Contáctame",

    "skills.title": "Habilidades",
    "skills.languages": "Idiomas",
    "skills.technical": "Habilidades técnicas",
    "skills.certifications": "Certificaciones",

    "education.title": "Formación",

    "experience.title": "Experiencia profesional",

    "projects.title": "Proyectos GitHub",
    "projects.view": "Ver proyecto",

    "interests.title": "Actividades e Intereses",

    "contact.title": "Contáctame",
    "contact.subtitle": "No dudes en contactarme para cualquier oportunidad o pregunta",
    "contact.name": "Nombre",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",
    "contact.location": "Ubicación",
    "contact.phone": "Teléfono",
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

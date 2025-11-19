import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/portfolio/Header";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Interests } from "@/components/portfolio/Interests";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <main className="pt-16">
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Interests />
            <Contact />
          </main>
          <footer className="bg-card border-t border-border py-8">
            <div className="container-custom px-4 text-center text-muted-foreground">
              <p>© 2025 Mota.</p>
            </div>
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;

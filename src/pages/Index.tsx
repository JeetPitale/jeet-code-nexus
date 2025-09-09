import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { TerminalWidget } from "@/components/TerminalWidget";

const Index = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    // Add cyberpunk grid pattern to body
    document.body.classList.add('cyber-grid');
    return () => document.body.classList.remove('cyber-grid');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main className="relative">
        <HeroSection />
        
        <section id="about" className="py-20">
          <AboutSection />
        </section>
        
        <section id="projects" className="py-20">
          <ProjectsSection />
        </section>
        
        <section id="skills" className="py-20">
          <SkillsSection />
        </section>
        
        <section id="achievements" className="py-20">
          <AchievementsSection />
        </section>
        
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>

      {/* Terminal Widget Toggle */}
      <button
        onClick={() => setShowTerminal(!showTerminal)}
        className="fixed bottom-6 right-6 z-40 bg-terminal-green text-background px-4 py-2 rounded-lg font-mono text-sm glow-border hover:scale-105 transition-transform"
      >
        {showTerminal ? "close_terminal()" : "open_terminal()"}
      </button>

      {/* Terminal Widget */}
      {showTerminal && (
        <TerminalWidget onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
};

export default Index;
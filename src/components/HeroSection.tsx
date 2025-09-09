import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Jeet Pitale";
  const tagline = "Cybersecurity Enthusiast | Backend Developer | Creative Mind";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="cyber-grid h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Terminal Header */}
        <div className="mb-8 inline-block">
          <div className="code-block p-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-4">
                terminal@cybersec:~$
              </span>
            </div>
            
            <div className="text-left font-mono text-sm">
              <div className="text-terminal-green">
                <span className="animate-blink">&gt;</span> whoami
              </div>
              <div className="mt-2 text-foreground">
                Loading profile...
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-cyber font-black">
            <span 
              className="glitch-effect glow-text gradient-cyber"
              data-text={displayText}
            >
              {displayText}
            </span>
            <span className="terminal-cursor text-terminal-green"></span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-mono max-w-3xl mx-auto">
            <span className="text-terminal-blue">[</span>
            {tagline}
            <span className="text-terminal-blue">]</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-mono text-lg px-8 py-3 glow-border group"
            >
              <Terminal className="mr-2 h-5 w-5" />
              <span className="text-background">./view_my_work</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">--execute</span>
            </Button>
            
            <div className="font-mono text-sm text-terminal-green">
              <span className="animate-blink">|</span> Ready to hack the future
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 opacity-20 font-mono text-xs text-terminal-green animate-pulse hidden lg:block">
        import security from 'cybersec'
      </div>
      <div className="absolute top-40 right-10 opacity-20 font-mono text-xs text-terminal-blue animate-pulse hidden lg:block">
        def secure_system():
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 font-mono text-xs text-accent animate-pulse hidden lg:block">
        &lt;/creative_solutions&gt;
      </div>
    </section>
  );
};
import { Code, Shield, Lightbulb, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
            <span className="text-terminal-green">$</span> cat about_jeet.md
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="code-block p-6">
              <div className="font-mono text-sm mb-4">
                <span className="text-terminal-green">class</span>{" "}
                <span className="text-terminal-blue">JeetPitale</span>
                <span className="text-foreground">:</span>
              </div>
              
              <div className="pl-4 space-y-3 text-sm font-mono">
                <div>
                  <span className="text-terminal-purple">def</span>{" "}
                  <span className="text-terminal-cyan">__init__</span>
                  <span className="text-foreground">(self):</span>
                </div>
                
                <div className="pl-4 space-y-2">
                  <div>
                    <span className="text-foreground">self.education = </span>
                    <span className="text-terminal-green">"Integrated MCA Student"</span>
                  </div>
                  <div>
                    <span className="text-foreground">self.passion = </span>
                    <span className="text-terminal-green">"Cybersecurity & Backend Dev"</span>
                  </div>
                  <div>
                    <span className="text-foreground">self.mindset = </span>
                    <span className="text-terminal-green">"Creative Problem Solver"</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground font-mono text-lg leading-relaxed">
              Currently pursuing my Integrated MCA, I'm passionate about building secure, scalable backend systems. 
              My journey combines deep cybersecurity knowledge with creative problem-solving, focusing on 
              developing robust solutions that protect and empower users.
            </p>

            <p className="text-muted-foreground font-mono leading-relaxed">
              When I'm not debugging code or exploring security vulnerabilities, you'll find me sketching creative 
              solutions and mentoring peers through collaborative learning sessions.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                description: "Integrated MCA student with focus on advanced computer applications"
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Specialized in cybersecurity, cryptography, and penetration testing"
              },
              {
                icon: Code,
                title: "Backend Mastery",
                description: "Expert in building scalable APIs, databases, and server architectures"
              },
              {
                icon: Lightbulb,
                title: "Creative Solutions",
                description: "Innovative approach to complex technical challenges"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="code-block p-4 hover:border-primary/50 transition-all duration-300 group hover:glow-border"
              >
                <div className="flex items-start gap-3">
                  <item.icon className="h-6 w-6 text-primary mt-1 group-hover:text-terminal-green transition-colors" />
                  <div>
                    <h3 className="font-mono font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
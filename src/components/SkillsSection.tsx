import { useState } from "react";
import { Code, Shield, Database, Wrench, Server, Lock } from "lucide-react";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90, color: "terminal-green" },
        { name: "Java", level: 85, color: "terminal-blue" },
        { name: "PHP", level: 80, color: "accent" },
        { name: "SQL", level: 88, color: "terminal-purple" },
        { name: "JavaScript", level: 82, color: "primary" },
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: Server,
      skills: [
        { name: "React", level: 85, color: "terminal-blue" },
        { name: "Node.js", level: 80, color: "terminal-green" },
        { name: "Tailwind CSS", level: 90, color: "accent" },
        { name: "Firebase", level: 85, color: "terminal-purple" },
        { name: "Express.js", level: 78, color: "primary" },
      ]
    },
    security: {
      title: "Cybersecurity & Security",
      icon: Shield,
      skills: [
        { name: "Cryptography", level: 85, color: "terminal-green" },
        { name: "OWASP Concepts", level: 88, color: "terminal-blue" },
        { name: "Penetration Testing", level: 75, color: "accent" },
        { name: "Secure Authentication", level: 90, color: "terminal-purple" },
        { name: "Network Security", level: 80, color: "primary" },
      ]
    },
    tools: {
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", level: 90, color: "terminal-green" },
        { name: "Docker", level: 75, color: "terminal-blue" },
        { name: "Xcode", level: 70, color: "accent" },
        { name: "VS Code", level: 95, color: "terminal-purple" },
        { name: "Postman", level: 85, color: "primary" },
      ]
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
          <span className="text-terminal-green">$</span> cat tech_stack.json
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
        <p className="text-muted-foreground font-mono">
          <span className="text-terminal-cyan">// Comprehensive backend and security expertise</span>
        </p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => {
          const IconComponent = category.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`code-block p-4 flex items-center gap-3 hover:border-primary/50 transition-all duration-300 ${
                activeCategory === key ? 'border-primary glow-border' : ''
              }`}
            >
              <IconComponent className={`h-5 w-5 ${
                activeCategory === key ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <span className={`font-mono ${
                activeCategory === key ? 'text-primary' : 'text-foreground'
              }`}>
                {category.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Display */}
      <div className="max-w-4xl mx-auto">
        <div className="code-block p-8">
          <div className="mb-6">
            <h3 className="font-cyber text-2xl text-primary mb-2">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">const</span>{" "}
              <span className="text-terminal-blue">expertise</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-terminal-green">loadSkills</span>
              <span className="text-foreground">({activeCategory});</span>
            </div>
          </div>

          <div className="space-y-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-foreground">{skill.name}</span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-${skill.color}/50 animate-pulse`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Output Style */}
          <div className="mt-8 p-4 bg-muted/30 rounded border border-border">
            <div className="font-mono text-xs text-terminal-green">
              <div className="mb-1">
                <span className="text-muted-foreground">&gt;</span> skills.compile()
              </div>
              <div className="text-muted-foreground">
                Successfully loaded {skillCategories[activeCategory as keyof typeof skillCategories].skills.length} skills...
              </div>
              <div className="text-terminal-cyan">
                Ready for deployment 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
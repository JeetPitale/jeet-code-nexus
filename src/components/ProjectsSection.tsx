import { useState } from "react";
import { ExternalLink, Github, Code, Leaf, Brain, Bot, Recycle, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "GreenGo Crop Helper",
      description: "Digital agriculture tool providing real-time data and insights for farmers to optimize crop yield and sustainability.",
      tech: ["Python", "React", "Firebase", "IoT Sensors"],
      icon: Leaf,
      color: "terminal-green",
      codeSnippet: "def optimize_crop_yield(sensor_data):\n  return ai_analysis(soil, weather, irrigation)"
    },
    {
      title: "Exam Whisperer",
      description: "Gamified AI-powered study assistant that adapts to learning patterns and provides personalized study recommendations.",
      tech: ["Python", "Machine Learning", "React", "PostgreSQL"],
      icon: Brain,
      color: "terminal-blue",
      codeSnippet: "class StudyAI:\n  def personalize_learning(self, user_data):\n    return adaptive_algorithm(progress, strengths)"
    },
    {
      title: "Jarvis AI Assistant",
      description: "Python-based automation assistant with multitasking capabilities, voice recognition, and smart home integration.",
      tech: ["Python", "NLP", "Speech Recognition", "APIs"],
      icon: Bot,
      color: "accent",
      codeSnippet: "async def process_command(voice_input):\n  task = parse_intent(voice_input)\n  await execute_automation(task)"
    },
    {
      title: "SwapCircle",
      description: "Sustainable fashion platform developed during hackathon, promoting circular economy through clothing exchange.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      icon: Recycle,
      color: "terminal-purple",
      codeSnippet: "const sustainabilityScore = calculateImpact({\n  itemsSwapped, carbonSaved, wastereduced\n})"
    },
    {
      title: "Backend Security Suite",
      description: "Collection of secure authentication systems, encrypted APIs, and database security implementations.",
      tech: ["PHP", "JWT", "Cryptography", "SQL Security"],
      icon: Database,
      color: "primary",
      codeSnippet: "function secure_auth($credentials) {\n  return hash_password($pwd) + jwt_token() + rate_limit()\n}"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
          <span className="text-terminal-green">$</span> ls -la ./projects/
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
        <p className="text-muted-foreground font-mono">
          <span className="text-terminal-cyan">// Showcasing innovative solutions and secure implementations</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <Card
              key={index}
              className="code-block hover:border-primary/50 transition-all duration-300 group hover:glow-border relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <IconComponent className={`h-8 w-8 text-${project.color}`} />
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="font-cyber text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Code Preview - Shows on Hover */}
                {hoveredProject === index && (
                  <div className="mb-4 p-3 bg-muted/30 rounded border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-terminal-green" />
                      <span className="font-mono text-xs text-muted-foreground">preview.code</span>
                    </div>
                    <pre className="font-mono text-xs text-terminal-green overflow-x-auto">
                      {project.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted/50 text-xs font-mono rounded border border-border hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              {/* Glitch Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </Card>
          );
        })}
      </div>

      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <Button className="font-mono bg-primary hover:bg-primary/80 glow-border">
          <Github className="mr-2 h-5 w-5" />
          ./explore_all_repositories
        </Button>
      </div>
    </div>
  );
};
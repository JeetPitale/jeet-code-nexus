import { Trophy, Users, Book, Award, Zap, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Participation",
      description: "Active participant in multiple hackathons, developing innovative solutions under pressure",
      details: "SwapCircle project - Sustainable fashion platform",
      color: "terminal-green",
      type: "competition"
    },
    {
      icon: Users,
      title: "Peer Learning Workshops",
      description: "Conducted collaborative learning sessions, mentoring fellow students in programming concepts",
      details: "Focused on backend development and security best practices",
      color: "terminal-blue",
      type: "teaching"
    },
    {
      icon: Book,
      title: "Cybersecurity Learning Path",
      description: "Comprehensive study of security protocols, encryption methods, and ethical hacking techniques",
      details: "OWASP Top 10, penetration testing, cryptography",
      color: "accent",
      type: "learning"
    },
    {
      icon: Award,
      title: "Project Innovation",
      description: "Developed multiple full-stack projects with real-world applications and user impact",
      details: "GreenGo, Exam Whisperer, Jarvis AI Assistant",
      color: "terminal-purple",
      type: "development"
    },
    {
      icon: Zap,
      title: "Technical Leadership",
      description: "Led development teams in academic projects, implementing agile methodologies",
      details: "Code reviews, architecture decisions, team coordination",
      color: "primary",
      type: "leadership"
    },
    {
      icon: Target,
      title: "Problem Solving Excellence",
      description: "Recognized for creative approach to complex technical challenges and optimization solutions",
      details: "Algorithm optimization, system architecture, security implementations",
      color: "terminal-cyan",
      type: "excellence"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+", color: "terminal-green" },
    { label: "Hackathons Participated", value: "5+", color: "terminal-blue" },
    { label: "Students Mentored", value: "30+", color: "accent" },
    { label: "Learning Hours", value: "500+", color: "terminal-purple" },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
          <span className="text-terminal-green">$</span> git log --achievements
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
        <p className="text-muted-foreground font-mono">
          <span className="text-terminal-cyan">// Track record of innovation and leadership</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="code-block p-6 text-center group hover:border-primary/50 transition-all duration-300">
            <div className={`text-3xl font-cyber font-bold text-${stat.color} mb-2 group-hover:glow-text`}>
              {stat.value}
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card
              key={index}
              className="code-block hover:border-primary/50 transition-all duration-300 group hover:glow-border"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-${achievement.color}/10 border border-${achievement.color}/20`}>
                    <IconComponent className={`h-6 w-6 text-${achievement.color}`} />
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-mono bg-${achievement.color}/10 text-${achievement.color}`}>
                    {achievement.type}
                  </div>
                </div>
                <CardTitle className="font-cyber text-lg group-hover:text-primary transition-colors">
                  {achievement.title}
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  {achievement.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="p-3 bg-muted/30 rounded border border-border">
                  <div className="font-mono text-xs text-muted-foreground mb-1">
                    <span className="text-terminal-green">&gt;</span> details:
                  </div>
                  <div className="font-mono text-sm text-foreground">
                    {achievement.details}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Experience Timeline */}
      <div className="mt-16">
        <h3 className="text-2xl font-cyber font-bold text-center mb-8">
          <span className="text-terminal-green">$</span> timeline --experience
        </h3>
        
        <div className="code-block p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  period: "2024 - Present",
                  title: "Integrated MCA Student",
                  description: "Focusing on advanced cybersecurity concepts and backend development",
                  tech: ["Python", "Cybersecurity", "System Design"]
                },
                {
                  period: "2023 - 2024",
                  title: "Full-Stack Development",
                  description: "Built multiple projects including AI assistants and sustainable platforms",
                  tech: ["React", "Node.js", "Machine Learning", "APIs"]
                },
                {
                  period: "2022 - 2023",
                  title: "Programming Foundation",
                  description: "Mastered core programming concepts and started cybersecurity journey",
                  tech: ["Java", "PHP", "Database Design", "Security Basics"]
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="text-terminal-green font-mono text-sm whitespace-nowrap">
                    [{item.period}]
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cyber text-lg text-foreground mb-2">{item.title}</h4>
                    <p className="font-mono text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted/50 text-xs font-mono rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
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
import { useState } from "react";
import { Send, Github, Linkedin, Instagram, Mail, Terminal, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast("Message transmitted successfully! 📡", {
        description: "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      handle: "@jeetpitale",
      color: "terminal-green"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com",
      handle: "/in/jeetpitale",
      color: "terminal-blue"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/sketchingcode",
      handle: "@sketchingcode",
      color: "accent"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jeet.pitale@example.com",
      handle: "jeet.pitale@example.com",
      color: "terminal-purple"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
          <span className="text-terminal-green">$</span> ./connect --establish-link
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
        <p className="text-muted-foreground font-mono">
          <span className="text-terminal-cyan">// Ready to collaborate on innovative projects</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Terminal-Style Contact Form */}
        <div className="code-block p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              </div>
              <span className="font-mono text-xs text-muted-foreground ml-4">
                contact@terminal:~$
              </span>
            </div>
            
            <h3 className="font-cyber text-xl text-primary mb-2">Send Message</h3>
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-terminal-green">const</span>{" "}
              <span className="text-terminal-blue">message</span>{" "}
              <span className="text-foreground">=</span>{" "}
              <span className="text-terminal-green">new</span>{" "}
              <span className="text-terminal-blue">Collaboration</span>
              <span className="text-foreground">();</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-mono text-sm text-muted-foreground mb-2">
                <span className="text-terminal-green">&gt;</span> name:
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="bg-muted/30 border-border font-mono focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-muted-foreground mb-2">
                <span className="text-terminal-green">&gt;</span> email:
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="bg-muted/30 border-border font-mono focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block font-mono text-sm text-muted-foreground mb-2">
                <span className="text-terminal-green">&gt;</span> message:
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Let's discuss your project ideas..."
                rows={6}
                className="bg-muted/30 border-border font-mono focus:border-primary resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/80 font-mono glow-border group"
            >
              {isSubmitting ? (
                <>
                  <Terminal className="mr-2 h-5 w-5 animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  ./send_message --execute
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted/30 rounded border border-border">
            <div className="font-mono text-xs text-terminal-green">
              <div className="mb-1">
                <span className="text-muted-foreground">&gt;</span> status: ready_to_connect
              </div>
              <div className="text-muted-foreground">
                Response time: &lt; 24 hours
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Info */}
        <div className="space-y-8">
          {/* Social Links */}
          <div className="code-block p-8">
            <h3 className="font-cyber text-xl text-primary mb-6">Social Networks</h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-muted/30 rounded border border-border hover:border-primary/50 transition-all duration-300 group hover:glow-border"
                  >
                    <IconComponent className={`h-6 w-6 text-${link.color} group-hover:text-primary transition-colors`} />
                    <div>
                      <div className="font-mono font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </div>
                      <div className="font-mono text-sm text-muted-foreground">
                        {link.handle}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Location & Availability */}
          <div className="code-block p-8">
            <h3 className="font-cyber text-xl text-primary mb-6">Current Status</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-terminal-green" />
                <div>
                  <div className="font-mono text-foreground">Location</div>
                  <div className="font-mono text-sm text-muted-foreground">Available for remote collaboration</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-terminal-green animate-pulse"></div>
                <div>
                  <div className="font-mono text-foreground">Status: Online</div>
                  <div className="font-mono text-sm text-muted-foreground">Open to new opportunities</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded border border-border">
              <div className="font-mono text-xs">
                <div className="text-terminal-green mb-2">
                  // Interested in:
                </div>
                <div className="text-muted-foreground space-y-1">
                  <div>• Backend Development Projects</div>
                  <div>• Cybersecurity Consulting</div>
                  <div>• Hackathon Collaborations</div>
                  <div>• Open Source Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
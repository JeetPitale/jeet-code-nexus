import { useState, useEffect, useRef } from "react";
import { X, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TerminalEntry {
  type: 'command' | 'output' | 'error';
  content: string;
}

export const TerminalWidget = ({ onClose }: { onClose: () => void }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([
    { type: 'output', content: 'Jeet Pitale Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => TerminalEntry[]> = {
    help: () => [
      { type: 'output', content: 'Available commands:' },
      { type: 'output', content: '  about     - Learn about Jeet' },
      { type: 'output', content: '  projects  - View project list' },
      { type: 'output', content: '  skills    - Technical expertise' },
      { type: 'output', content: '  contact   - Get in touch' },
      { type: 'output', content: '  clear     - Clear terminal' },
      { type: 'output', content: '  whoami    - Current user info' },
      { type: 'output', content: '' }
    ],
    
    about: () => [
      { type: 'output', content: 'Jeet Pitale - Cybersecurity Enthusiast & Backend Developer' },
      { type: 'output', content: 'Current: Integrated MCA Student' },
      { type: 'output', content: 'Focus: Secure systems, backend solutions, creative problem-solving' },
      { type: 'output', content: '' }
    ],

    projects: () => [
      { type: 'output', content: 'Recent Projects:' },
      { type: 'output', content: '  1. GreenGo Crop Helper - Agriculture IoT platform' },
      { type: 'output', content: '  2. Exam Whisperer - AI study assistant' },
      { type: 'output', content: '  3. Jarvis AI Assistant - Python automation' },
      { type: 'output', content: '  4. SwapCircle - Sustainable fashion platform' },
      { type: 'output', content: '  5. Backend Security Suite - Auth systems' },
      { type: 'output', content: '' }
    ],

    skills: () => [
      { type: 'output', content: 'Technical Skills:' },
      { type: 'output', content: '  Languages: Python, Java, PHP, SQL, JavaScript' },
      { type: 'output', content: '  Frameworks: React, Node.js, Tailwind, Firebase' },
      { type: 'output', content: '  Security: Cryptography, OWASP, Penetration Testing' },
      { type: 'output', content: '  Tools: Git, Docker, Xcode' },
      { type: 'output', content: '' }
    ],

    contact: () => [
      { type: 'output', content: 'Contact Information:' },
      { type: 'output', content: '  Email: jeet.pitale@example.com' },
      { type: 'output', content: '  GitHub: @jeetpitale' },
      { type: 'output', content: '  LinkedIn: /in/jeetpitale' },
      { type: 'output', content: '  Instagram: @sketchingcode' },
      { type: 'output', content: '' }
    ],

    whoami: () => [
      { type: 'output', content: 'jeet_pitale@cybersec_terminal' },
      { type: 'output', content: 'Role: Cybersecurity Enthusiast | Backend Developer' },
      { type: 'output', content: 'Status: Ready to hack the future 🚀' },
      { type: 'output', content: '' }
    ],

    clear: () => []
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
    
    if (trimmedCmd === 'clear') {
      setHistory([
        { type: 'output', content: 'Terminal cleared.' },
        { type: 'output', content: '' }
      ]);
    } else if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      setHistory(prev => [...prev, ...output]);
    } else if (trimmedCmd === '') {
      setHistory(prev => [...prev, { type: 'output', content: '' }]);
    } else {
      setHistory(prev => [...prev, 
        { type: 'error', content: `Command not found: ${cmd}` },
        { type: 'output', content: 'Type "help" for available commands.' },
        { type: 'output', content: '' }
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      executeCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="fixed bottom-6 right-6 w-96 h-96 z-50">
      <div className="code-block h-full flex flex-col glow-border">
        {/* Terminal Header */}
        <div className="flex items-center justify-between p-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-terminal-green" />
            <span className="font-mono text-sm text-foreground">Terminal</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-6 w-6 hover:bg-destructive/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Terminal Output */}
        <div 
          ref={outputRef}
          className="flex-1 p-3 overflow-y-auto font-mono text-sm space-y-1"
        >
          {history.map((entry, index) => (
            <div 
              key={index}
              className={`
                ${entry.type === 'command' ? 'text-terminal-green' : ''}
                ${entry.type === 'error' ? 'text-destructive' : ''}
                ${entry.type === 'output' ? 'text-muted-foreground' : ''}
              `}
            >
              {entry.content}
            </div>
          ))}
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-terminal-green">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-foreground placeholder-muted-foreground"
              placeholder="Type a command..."
              autoComplete="off"
            />
            <span className="animate-blink text-terminal-green">|</span>
          </div>
        </form>
      </div>
    </div>
  );
};
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";
import { motion, AnimatePresence } from "motion/react";
import { X, Terminal as TerminalIcon } from "lucide-react";

type Log = { id: string; type: "input" | "output" | "error"; text: string | React.ReactNode };

const fileSystem: Record<string, string> = {
  "skills.txt": "Systems Programming, CPU Architecture, React/Next.js, Python, Rust, C\n",
  "about.txt": "Nolan Idle\n15yo Developer & Problem Solver\nMinneapolis, MN\n",
  "contact.txt": "Email: nolan@example.com\nGitHub: @nolanidle\n"
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [logs, setLogs] = useState<Log[]>([
    { id: "0", type: "output", text: "NOLAN OS v0.9.1. Type 'help' for a list of available commands." }
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useKeyboardShortcut("`", true, () => setIsOpen((prev) => !prev)); // Ctrl + ~ 
  useKeyboardShortcut("Backquote", true, () => setIsOpen((prev) => !prev)); 

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputTitle.trim()) return;
    
    const cmd = inputTitle.trim();
    const args = cmd.split(" ");
    const baseCmd = args[0].toLowerCase();

    setLogs((prev) => [...prev, { id: Date.now().toString() + "in", type: "input", text: cmd }]);
    setInputTitle("");

    setTimeout(() => {
      let output: React.ReactNode | string = "";
      let type: "output" | "error" = "output";

      switch (baseCmd) {
        case "help":
          output = "Available commands:\n  help    - Show this message\n  clear   - Clear terminal\n  whoami  - Print current user identity\n  ls      - List directory contents\n  cat     - Read file content\n  run     - Execute a binary";
          break;
        case "clear":
          setLogs([]);
          return;
        case "whoami":
          output = "guest_user@nolan-port";
          break;
        case "ls":
          output = Object.keys(fileSystem).join("  ");
          break;
        case "cat":
          if (args.length < 2) {
             type = "error";
             output = "Usage: cat <filename>";
          } else if (fileSystem[args[1]]) {
             output = fileSystem[args[1]];
          } else {
             type = "error";
             output = `cat: ${args[1]}: No such file or directory`;
          }
          break;
        case "run":
          if (args.length < 2) {
             type = "error";
             output = "Usage: run <binary>";
          } else if (args[1] === "bulletproof") {
             output = (
                <div className="text-accent">
                   [INIT] Booting BulletPROOF kernel...<br/>
                   [OK] Lexical analyzer loaded.<br/>
                   [OK] Fast query index built.<br/>
                   [OK] Neural heuristics initialized.<br/>
                   Ready.
                </div>
             );
          } else {
             type = "error";
             output = `run: ${args[1]}: Command not found`;
          }
          break;
        default:
          type = "error";
          output = `Command not found: ${baseCmd}`;
      }

      setLogs((prev) => [...prev, { id: Date.now().toString() + "out", type, text: output }]);
    }, 150);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9000] p-4 bg-ink text-paper rounded-full shadow-2xl hover:bg-accent transition-colors hover-lift"
        title="Open Terminal (Ctrl + ~)"
      >
        <TerminalIcon size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 md:bottom-6 right-6 z-[99999] w-[90vw] md:w-[600px] h-[400px] bg-[#0F172A] backdrop-blur-md border border-border/20 shadow-2xl flex flex-col font-mono text-sm overflow-hidden text-ink"
          >
            {/* Top Bar */}
            <div className="bg-[#0B1120] border-b border-border/20 p-3 flex justify-between items-center select-none text-white">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-muted text-xs mx-auto absolute left-1/2 -translate-x-1/2">guest@nolan-port ~</div>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-white"><X size={14} /></button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto text-white" onClick={() => inputRef.current?.focus()}>
              {logs.map((log) => (
                <div key={log.id} className="mb-2 whitespace-pre-wrap">
                  {log.type === "input" ? (
                    <div className="flex gap-2 text-white font-bold">
                       <span className="text-accent">guest@nolan:~$</span> {log.text}
                    </div>
                  ) : (
                    <div className={log.type === "error" ? "text-red-400" : "text-white/80"}>
                      {log.text}
                    </div>
                  )}
                </div>
              ))}
              <form onSubmit={handleCommand} className="flex gap-2 mt-2 text-white font-bold">
                 <span className="text-accent shrink-0">guest@nolan:~$</span>
                 <input
                   ref={inputRef}
                   type="text"
                   value={inputTitle}
                   onChange={(e) => setInputTitle(e.target.value)}
                   className="flex-1 bg-transparent outline-none border-none focus:ring-0 p-0 text-white font-bold"
                   spellCheck="false"
                   autoComplete="off"
                 />
              </form>
              <div ref={endRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

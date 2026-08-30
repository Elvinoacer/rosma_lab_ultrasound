"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import MarkdownMessage from "./MarkdownMessage";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "How do I prepare for an ultrasound?",
  "Where are you located?",
  "What laboratory tests do you offer?",
  "Do I need an appointment?",
];

const welcome: Message = {
  role: "assistant",
  content: "Hi — I’m **Rosma Assistant**. I can help with ultrasound preparation, laboratory services, opening hours, directions, and booking.\n\nWhat would you like to know?",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  async function sendMessage(value = input) {
    const content = value.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to respond");
      setMessages((current) => [...current, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "I’m sorry, I couldn’t reach the assistant just now. Please try again, or [contact Rosma](mailto:hello@rosmalab.co.ke)." },
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void sendMessage();
  }

  return (
    <>
      {open && <button aria-label="Close Rosma Assistant" className="fixed inset-0 z-[59] bg-black/35 backdrop-blur-[2px] lg:bg-transparent lg:backdrop-blur-0" onClick={() => setOpen(false)} />}

      <section className={`fixed z-[60] transition-all duration-300 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"} inset-x-3 bottom-24 sm:left-auto sm:right-5 sm:w-[410px] lg:right-6 lg:bottom-24`} aria-hidden={!open}>
        <div className="flex max-h-[min(720px,calc(100dvh-7.5rem))] flex-col overflow-hidden rounded-[1.65rem] border border-white/15 bg-[#10252a]/[.97] shadow-[0_30px_100px_rgba(0,0,0,.4)] backdrop-blur-2xl">
          <header className="flex items-center gap-3 border-b border-white/10 bg-[#14333a] px-4 py-3.5 sm:px-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#d2652e] text-white shadow-lg shadow-[#d2652e]/20">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 4v-4h-1A2.5 2.5 0 0 1 4 13.5z"/><path d="M8 9h8M8 12h5"/></svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2"><h2 className="text-sm font-semibold text-white">Rosma Assistant</h2><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-label="Online" /></div>
              <p className="mt-0.5 text-xs text-bone/55">Ultrasound, lab & visit guidance</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-xl p-2 text-bone/55 transition hover:bg-white/10 hover:text-white" aria-label="Close assistant">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18"/></svg>
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-3.5 py-4 sm:px-4" role="log" aria-live="polite">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={message.role === "user" ? "max-w-[86%] rounded-2xl rounded-br-md bg-[#d2652e] px-3.5 py-2.5 text-white shadow-lg shadow-black/10" : "max-w-[91%] rounded-2xl rounded-bl-md border border-white/8 bg-white/[.055] px-3.5 py-2.5 text-bone/80"}>
                    {message.role === "user" ? <p className="whitespace-pre-wrap text-[0.92rem] leading-relaxed">{message.content}</p> : <MarkdownMessage content={message.content} />}
                  </div>
                </div>
              ))}
              {loading && <div className="flex justify-start"><div className="rounded-2xl rounded-bl-md border border-white/8 bg-white/[.055] px-4 py-3"><div className="flex gap-1.5" aria-label="Assistant is typing"><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sand [animation-delay:-.2s]"/><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sand [animation-delay:-.1s]"/><span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sand"/></div></div></div>}
              <div ref={endRef} />
            </div>

            {messages.length === 1 && !loading && <div className="mt-4 grid gap-2"><p className="px-1 text-[10px] font-semibold uppercase tracking-[.18em] text-bone/35">Try asking</p>{suggestions.map((suggestion) => <button key={suggestion} onClick={() => void sendMessage(suggestion)} className="rounded-xl border border-white/10 bg-white/[.035] px-3 py-2.5 text-left text-xs text-bone/70 transition hover:border-sand/30 hover:bg-white/[.07] hover:text-white">{suggestion}</button>)}</div>}
          </div>

          <footer className="border-t border-white/10 bg-[#0d2227] p-3">
            <form onSubmit={submit} className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[.055] p-1.5 focus-within:border-sand/35">
              <label className="sr-only" htmlFor="rosma-chat-input">Ask Rosma Assistant</label>
              <input ref={inputRef} id="rosma-chat-input" value={input} onChange={(e) => setInput(e.target.value)} disabled={loading} placeholder="Ask about a scan, test or visit…" className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-sm text-white placeholder:text-bone/30 focus:outline-none" />
              <button type="submit" disabled={!input.trim() || loading} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d2652e] text-white transition hover:bg-[#b85424] disabled:cursor-not-allowed disabled:opacity-35" aria-label="Send message"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 14-7-4 14-3-6z"/><path d="m12 13 7-8"/></svg></button>
            </form>
            <div className="mt-2 flex items-center justify-between px-1"><p className="text-[10px] text-bone/30">Information only · not a medical diagnosis</p><Link href="/book" onClick={() => setOpen(false)} className="text-[10px] font-medium text-sand hover:text-white">Book a visit →</Link></div>
          </footer>
        </div>
      </section>

      <button onClick={() => setOpen((value) => !value)} className={`fixed bottom-5 right-4 z-[61] flex items-center gap-2.5 rounded-full border border-white/15 bg-[#123239]/95 px-4 py-3 text-sm font-medium text-white shadow-[0_14px_45px_rgba(0,0,0,.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#174049] sm:right-5 lg:right-6 ${open ? "scale-95" : ""}`} aria-expanded={open} aria-controls="rosma-chat-input">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#d2652e] text-white"><span className="absolute inset-0 animate-ping rounded-full bg-[#d2652e]/25"/><svg className="relative" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H12l-4.5 4v-4h-1A2.5 2.5 0 0 1 4 13.5z"/></svg></span><span className="hidden sm:inline">Ask Rosma</span>
      </button>
    </>
  );
}

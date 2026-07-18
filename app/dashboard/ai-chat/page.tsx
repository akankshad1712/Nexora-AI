"use client";

import { useState, useRef, useEffect } from "react";
import { IconSend, IconRobot, IconUser } from "@tabler/icons-react";

interface Message {
  role: "user" | "ai";
  text: string;
}

export default function AiChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hello Akanksha 👋 How can I help your business today?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Placeholder AI response — will connect to real backend later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "This is a placeholder response. Once connected to the AI service, I'll answer questions about your sales, inventory, and customers in real time.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <div className="border-b border-white/10 px-6 py-4">
        <h1 className="text-lg font-semibold">AI Business Assistant</h1>
        <p className="text-xs text-gray-500">Ask anything about your business</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                msg.role === "ai"
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-white/10"
              }`}
            >
              {msg.role === "ai" ? <IconRobot size={16} /> : <IconUser size={16} />}
            </div>

            <div
              className={`max-w-md rounded-2xl px-4 py-3 text-sm ${
                msg.role === "ai"
                  ? "bg-white/[0.05] text-gray-200"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-600"
          />
          <button
            onClick={handleSend}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 transition hover:opacity-90"
          >
            <IconSend size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
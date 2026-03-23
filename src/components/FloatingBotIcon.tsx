"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Maximize2, Minimize2 } from "lucide-react";
import { sendToN8n } from "@/lib/n8n";

const FloatingBotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<{ role: string; text: string }[]>([
    { role: "bot", text: "¡Hola! Soy el asistente virtual de AySA. ¿En qué puedo ayudarte?" },
  ]);
  const [sessionId] = useState(() => `web-session-${Math.random().toString(36).substring(2, 8)}`);
  const [isMaximized, setIsMaximized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const toggleMaximize = () => setIsMaximized(!isMaximized);

  const formatMessage = (text: string) => {
    return text.split("\n").map((line, i) => {
      // Handle bullets starting with * or -
      if (line.trim().startsWith("*") || line.trim().startsWith("-")) {
        return (
          <div key={i} className="flex gap-2 mb-1">
            <span className="text-aysa-blue">•</span>
            <span>{line.trim().substring(1).trim()}</span>
          </div>
        );
      }
      return (
        <p key={i} className={line.trim() === "" ? "h-2" : "mb-1"}>
          {line}
        </p>
      );
    });
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = { role: "user", text: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const response = await sendToN8n(message, sessionId);
      console.log("n8n Response Debug:", response);
      
      // Handle array or object response
      const data = Array.isArray(response) ? response[0] : response;
      
      const botResponse = data.reply || data.text || data.output || data.message || "Gracias por tu consulta. Pronto te responderé con más detalle (Demo n8n).";
      
      setChat((prev) => [
        ...prev,
        { role: "bot", text: botResponse },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { role: "bot", text: "Lo siento, hubo un problema al conectar con el servidor. Por favor intenta más tarde." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Bubble Tip */}
      {!isOpen && (
        <div className="bg-white text-aysa-blue px-4 py-2 rounded-2xl shadow-xl mb-4 animate-bounce font-sans font-medium text-sm">
          ¿En qué puedo ayudarte?
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`bg-white shadow-2xl overflow-hidden flex flex-col border border-aysa-blue/10 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-300 transition-all ${
          isMaximized 
            ? "fixed inset-4 w-auto h-auto rounded-3xl z-50" 
            : "w-[350px] h-[500px] rounded-3xl"
        }`}>
          <div className="bg-aysa-blue p-4 flex items-center justify-between text-white shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-white/40 shadow-lg">
                <img src="/bot-avatar.png" alt="Asistente AySA" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold font-heading text-lg text-white">Asistente AySA</p>
                <p className="text-[10px] text-white/80 italic">En línea</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleMaximize} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                title={isMaximized ? "Restaurar" : "Maximizar"}
              >
                {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button onClick={toggleChat} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-aysa-surface">
            {chat.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-3 rounded-2xl text-sm break-words overflow-x-hidden shadow-sm border border-black/5 ${
                  msg.role === "user"
                    ? "bg-aysa-blue text-white ml-auto rounded-tr-none"
                    : "bg-white text-aysa-blue mr-auto rounded-tl-none"
                }`}
              >
                {formatMessage(msg.text)}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-black/5 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-aysa-gray rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-aysa-blue/20"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className={`p-2 rounded-full transition-colors ${
                isLoading ? "bg-gray-300 text-gray-500" : "bg-aysa-blue text-white hover:bg-aysa-blue/90"
              }`}
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? "bg-red-500 hover:bg-red-600 rotate-90" : "bg-white hover:scale-110 border-4 border-aysa-blue/20"
        } text-white`}
      >
        {isOpen ? (
          <X size={36} />
        ) : (
          <img src="/bot-avatar.png" alt="Abrir chat" className="w-full h-full object-cover" />
        )}
      </button>
    </div>
  );
};

export default FloatingBotIcon;

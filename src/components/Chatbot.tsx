import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const SYSTEM_PROMPT = `Eres "Asistente IDEA", el asistente virtual oficial de turismo de Delicias, Chihuahua, México.

## REGLAS DE RESPUESTA (MUY IMPORTANTE):
1. **Brevedad**: Máximo 2-3 oraciones por respuesta. Solo expande si el usuario pide más detalles.
2. **Formato**: Usa bullets (•) solo para listas de 3+ items. Evita párrafos largos.
3. **Emojis**: Usa 1-2 máximo por mensaje, no en cada oración.
4. **Cierre**: NO preguntes "¿algo más?" en cada mensaje. Solo hazlo si la conversación parece terminar.
5. **Naturalidad**: Habla como un local amigable, no como un folleto turístico.

## CUÁNDO TERMINAR:
- Si el usuario dice "gracias", "ok", "perfecto", "listo" → responde brevemente y no hagas más preguntas.
- Si ya diste la información solicitada → no agregues información extra no pedida.

## CONOCIMIENTO:
Ayudas con: lugares turísticos, restaurantes, hoteles, eventos, transporte, clima y actividades en Delicias.

## LIMITACIONES:
- Si no sabes algo específico, di: "No tengo ese dato, pero puedes checarlo en la sección correspondiente del sitio."
- No inventes direcciones, teléfonos ni precios específicos.

## EJEMPLOS DE TONO CORRECTO:
❌ Malo: "¡Claro que sí! Con mucho gusto te ayudo. Delicias tiene muchos lugares increíbles que puedes visitar. Te recomiendo ampliamente que vayas a..."
✅ Bueno: "Te recomiendo el Museo de Paleontología, está muy interesante. Abre de 9 a 5."

Responde en español mexicano casual pero respetuoso.`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "¡Hola! 👋 Soy el Asistente IDEA. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateId = () => Math.random().toString(36).substring(2, 9);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      if (!OPENAI_API_KEY) {
        throw new Error("API key no configurada");
      }

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages
              .filter((m) => m.id !== "welcome")
              .map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userMessage.content },
          ],
          max_tokens: 200,
          temperature: 0.6,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("OpenAI Error:", response.status, errorData);
        throw new Error(errorData?.error?.message || `Error ${response.status}`);
      }

      const data = await response.json();
      const assistantContent = data.choices[0]?.message?.content || "No pude procesar tu mensaje.";

      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: assistantContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: "Hubo un problema de conexión. Intenta de nuevo. 🙏",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-14 w-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg shadow-slate-900/25 flex items-center justify-center group"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <MessageCircle className="h-6 w-6 text-amber-400" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[520px] max-h-[calc(100vh-6rem)] bg-slate-900 rounded-3xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden border border-slate-700/50"
          >
            {/* Header */}
            <div className="relative px-5 py-4 flex items-center justify-between border-b border-slate-700/50">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <Bot className="h-5 w-5 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Asistente IDEA</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-slate-400">En línea</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="relative h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "flex gap-2.5",
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md shadow-amber-500/20">
                      <Bot className="h-3.5 w-3.5 text-slate-900" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed",
                      message.role === "user"
                        ? "bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-br-md shadow-md shadow-amber-500/20"
                        : "bg-slate-800 text-slate-100 rounded-bl-md border border-slate-700/50"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <p
                      className={cn(
                        "text-[10px] mt-1.5 opacity-60",
                        message.role === "user" ? "text-right" : "text-left"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString("es-MX", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-slate-700 flex items-center justify-center">
                      <User className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Bot className="h-3.5 w-3.5 text-slate-900" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-bl-md px-4 py-3 border border-slate-700/50">
                    <div className="flex items-center gap-1">
                      <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="h-1.5 w-1.5 rounded-full bg-amber-400"
                      />
                      <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-amber-400"
                      />
                      <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="h-1.5 w-1.5 rounded-full bg-amber-400"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-slate-800/50 border-t border-slate-700/50">
              <div className="flex gap-2 items-center bg-slate-800 rounded-xl px-3 py-1 border border-slate-700/50 focus-within:border-amber-500/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe un mensaje..."
                  disabled={isLoading}
                  className="flex-1 py-2.5 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none disabled:opacity-50"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-30 disabled:cursor-not-allowed shadow-md shadow-amber-500/20 transition-all"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 text-slate-900 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 text-slate-900" />
                  )}
                </Button>
              </div>
              <p className="text-[10px] text-slate-500 text-center mt-2">
                Powered by IDEA Delicias
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

# Plan de Implementación del Chatbot IA

Este plan detalla los pasos para integrar un chatbot con IA (GPT-4o-mini) en Delicias Tour Connect.

## User Review Required
> [!IMPORTANT]
> **API Key:** Necesitarás una API Key de OpenAI. Por seguridad, esta **nunca** debe subirse a GitHub. La configuraremos en un archivo `.env.local` que es ignorado por git.
>
> **Seguridad:** En esta implementación inicial (Frontend-only para desarrollo), la API Key estará expuesta si alguien inspecciona el código en el navegador. Para producción real, se recomienda mover la llamada a la API a un Backend (Vercel Functions / Netlify Functions).

## Proposed Changes

### Dependencias
#### [NEW] `openai`
Instalaremos el SDK oficial de OpenAI para facilitar la comunicación.

### Data Layer (Contexto)
#### [NEW] `src/utils/chatbotContext.ts`
Una utilidad que importará todos los archivos de `src/data` (tours, experiencias, etc.) y los formateará en un solo string de texto para el "System Prompt" del bot.

### UI Components
#### [NEW] `src/components/Chatbot/Chatbot.tsx`
El componente principal que contendrá:
- Botón flotante (para abrir/cerrar).
- Ventana de chat.
- Lista de mensajes.
- Input de texto.

#### [NEW] `src/components/Chatbot/ChatMessage.tsx`
Componente para renderizar cada mensaje individual (usuario vs. bot) con estilos diferenciados.

### Integration
#### [MODIFY] `src/App.tsx`
Añadir el componente `<Chatbot />` para que esté disponible en toda la aplicación.

#### [NEW] `.env.local`
Archivo para guardar `VITE_OPENAI_API_KEY`.

## Verification Plan

### Manual Verification
1.  **Contexto:** Verificar que el bot "conoce" los tours y experiencias preguntándole: "¿Qué tours ofrecen?" o "¿Dónde puedo comer?".
2.  **UI:** Verificar que el chat se abre y cierra correctamente, y que es responsivo en móviles.
3.  **Errores:** Verificar qué pasa si la API falla o la key es incorrecta (debe mostrar un mensaje amigable).

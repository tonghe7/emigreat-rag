import ChatService from "@/models/chatService";

export default function ResetChat({ setChatHistory, settings, sessionId }) {
  const handleChatReset = async () => {
    await ChatService.resetEmbedChatSession(settings, sessionId);
    setChatHistory([]);
  };

  return (
    <div className="allm-w-full allm-flex allm-justify-center">
      <button
        className="hover:allm-cursor-pointer allm-border-none allm-text-sm allm-bg-transparent hover:allm-opacity-80 hover:allm-underline allm-text-slate-700"
        onClick={() => handleChatReset()}
      >
        Reset Chat
      </button>
    </div>
  );
}

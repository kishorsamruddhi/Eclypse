import { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input.trim()]);
    setInput("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center text-2xl transition-all"
        >
          💬
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 max-w-sm rounded-xl shadow-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white px-4 py-3 flex items-center justify-between">
            <span className="font-medium">Chat with us</span>
            <button
              onClick={toggleChat}
              className="text-xl hover:text-red-200 transition"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-3 overflow-y-auto max-h-64 bg-gray-100 dark:bg-gray-800 space-y-2">
            {messages.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Hi! How can we help you today?
              </p>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 px-3 py-2 rounded-lg text-sm self-start w-fit max-w-full"
                >
                  {msg}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="p-2 bg-gray-200 dark:bg-gray-700 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-grow rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

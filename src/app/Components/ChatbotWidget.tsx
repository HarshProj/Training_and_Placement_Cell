'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface ChatbotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string; source: string }[]
  >([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/gemini/chatbot', {
        question: input,
      });

      setChatHistory(prev => [
        ...prev,
        {
          question: input,
          answer: res.data.answer,
          source: res.data.source,
        },
      ]);
      setInput('');
    } catch (err) {
      setChatHistory(prev => [
        ...prev,
        {
          question: input,
          answer: 'Something went wrong. Please try again.',
          source: '❌ Error',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-full h-[28rem] bg-white border rounded-lg shadow-xl z-50 flex flex-col">
      <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-t-lg">
        <span>Placement Chatbot</span>
        <button onClick={onClose}>✖</button>
      </div>

      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
        {chatHistory.length === 0 && (
          <p className="text-gray-500">Ask anything about placements, alumni, or HR!</p>
        )}
        {chatHistory.map((msg, idx) => (
          <div key={idx} className="space-y-1">
            <div className="font-semibold text-gray-800">🧑‍🎓 You:</div>
            <div className="bg-gray-100 p-2 rounded">{msg.question}</div>
            <div className="font-semibold text-gray-800 pt-2">{msg.source}:</div>
            <div className="bg-blue-50 p-2 rounded text-gray-700 whitespace-pre-wrap">
              {msg.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
          className="flex-1 border px-3 py-2 rounded focus:outline-none"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatbotWidget;

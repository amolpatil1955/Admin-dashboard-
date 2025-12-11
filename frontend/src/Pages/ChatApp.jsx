import React,{ useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // your backend port 5000

export default function App() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.off("receiveMessage"); // ❗ Fix double message issue
    socket.on("receiveMessage", (data) => {
      setChat((prev) => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const send = () => {
    if (!msg.trim()) return;
    socket.emit("sendMessage", msg);
    setMsg("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Chat Container */}
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 text-white text-center py-4 text-lg font-semibold">
          Simple Chat App
        </div>

        {/* Chat Messages */}
        <div className="h-96 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {chat.map((c, i) => (
            <div
              key={i}
              className="flex justify-start"
            >
              <p className="bg-blue-500 text-white py-2 px-4 rounded-xl max-w-xs shadow-md">
                {c}
              </p>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input box */}
        <div className="flex items-center p-3 border-t bg-white">
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={send}
            className="ml-3 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

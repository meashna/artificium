import React, { createContext, useContext, useState, useEffect } from "react";
const ChatHistoryContext = createContext();

export const ChatHistoryProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    console.log("Current chat history:", chatHistory);
  }, [chatHistory]);

  const addChatEntry = (entry) => {
    setChatHistory((prevHistory) => [...prevHistory, entry]);
  };

  return (
    <ChatHistoryContext.Provider value={{ chatHistory, addChatEntry }}>
      {children}
    </ChatHistoryContext.Provider>
  );
};

export const useChatHistory = () => useContext(ChatHistoryContext);

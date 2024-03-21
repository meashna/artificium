import React, { useState, useEffect } from "react";
import styles from "./ChatBar.module.css";
import { IoMicOutline } from "react-icons/io5";
import { IoIosAttach } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useChatHistory } from "../ChatHistoryContext/ChatHistoryContext";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const ChatBar = ({ setActiveComponent }) => {
  const [userText, setUserText] = useState("");
  const [loading, setLoading] = useState(false);
  const { addChatEntry } = useChatHistory();

  const fetchData = async (e) => {
    e.preventDefault();
    console.log("This is the current input: " + userText);
    setUserText("");

    try {
      const chat = model.startChat({
        history: [],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const result = await chat.sendMessage(userText);
      const response = await result.response;
      const text = await response.text();
      console.log(text);

      addChatEntry({ userText, responseText: text });
      setUserText("");
      setActiveComponent("ChatHistoryDisplay");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setUserText("");
    }
  };

  return (
    <div>
      <div className={styles.chatbar}>
        <form className={styles.chatbarcontainer} onSubmit={fetchData}>
          <div>
            <IoMicOutline className={styles.micicon} />
          </div>
          <input
            placeholder="You can ask me anything ! I am here to help."
            className={styles.chatbarinput}
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            disabled={loading}
          />
          <div className={styles.file}>
            <IoIosAttach className={styles.fileicon} />
          </div>
          <button className={styles.send} type="submit" disabled={loading}>
            <FiSend className={styles.sendicon} />
          </button>
        </form>
      </div>
      {/* {chatHistory.map((entry, index) => (
        <ChatHistoryDisplay
          key={index}
          user={entry.userText}
          model={entry.responseText}
        />
      ))} */}
      {/* <ChatHistoryDisplay chatHistory={chatHistory} /> */}
    </div>
  );
};

export default ChatBar;

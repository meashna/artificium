import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBvYAYQBaFSc3WkBhz72wM6CyC3nlb4JHw";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Demo = () => {
  async function fetchData() {
    try {
      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hello, I have 2 dogs in my house." }],
          },
          {
            role: "model",
            parts: [
              { text: "Great to meet you. What would you like to know?" },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
      const msg = "How many paws are in my house?";
      const result = await chat.sendMessage(msg);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button
        style={{ height: "50px", width: "100px" }}
        onClick={fetchData}
      ></button>
    </div>
  );
};

export default Demo;

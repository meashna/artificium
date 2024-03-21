import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import TopNav from "./Components/TopNav/TopNav";
import ChatBar from "./Components/ChatBar/ChatBar";
import Demo from "./Pages/Demo/Demo";
import ImageGenerator from "./Pages/ImageGenerator/ImageGenerator";
import { ChatHistoryProvider } from "./Components/ChatHistoryContext/ChatHistoryContext";

const App = () => {
  return (
    <BrowserRouter>
      <ChatHistoryProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sidenav" element={<SideNav />}></Route>
          <Route path="/topnav" element={<TopNav />}></Route>
          <Route path="/chatbar" element={<ChatBar />}></Route>
          <Route path="/demo" element={<Demo />}></Route>
          <Route path="/image" element={<ImageGenerator />}></Route>
        </Routes>
      </ChatHistoryProvider>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from "react";
import styles from "./Home.module.css";
import SideNav from "../../Components/SideNav/SideNav";
import TopNav from "./../../Components/TopNav/TopNav";
import ChatBar from "../../Components/ChatBar/ChatBar";
import ChatHistoryDisplay from "../../Components/ChatHistoryDisplay/ChatHistoryDisplay";
import { useChatHistory } from "../../Components/ChatHistoryContext/ChatHistoryContext";

// import CenterArea from "../../Components/CenterArea/CenterArea";
import CenterArea from "./../../Components/CenterArea/CenterArea";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("CenterArea");
  const { chatHistory } = useChatHistory();
  return (
    <div>
      <div className={styles.homemaincontainer}>
        <div>
          <SideNav />
        </div>
        <div className={styles.main}>
          <div>
            <TopNav />
          </div>
          <div className={styles.center}>
            {chatHistory.length > 0 && (
              <ChatHistoryDisplay chatHistory={chatHistory} />
            )}
            {activeComponent === "ChatHistoryDisplay" && <ChatHistoryDisplay />}
            {activeComponent === "CenterArea" && <CenterArea />}
          </div>
          <div className={styles.chatbar}>
            <div className={styles.chatbar}>
              {/* Pass setActiveComponent to ChatBar as a prop */}
              <ChatBar setActiveComponent={setActiveComponent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

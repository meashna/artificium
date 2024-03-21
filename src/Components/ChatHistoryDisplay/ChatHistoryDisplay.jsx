import React from "react";
import styles from "./ChatHistoryDisplay.module.css";
import pro__pic from "../../assets/avatar/avatar-pro.jpg";
import { PiCopyThin } from "react-icons/pi";
import artificium from "../../assets/avatar/Artificium.png";

const ChatHistoryDisplay = ({ chatHistory = [] }) => {
  return (
    <div className={styles.displaymain}>
      <div className={styles.displaymain__conatiner}>
        {chatHistory.map((entry, index) => (
          <React.Fragment key={index}>
            <div className={styles.display__container}>
              <div className={styles.user__propic}>
                <img src={pro__pic} className={styles.profile__pic} />
              </div>
              <div className={styles.user__top}>
                <div className={styles.user__left}>
                  <div className={styles.user__username}>Ryan Lee</div>
                  <div className={styles.user__status}>just now</div>
                </div>
                <div>
                  <PiCopyThin className={styles.user__copybtn} />
                </div>
              </div>
              <div className={styles.demo}></div>
              <div className={styles.user__text}>{entry.userText}</div>
            </div>
            <div className={styles.display__container}>
              <div className={styles.model__propic}>
                <img src={artificium} className={styles.model__pic} />
              </div>
              <div className={styles.model__top}>
                <div className={styles.model__left}>
                  <div className={styles.model__username}>Artificium</div>
                  <div className={styles.model__status}>just now</div>
                </div>
                <div>
                  <PiCopyThin className={styles.model__copybtn} />
                </div>
              </div>
              <div className={styles.demo}></div>
              <div className={styles.model__text}>{entry.responseText}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ChatHistoryDisplay;

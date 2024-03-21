import React from "react";
import styles from "./TopNav.module.css";
import { GoShareAndroid } from "react-icons/go";
import avatar3 from "../../assets/avatar/avatar3.webp";
import avatar4 from "../../assets/avatar/avatar4.webp";
import avatar5 from "../../assets/avatar/avatar5.webp";
import { FiEdit3 } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineFolderOpen } from "react-icons/md";

const TopNav = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.topnav}>
          <div className={styles.topnav__top}>
            <div className={styles.topnavleft}>
              <div className={styles.groupname}>Orbital Oddysey</div>
              <div className={styles.groupdescp}>
                Marketing Campaign for a new TV series Launch
              </div>
            </div>

            <div className={styles.topnavright}>
              <div className={styles.members}>
                <img className={styles.members} src={avatar3} />
                <img className={styles.members} src={avatar4} />
                <img className={styles.members} src={avatar5} />
              </div>
              <div className={styles.share}>
                <GoShareAndroid className={styles.sharelogo} />

                <div className={styles.sharetext}>Share</div>
              </div>
              <div className={styles.edit}>
                <FiEdit3 className={styles.editlogo} />
              </div>
            </div>
          </div>

          <div className={styles.topnav__btm}>
            <div className={styles.artificium}>
              <MdOutlineFolderOpen className={styles.artificiumlogo} />

              <div className={styles.artificiumtext}>Artificium</div>
            </div>
            <div className={styles.chat}>
              <IoChatbubbleOutline className={styles.chatlogo} />

              <div className={styles.chatatext}>Chat</div>
            </div>
            <div className={styles.library}>
              <MdOutlineFolderOpen className={styles.librarylogo} />

              <div className={styles.libaraytext}>Library</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

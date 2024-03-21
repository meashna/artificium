import React from "react";
import styles from "./SideNav.module.css";
import { MdExpandMore } from "react-icons/md";
import grouplogo from "../../assets/avatar/avatar2.webp";
import propic from "../../assets/avatar/avatar-pro.jpg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FaRegSquare } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdKeyboardCommandKey } from "react-icons/md";
import { FiTriangle } from "react-icons/fi";
import { RiHexagonLine } from "react-icons/ri";

const SideNav = () => {
  return (
    <div>
      <div className={styles.sidenav}>
        <div className={styles.sidenavcontents}>
          {/* profile area start  */}
          <div className={styles.grouppro}>
            <div className={styles.groupprocontainer}>
              <div className={styles.groupproleft}>
                <div className={styles.groupproimg}>
                  <img className={styles.groupproimg} src={grouplogo}></img>
                </div>
                <div className={styles.grouppronamecount}>
                  <div className={styles.groupproname}>Intellisys</div>
                  <div className={styles.groupprocount}>12 members</div>
                </div>
              </div>

              <div className={styles.groupproright}>
                <div className={styles.grouppromore}>
                  <MdExpandMore className={styles.sidenavicon} />
                </div>
              </div>
            </div>
          </div>
          {/* profile area ends  */}
          {/* general area starts  */}
          <div className={styles.general}>
            <div className={styles.generalarea}>
              <div className={styles.generaltext}>GENERAL</div>
              <div className={styles.generalcontents}>
                <div className={styles.search}>
                  <div className={styles.searchiconinput}>
                    <div className={styles.searchicon}>
                      <CiSearch className={styles.sidenavicon} />
                    </div>
                    <div className={styles.searchtext}>Search</div>
                  </div>

                  <div className={styles.commandkey}>
                    <MdKeyboardCommandKey className={styles.commandkeyicon} />
                    <div className={styles.stext}>S</div>
                  </div>
                </div>
                <div className={styles.billing}>
                  <div className={styles.billingicon}>
                    <HiOutlineCreditCard className={styles.sidenavicon} />
                  </div>
                  <div className={styles.billingtext}>Billing</div>
                </div>
              </div>
            </div>
          </div>
          {/* general area ends  */}
          {/* projects area starts  */}
          <div className={styles.projects}>
            <div className={styles.projectheading}>PROJECTS</div>

            <div className={styles.projectlist}>
              <div className={styles.projectlogoname}>
                <div>
                  <FaRegSquare className={styles.projectlogo} />
                </div>
                <div className={styles.projectname}>Orbital Oddysey</div>
              </div>
            </div>

            <div className={styles.projectlogoname}>
              <div>
                <FiTriangle className={styles.projectlogo__tri} />
              </div>
              <div className={styles.projectname}>Digital Product Launch</div>
            </div>

            <div className={styles.projectlogoname}>
              <div>
                <FaRegSquare className={styles.projectlogo__sqr} />
              </div>
              <div className={styles.projectname}>Brand Refresh</div>
            </div>

            <div className={styles.projectlogoname}>
              <div>
                <RiHexagonLine className={styles.projectlogo__hex} />
              </div>
              <div className={styles.projectname}>Social Media Strategy</div>
            </div>

            {/* projects area ends  */}

            <div>
              <div className={styles.addlogoname}>
                <div>
                  <IoIosAddCircleOutline className={styles.addlogo} />
                </div>
                <div className={styles.addname}>Add new project</div>
              </div>
            </div>
          </div>
          {/* personal-pro area starts  */}

          <div className={styles.personalpro}>
            <div className={styles.personalprocontainer}>
              <div className={styles.personalproleft}>
                <div className={styles.personalproimg}>
                  <img className={styles.personalproimg} src={propic}></img>
                </div>
                <div className={styles.personalpronamecount}>
                  <div className={styles.personalproname}>Riya Lee</div>
                  <div className={styles.personalprocount}>Premium</div>
                </div>
              </div>
              <div className={styles.personalproright}>
                <div className={styles.personalmore}>
                  <CiSettings className={styles.personalmore} />
                </div>
              </div>
            </div>
          </div>

          {/* personal-pro area ends  */}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

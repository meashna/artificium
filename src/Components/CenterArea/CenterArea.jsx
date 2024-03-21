import React from "react";
import styles from "./CenterArea.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { LuMessageCircle } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { SlBulb } from "react-icons/sl";

const CenterArea = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.centerarea}>
          <div className={styles.centerarea__container}>
            <div className={styles.center__head}>Innovation Starter Pack</div>

            <div className={styles.center__para}>
              Kickstart your innovation process with our comprehensive selection
              of predefined prompts.
            </div>

            <div className={styles.center__listcontainer}>
              <div className={styles.center__list}>
                <div className={styles.categoryicon__msg}>
                  <LuMessageCircle className={styles.msg} />
                </div>

                <div className={styles.categoryhead}>Creative Assests</div>

                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <FaArrowRight className={styles.arrow} />
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className={styles.center__list}>
                <div className={styles.categoryicon__code}>
                  <FaCode className={styles.code} />
                </div>
                <div className={styles.categoryhead}>Creative Assests</div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className={styles.center__list}>
                <div className={styles.categoryicon__pencil}>
                  <GoPencil className={styles.pencil} />
                </div>
                <div className={styles.categoryhead}>Creative Assests</div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className={styles.center__list}>
                <div className={styles.categoryicon__bulb}>
                  <SlBulb className={styles.bulb} />
                </div>
                <div className={styles.categoryhead}>Creative Assests</div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
                <div className={styles.subcategory1}>
                  <div className={styles.categorytext}>Ui Design</div>
                  <div className={styles.arrow}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterArea;

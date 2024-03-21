import React from "react";
import styles from "./ImageGenerator.module.css";

const ImageGenerator = () => {
  async function fetchData() {
    try {
      (async function () {
        const resp = await fetch("https://api.deepai.org/api/text2img", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": "efd3be99-0a05-4a52-bbfd-734a00145376",
          },
          body: JSON.stringify({
            text: "image of a cat",
          }),
        });

        const data = await resp.json();
        console.log(data);
      })();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <div className={styles.btn}>
        <button className={styles.btn} onClick={fetchData}>
          Generate Image
        </button>
      </div>
    </div>
  );
};

export default ImageGenerator;

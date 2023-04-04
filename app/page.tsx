"use client";

import styles from "./page.module.css";
import localFont from "next/font/local";

const jediFont = localFont({ src: "./fonts/DistantGalaxy.ttf" });

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={jediFont.className +" "+ styles.header}>Star Jedi</div>
    </div>
  );
}

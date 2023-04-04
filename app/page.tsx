"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main className={styles.main}>
    <div className={styles.spaceBackground}>
      <div className={styles.stars}>
        <h1>Hernán Landau</h1>
      </div>
    </div>
    // </main>
  );
}

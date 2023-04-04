"use client";

import styles from "./page.module.scss";
import localFont from "next/font/local";
import bgvideo from "./assets/bgvid.mp4";
import { useState, useEffect, useRef } from "react";
import { Player } from "video-react";
import introVideo from "./assets/envatoIntro.mp4";

const jediFont = localFont({ src: "./fonts/DistantGalaxy.ttf" });

export default function Home() {
  const [videoState, setVideoState] = useState(null);
  const [hasEnded, setHasEnded] = useState(false);
  const videoRef = useRef<any>(null);
  useEffect(() => {
    videoRef.current.subscribeToStateChange(setVideoState);
  }, [setVideoState]);

  useEffect(() => {
    if (videoState && videoState.ended && !hasEnded) {
      // Preventing onVideoEnd from being called multiple times
      setHasEnded(true);
    }
  }, [videoState, hasEnded, setHasEnded]);

  if (!hasEnded) {
    return (
      <Player
        ref={videoRef}
        src={introVideo}
        autoPlay
        muted
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
      ></Player>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={jediFont.className + " " + styles.header}>
          Mochi is Love
        </div>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
          }}
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

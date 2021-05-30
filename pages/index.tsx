import { useMemo } from "react";
import { VideoBanner } from "../components/VideoBanner";
import styles from "../components/App.module.css";
import { NavBar } from "../components/NavBar";

export default function Home() {
  const videoSources = useMemo(() =>
    ["https://srumbaugh.com/lychee/uploads/big/086798b5a1b1661f4bd26def3e6e8ed6.mp4"], [])

  return (
    <>
      <NavBar />
      <main>
        <VideoBanner
          sources={videoSources}
          heading="Welcome to Neonode!"
          subheading="The programmable LED controller"/>
        <section className="banner">
          <h1>What is Neonode?</h1>
          <div className="bannerColumn">
            <p>A programmable controller for addressable, 5v LED strips!  Neonode is built on a custom PCB that takes care of all the details, and lets you jump right into your LED projects.</p>
            <img id={styles.boardMainImage} src="images/neonode_outline.png" />
          </div>
        </section>
        <section className="banner">
          <h1>Powered by NodeMCU and WLED</h1>
        </section>
        <section className="banner">
          <h1>Who is Neonode for?</h1>
        </section>
      </main>
    </>
  )
}
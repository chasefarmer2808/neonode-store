import React, { useMemo } from "react";
import { VideoBanner } from "../components/VideoBanner";
import styles from "../components/App.module.css";
import { NavBar } from "../components/NavBar";
import Link from "next/link";

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
          <div className="textImageBanner">
            <p>A programmable controller for addressable, 5v LED strips!  Neonode is built on a custom PCB that takes care of all the details, and lets you jump right into your LED projects.</p>
            <img id={styles.boardMainImage} src="images/neonode_outline.png" />
          </div>
        </section>
        <section className="banner">
          <h1>Powered by NodeMCU and WLED</h1>
          <div className="textImageBanner">
            <section>
              <p>
                The brains of this board is a microcontroller called NodeMCU.  It uses an ESP32 for WiFi and Bluetooth capabilities.
              </p>
              <p>
                Out of the box, these boards are delivered with the WLED software installed.  WLED is an open-source program for controlling
                addressable LEDs over WiFi.  It has many features such as solid light control, segmentation, timers, and a massive library of 
                pre-programmed color effects!
              </p>
            </section>
            <section>
              <img src="images/nodemcu-logo.png" />
              <img src="images/wled_logo.png" />
            </section>
          </div>
        </section>
        <section className="banner">
          <h1>Who is Neonode for?</h1>
          <div className="bannerContent">
            <section>
              <p>
                Anyone who wants to add some color to their live, and isn't afraid of a little DIY.  Out of the box, Neonode gives you everything you
                need for interior design LED projects.  But if you want a bit more ambitious, you may need to break out the zip ties or super glue.
                However, Neonode is a great starting off point.  Check out the <Link href="/projects">Projects Page</Link> for some inspiration.
              </p>
              <p>
                We want to make Neonode accessible to everyone, while not making things complicated or expensive.  Because of this, we offer several
                pricing options to give you as much or as little supplies as you need to get started.  See the <Link href="/pricing">Pricing Page</Link> for details.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  )
}
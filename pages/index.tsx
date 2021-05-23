import { useMemo } from "react";
import { VideoBanner } from "../components/VideoBanner";

export default function Home() {
  const videoSources = useMemo(() =>
    ["https://srumbaugh.com/lychee/uploads/big/086798b5a1b1661f4bd26def3e6e8ed6.mp4"], [])

  return (
    <VideoBanner
      sources={videoSources}
      heading="Welcome to Neonode!"
      subheading="The programmable LED controller"/>
  )
}
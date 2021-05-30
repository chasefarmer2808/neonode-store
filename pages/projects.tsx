import React, { useMemo } from "react";
import { NavBar } from "../components/NavBar";
import { Slideshow } from "../components/Slideshow";

export default function Projects() {
    const bikePhotos = useMemo(() => {
        return [
            'https://srumbaugh.com/lychee/uploads/medium/e5fa6bf203e462b7f39712d60cdc0131@2x.jpg',
            'https://srumbaugh.com/lychee/uploads/medium/d05002929c9b7896b95a93206ad0a7c8@2x.jpg',
            'https://srumbaugh.com/lychee/uploads/medium/3bdc0e9e129f79f2a8bf904c6f9a4b05@2x.jpg',
            'https://srumbaugh.com/lychee/uploads/medium/fb1b2a5043533eb8ce324165d54c8ca8@2x.jpg'
        ]
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Here are some of the things you can make with Neonode!</h1>
                <section>
                    <h2>Portable Bike Frame Light</h2>
                    <p>
                        This one was a no-brainer.  Who wouldn't want to roll around town with rainbows
                        spewing everywhere?  Because Neonode runs on 5v, it can be powered with a 5v portable
                        battery bank.  Just had to find one with at least 2 amps output, a USB-A to barrel plug
                        converter cable, and a top-tube bag to carry everything in.  In this project, I used the 
                        adhesive on the LED strip to stick the lights to the frame.  But if you want a less permanant
                        solution, zip-ties would work great as well.
                    </p>
                    <Slideshow photoSources={bikePhotos} />
                </section>
            </main>
        </>
    )
}
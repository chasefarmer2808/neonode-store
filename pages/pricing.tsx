import React from "react";
import { NavBar } from "../components/NavBar";
import { PriceOption } from "../components/PriceOption";

export default function Pricing() {
    return (
        <>
            <NavBar />
            <main>
                <h1>See which option is right for you</h1>
                <ul>
                    <li>
                        <PriceOption title="Just the Board" price={12}/>
                        <PriceOption title="Boad with Connectors" price={20} />
                        <PriceOption title="Complete Board" price={40} />
                        <PriceOption title="Complete Board + 1m LEDs" price={50}/>
                        <PriceOption title="Everything + 1m LEDs" price={60} />
                    </li>
                </ul>
            </main>
        </>
    );
}
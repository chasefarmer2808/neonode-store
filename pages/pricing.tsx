import React from "react";
import { NavBar } from "../components/NavBar";
import { PriceOption } from "../components/PriceOption";
import styles from "../components/pricing.module.css";

export default function Pricing() {
    return (
        <>
            <NavBar />
            <main>
                <h1>See which option is right for you</h1>
                <ul className={styles.priceOptionList}>
                    <li className={styles.priceOptionItem}>
                        <PriceOption title="Just the Board" price={12}/>
                    </li>
                    <li className={styles.priceOptionItem}>
                        <PriceOption title="Boad with Connectors" price={20} />
                    </li>
                    <li className={styles.priceOptionItem}>
                        <PriceOption title="Complete Board" price={40} />
                    </li>
                    <li className={styles.priceOptionItem}>
                        <PriceOption title="Complete Board + 1m LEDs" price={50}/>
                    </li>
                    <li className={styles.priceOptionItem}>
                        <PriceOption title="Everything + 1m LEDs" price={60} />
                    </li>
                </ul>
            </main>
        </>
    );
}
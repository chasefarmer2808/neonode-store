import React from 'react';
import styles from './PriceOption.module.css';

interface PriceOptionProps {
    title: string;
    price: number;
    description?: string;
    featureList?: string[];
}

export const PriceOption: React.FC<PriceOptionProps> = 
    ({ title, price, description, featureList = [] }) => {
    return (
        <section className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h3>{title}</h3>
            </div>
            <h4>${price}</h4>
            {description ? <p>{description}</p> : undefined}
            <ul className={styles.featureList}>
                {featureList.map(feature => <li>{feature}</li>)}
            </ul>
        </section>
    )
}
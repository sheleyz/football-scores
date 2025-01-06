"use client";

import styles from "./hero.module.scss";

export default function Hero({ heading, subheading }) {
    return (
        <div className={`${styles.heroIntro} d-flex flex-column align-items-center container px-3 px-md-5 pt-5`}>
            <h1 className="text-center mb-3">{heading}</h1>
            <p className="mb-0">{subheading}</p>
        </div>
    );
}

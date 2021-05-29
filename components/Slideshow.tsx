import React, { useState } from "react";
import styles from './Slideshow.module.css';

interface SlideshowProps {
    photoSources: string[];
}

export const Slideshow: React.FC<SlideshowProps> = ({photoSources}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        let nextIndex = slideIndex + 1;
        if (nextIndex === photoSources.length) {
            nextIndex = 0;
        }

        setSlideIndex(nextIndex);
    }

    const prevSlide = () => {
        let prevIndex = slideIndex - 1;
        if (prevIndex < 0) {
            prevIndex = photoSources.length - 1;
        }

        setSlideIndex(prevIndex);
    }

    return (
        <section>
            <div className={styles.slideshowContainer}>
                {photoSources.length > 0 
                    ? <Slide key={photoSources[slideIndex]} src={photoSources[slideIndex]} />
                    : undefined}
                <button className={styles.prev} onClick={prevSlide}>❮</button>
                <button className={styles.next} onClick={nextSlide}>❯</button>
                <div className={styles.dotContainer}>
                    {photoSources.map((src, index) => <span key={index} className={styles.dot} />)}
                </div>
            </div>
        </section>
    )
}

interface SlideProps {
    src: string;
    caption?: string;
}

const Slide: React.FC<SlideProps> = ({src, caption}) => {
    return (
        <div className={styles.slideContainer}>
            <img src={src} style={{height: '400px'}} />
            {caption ? <p className="caption">{caption}</p> : undefined}
        </div>
    )
}
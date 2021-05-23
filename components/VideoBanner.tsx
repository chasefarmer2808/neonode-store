import styles from './VideoBanner.module.css';

interface VideoBannerProps {
    sources: string[];
    heading?: string;
    subheading?: string;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({ sources, heading, subheading}) => {
    return (
        <section className={styles.banner}>
            <video autoPlay playsInline loop muted>
                {sources.map(source => (<source key={source} src={source} type="video/mp4" />))}
            </video>
            {heading || subheading 
                ? (
                    <div className={styles.bannerOverlay}>
                        <h1>{heading}</h1>
                        <p>{subheading}</p>
                    </div>
                )
                : null}
        </section>
    );
}
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from './WhatsappButton';

const Hero = ({ images = [], location }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const imageCount = images.length;
    const activeIndex = imageCount > 0 ? currentSlide % imageCount : 0;

    useEffect(() => {
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (imageCount <= 1 || reducedMotion) return;

        const intervalId = setInterval(() => {
            setCurrentSlide((previous) => (previous + 1) % imageCount);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [imageCount]);


    return (
        <section className="hero" aria-labelledby="hero-title">

            {images.map((image, index) => (
                <img
                    key={`${image.src}-${index}`}
                    src={image.src}
                    alt={image.alt}
                    className={`hero-image ${index === activeIndex ? 'hero-image-active' : ''
                        }`}
                    aria-hidden={index !== activeIndex}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                />
            ))}

            <div className="hero-content">
                <p className="hero-location">{location}</p>

                <h1 id="hero-title">
                    Tu lugar para hacer una pausa
                </h1>
            </div>

            <div className="hero-actions">
                <Link to="/bungalows" className="hero-button">
                    Ver alojamientos
                </Link>

                <WhatsAppButton className="hero-button" />
            </div>
        </section>
    );
};

export { Hero };
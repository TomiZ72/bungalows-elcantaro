import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Hero = ({ images = [], description, location }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
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
    useEffect(() => {
        const handleScroll = () => {
            const progress = Math.min(window.scrollY / window.innerHeight, 1);

            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const backgroundStyle = {
        transform: `
      translateY(${scrollProgress * 70}px)
      scale(${1.05 + scrollProgress * 0.05})
    `,
        filter: `blur(${scrollProgress * 3}px)`,
    };

    const contentStyle = {
        transform: `translateY(${scrollProgress * 100}px)`,
        opacity: Math.max(1 - scrollProgress * 1.3, 0),
    };

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

                <p className="hero-description">{description}</p>
            </div>

            <div className="hero-actions">
                <Link to="/bungalows" className="hero-button">
                    Ver alojamientos
                </Link>

                <Link to="/contacto" className="hero-button">
                    Consultar disponibilidad
                </Link>
            </div>
        </section>
    );
};

export { Hero };
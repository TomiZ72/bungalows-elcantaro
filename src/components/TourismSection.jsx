import { useRef } from 'react';


const TourismSection = ({ places }) => {
    const carouselRef = useRef(null);

    const moveCarousel = (direction) => {
        const carousel = carouselRef.current;

        if (!carousel) return;

        const card = carousel.querySelector('.tourism-card');

        if (!card) return;

        const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
        const distance = card.getBoundingClientRect().width + gap;

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        carousel.scrollBy({
            left: distance * direction,
            behavior: reduceMotion ? 'instant' : 'smooth',
        });
    };

    return (
        <section
            className="tourism-section"
            aria-labelledby="tourism-title"
        >
            <div className="tourism-container">
                <div className="tourism-heading">
                    <div className="tourism-intro">
                        <span className="tourism-label">
                            Mucho por descubrir
                        </span>

                        <h2 id="tourism-title">
                            Villa Elisa y sus alrededores
                        </h2>

                        <p>
                            Un descanso en las termas, un paseo entre
                            palmeras o sabores con historia. Encontrá
                            tu próximo plan cerca de El Cántaro.
                        </p>
                    </div>
                </div>

                <div className="tourism-slider">
                    <button
                        className="tourism-arrow tourism-arrow-prev"
                        type="button"
                        onClick={() => moveCarousel(-1)}
                        aria-label="Ver lugares anteriores"
                        aria-controls="tourism-carousel"
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    <ul
                        className="tourism-carousel"
                        id="tourism-carousel"
                        ref={carouselRef}
                        aria-label="Lugares para visitar"
                    >
                        {places.map((place) => (
                            <li
                                className="tourism-card"
                                key={place.id}
                            >
                                <a
                                    className="tourism-card-link"
                                    href={place.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="tourism-image-container">
                                        <img
                                            className="tourism-image"
                                            src={place.image}
                                            alt={place.alt}
                                            style={{
                                                objectPosition:
                                                    place.imagePosition,
                                            }}
                                            loading="lazy"
                                        />

                                        {place.featured && (
                                            <span className="tourism-featured">
                                                Nuestro destacado
                                            </span>
                                        )}
                                    </div>

                                    <div className="tourism-card-content">
                                        <span className="tourism-category">
                                            {place.category}
                                        </span>

                                        <h3>{place.name}</h3>

                                        <p>{place.description}</p>

                                        <span className="tourism-location">
                                            {place.location}
                                        </span>

                                        <span className="tourism-visit">
                                            Conocer el lugar
                                            <span aria-hidden="true">↗</span>
                                        </span>

                                        <span className="tourism-sr-only">
                                            Abre en una pestaña nueva.
                                        </span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="tourism-arrow tourism-arrow-next"
                        type="button"
                        onClick={() => moveCarousel(1)}
                        aria-label="Ver lugares siguientes"
                        aria-controls="tourism-carousel"
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export { TourismSection };
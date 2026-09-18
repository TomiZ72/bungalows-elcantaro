import { Link } from 'react-router-dom';
import { useRef, useState } from "react";
import { WhatsAppButton } from './WhatsappButton';




const BungalowCard = ({ bungalows }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStart = useRef(null);

    const nextCard = () => {
        if (bungalows.length < 2) return;

        setActiveIndex((previous) =>
            (previous + 1) % bungalows.length
        );
    };

    const handleTouchStart = (event) => {
        const touch = event.touches[0];

        touchStart.current = {
            x: touch.clientX,
            y: touch.clientY,
        };
    };

    const handleTouchEnd = (event) => {
        if (!touchStart.current) return;

        const touch = event.changedTouches[0];
        const distanceX = touch.clientX - touchStart.current.x;
        const distanceY = touch.clientY - touchStart.current.y;

        // Solo cambiamos si el gesto fue principalmente horizontal.
        if (
            Math.abs(distanceX) > 60 &&
            Math.abs(distanceX) > Math.abs(distanceY)
        ) {
            nextCard();
        }

        touchStart.current = null;
    };
    return (
        <section className="bungalows-section">
            <div className="bungalows-container">
                <div className="bungalows-heading">
                    <h2>Nuestros alojamientos</h2>

                    <p>
                        Encontrá tu lugar para descansar
                        y disfrutar de Villa Elisa.
                    </p>
                </div>

                <div className="bungalows-grid">
                    {bungalows.map((bungalow, index) => {
                        const position =
                            (index - activeIndex + bungalows.length) % bungalows.length;

                        const coverImage = bungalow.image.images[3]
                            ?? bungalow.image.images[0];

                        return (
                            <article
                                className={`bungalow-card ${position === 0 ? "is-front" : ""}`}
                                key={bungalow.id}
                                style={{
                                    "--stack-position": Math.min(position, 2),
                                    "--stack-order": bungalows.length - position,
                                }}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                                onTouchCancel={() => {
                                    touchStart.current = null;
                                }}
                            >
                                {coverImage && (
                                    <img
                                        className="bungalow-card-image"
                                        src={coverImage.src}
                                        alt={`${coverImage.alt} — ${bungalow.name}`}
                                        loading="lazy"
                                    />
                                )}

                                <div className="bungalow-card-content">
                                    <span className="bungalow-capacity">
                                        Hasta {bungalow.capacity} personas
                                    </span>

                                    <h3>{bungalow.name}</h3>

                                    <p className="bungalow-description">
                                        {bungalow.description}
                                    </p>

                                    <ul
                                        className="bungalow-amenities"
                                        aria-label="Servicios"
                                    >
                                        {bungalow.amenities.map((amenity) => (
                                            <li key={amenity}>
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bungalow-conditions">
                                        <span>
                                            {bungalow.petsAllowed
                                                ? 'Acepta mascotas'
                                                : 'No acepta mascotas'}
                                        </span>

                                        <span>
                                            {bungalow.smokingAllowed
                                                ? 'Se permite fumar'
                                                : 'No se permite fumar'}
                                        </span>
                                    </div>

                                    <WhatsAppButton className="bungalow-button"
                                        message={`¡Hola! Quisiera consultar disponibilidad para ${bungalow.name}.`} />
                                </div>
                            </article>
                        );
                    })}
                    {bungalows.length > 1 && (
                        <div className="bungalows-stack-controls">
                            <span aria-live="polite" aria-atomic="true">
                                {activeIndex + 1} / {bungalows.length}
                            </span>

                            <button type="button" onClick={nextCard}>
                                Ver otro alojamiento →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export { BungalowCard }

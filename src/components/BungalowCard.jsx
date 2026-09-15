import { Link } from 'react-router-dom';


const BungalowCard = ({ bungalows }) => {
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
                    {bungalows.map((bungalow) => {
                        const coverImage = bungalow.image.images[3]
                            ?? bungalow.image.images[0];

                        return (
                            <article
                                className="bungalow-card"
                                key={bungalow.id}
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

                                    <Link
                                        to="/contacto"
                                        className="bungalow-button"
                                    >
                                        Consultar disponibilidad
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { BungalowCard }

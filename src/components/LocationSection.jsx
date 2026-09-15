const LocationSection = () => {
    const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.7199624565606!2d-58.39700692436266!3d-32.1578549739285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b1d820783d3931%3A0x14afaa26e7239cce!2sBungalows%20El%20C%C3%A1ntaro!5e0!3m2!1ses-419!2sar!4v1789433146416!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin';
    const mapLink = 'https://www.google.com/maps/dir/?api=1&destination=Bungalows+El+Cántaro';

    return (
        <section
            className="location-section"
            aria-labelledby="location-title"
        >
            <div className="location-container">
                <div className="location-content">
                    <span className="location-label">
                        Dónde estamos
                    </span>

                    <h2 id="location-title">
                        Tu descanso empieza en Villa Elisa
                    </h2>

                    <p>
                        Encontranos en Villa Elisa, Entre Ríos.
                        Consultá nuestra ubicación y organizá
                        el viaje a El Cántaro.
                    </p>

                    <a
                        className="location-button"
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver en Google Maps
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div className="location-map">
                    <iframe
                        src={mapEmbedUrl}
                        title="Ubicación de Bungalows El Cántaro en Google Maps"
                        width="600"
                        height="450"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export { LocationSection };
const IntroSection = () => {
    return (
        <section className="intro-section">
            <div className="intro-container">
                <div className="intro-content">
                    <span className="section-label">Tu descanso en Villa Elisa</span>

                    <h2>Un lugar tranquilo para sentirte como en casa</h2>

                    <p>
                        En El Cántaro vas a encontrar alojamientos cómodos, equipados
                        y rodeados de una atmósfera natural para disfrutar en pareja,
                        familia o con amigos.
                    </p>
                </div>

                <div className="intro-highlights">
                    <article className="highlight">
                        <strong>Hasta 4</strong>
                        <span>huéspedes</span>
                    </article>

                    <article className="highlight">
                        <strong>Pet friendly</strong>
                        <span>mascotas bienvenidas</span>
                    </article>

                    <article className="highlight">
                        <strong>Villa Elisa</strong>
                        <span>Entre Ríos</span>
                    </article>
                </div>
            </div>
        </section>
    )
}
export { IntroSection }
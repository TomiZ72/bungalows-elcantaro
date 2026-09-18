import { Link } from 'react-router-dom';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            El Cántaro
                            <span>Bungalows</span>
                        </Link>

                        <p>
                            Un lugar para descansar y disfrutar
                            de Villa Elisa a tu ritmo.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h2>Planificá tu estadía</h2>

                        <p>
                            Contanos cuándo querés venir y cuántas
                            personas viajan.
                        </p>

                        <Link
                            to="/contacto"
                            className="footer-button"
                        >
                            Consultar disponibilidad

                        </Link>

                        <span className="footer-location">
                            Villa Elisa, Entre Ríos, Argentina
                        </span>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {currentYear} El Cántaro.
                        Todos los derechos reservados.
                    </p>

                    <a href="#top" className="footer-back-top">
                        Volver arriba
                        <span aria-hidden="true">↑</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
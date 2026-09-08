import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <Link to="/" className="header-brand">
                    "El Cántaro"
                    <span>Villa Elisa</span>
                </Link>

                <nav className="header-nav" aria-label="Navegación principal">
                    <NavLink to="/" end className="header-link">
                        Inicio
                    </NavLink>

                    <NavLink to="/bungalows" className="header-link">
                        Bungalows
                    </NavLink>

                    <NavLink to="/contacto" className="header-link">
                        Contacto
                    </NavLink>
                </nav>
            </div>
        </header>
    )
};
export { Header }

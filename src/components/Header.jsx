import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logoElCantaro.png'
const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/" className="header-brand">
                        <img src={logo} alt="Logo de El Cántaro" className="header-logo" />

                    </Link>
                </div>

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

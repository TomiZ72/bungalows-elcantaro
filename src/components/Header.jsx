import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logoElCantaro.png'
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="header-container">
                <div className="logo-container">
                    <Link
                        to="/"
                        className="header-brand"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img
                            src={logo}
                            alt="Logo de El Cántaro"
                            className="header-logo"
                        />
                    </Link>
                </div>

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="header-navigation"
                >
                    <span aria-hidden="true">
                        {menuOpen ? "✕" : "☰"}
                    </span>
                </button>

                <nav
                    id="header-navigation"
                    className={`header-nav ${menuOpen ? "is-open" : ""}`}
                    aria-label="Navegación principal"
                >
                    <NavLink
                        to="/"
                        end
                        className="header-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/bungalows"
                        className="header-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Bungalows
                    </NavLink>

                    <NavLink
                        to="/contacto"
                        className="header-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contacto
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export { Header };

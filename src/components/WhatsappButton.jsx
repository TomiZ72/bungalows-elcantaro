import { FaWhatsapp } from "react-icons/fa";


const WhatsAppButton = ({
    message = "¡Hola! Quisiera consultar disponibilidad en El Cántaro.",
    children = "Consultar disponibilidad",
    className = "",
}) => {
    const phone = "5493442546703";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            className={`whatsapp-button ${className}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp aria-hidden="true" />
            {children}
        </a>
    );
};

export { WhatsAppButton };

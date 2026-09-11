import bungalowExt from '../assets/complexImg/bungalowExt.jpg'
import entrada from '../assets/complexImg/entrada.jpg'
import piscina from '../assets/complexImg/piscina.jpg'
import parrilla from '../assets/complexImg/parrilla.jpg'
import juegos from '../assets/complexImg/juegos.jpg'
import recepcion from '../assets/complexImg/recepcion.jpg'
const complexImg = {
    images: [
        {
            src: recepcion,
            alt: 'Recepción'
        },
        {
            src: bungalowExt,
            alt: 'Bungalow Exterior'
        },
        {
            src: entrada,
            alt: 'Exterior'
        },
        {
            src: piscina,
            alt: 'Piscina'
        },
        {
            src: parrilla,
            alt: 'Parrilla'
        },
        {
            src: juegos,
            alt: 'Juegos'
        },
    ]
};

const complexData = {
    description:
        "Disfruta de la tranquilidad y el confort en un entorno natural único. A pocos minutos de Termas Villa Elisa, en la región Tierra de Palmares, nuestros Bungalows totalmente equipados son ideales para pareja, familias y amigos que buscan relajarse y descubrir nuestra región. El lugar perfecto para desconectar, descansar y vivir una experiencia inolvidable de Entre Ríos ",

    images: complexImg.images,
    location: {
        address: 'Avenida Mitre 2075',
        city: 'Villa Elisa',
        province: 'Entre Ríos',
        country: 'Argentina',
    },

    amenities: [
        'Piscina cubierta',
        'Patio',
        'Estacionamiento',
        'Parrilla',
        'Juegos para niños',
        'Wi-Fi',
    ],
};
export { complexData }
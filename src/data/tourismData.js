// Datos consultados el 14/09/2026. Fuentes y créditos en cada objeto.
// Termas aparece primero y tiene featured: true.
// No se incluyen tarifas ni horarios: consultar en los enlaces.

import image1 from '../assets/tourismImg/termas-villa-elisa.webp';
import image2 from '../assets/tourismImg/el-palmar.webp';
import image3 from '../assets/tourismImg/el-rocha.webp';
import image4 from '../assets/tourismImg/museo-el-porvenir.webp';
import image5 from '../assets/tourismImg/almacen-francou.webp';
import image6 from '../assets/tourismImg/almacen-don-leandro.webp';
import image7 from '../assets/tourismImg/alonso-saenz.webp';
import image8 from '../assets/tourismImg/casona-de-piedra.webp';
import image9 from '../assets/tourismImg/vulliez-sermet.webp';

const tourismData = [
    {
        "id": 1,
        "slug": "termas-villa-elisa",
        "name": "Termas Villa Elisa",
        "category": "Termas y descanso",
        "description": "Piscinas termales, espacios verdes y un lago para disfrutar de una pausa. El complejo combina descanso, recreación y propuestas gastronómicas.",
        "location": "Villa Elisa, Entre Ríos",
        "image": image1,
        "alt": "Piscina de Termas Villa Elisa con vapor sobre el agua",
        "imagePosition": "center",
        "link": "https://termasvillaelisa.com/",
        "linkType": "website",
        "featured": true,
        "source": "https://termasvillaelisa.com/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2020/07/Termas-3.jpg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 2,
        "slug": "el-palmar",
        "name": "Parque Nacional El Palmar",
        "category": "Naturaleza",
        "description": "Un paisaje de palmeras yatay, ambientes ribereños y vida silvestre. Descubrí uno de los espacios naturales emblemáticos de Entre Ríos.",
        "location": "Ruta Nacional 14, km 198, Ubajay",
        "image": image2,
        "alt": "Palmeras yatay iluminadas por el sol en el Parque Nacional El Palmar",
        "imagePosition": "center",
        "link": "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-palmar",
        "linkType": "website",
        "featured": false,
        "source": "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-palmar",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2021/07/141720933_3819821754727382_8931521605895595638_n-1.jpg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 3,
        "slug": "el-rocha",
        "name": "Balneario Municipal El Rocha",
        "category": "Aire libre",
        "description": "Un arroyo rodeado de vegetación para disfrutar del paisaje y compartir tiempo al aire libre cerca de Villa Elisa.",
        "location": "Ruta 130, km 7, zona de Villa Elisa",
        "image": image3,
        "alt": "Visitantes con bicicletas junto al arroyo del balneario El Rocha",
        "imagePosition": "center",
        "link": "https://www.instagram.com/balnearioelrocha/",
        "linkType": "instagram",
        "featured": false,
        "source": "https://villaelisa.tur.ar/atractivos/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2026/04/DSC3608-scaled-e1775744981165.jpg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 4,
        "slug": "museo-el-porvenir",
        "name": "Estancia Museo El Porvenir",
        "category": "Historia",
        "description": "La antigua residencia de Héctor de Elía, fundador de Villa Elisa, invita a conocer la historia local y recorrer su parque.",
        "location": "Villa Elisa, Entre Ríos",
        "image": image4,
        "alt": "Visitantes frente a la casona y el mirador del Museo El Porvenir",
        "imagePosition": "center",
        "link": "https://www.facebook.com/MuseoVillaElisa.ElPorvenir",
        "linkType": "facebook",
        "featured": false,
        "source": "https://villaelisa.tur.ar/atractivos/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2026/04/DSC9852-e1775745275917.png",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 5,
        "slug": "almacen-francou",
        "name": "Almacén de Ramos Generales Francou",
        "category": "Turismo rural",
        "description": "Un almacén que mantiene su actividad desde 1907. Historia familiar, visitas guiadas y sabores de campo en Colonia El Carmen.",
        "location": "Colonia El Carmen, Entre Ríos",
        "image": image5,
        "alt": "Visitantes compartiendo una mesa en el interior del Almacén Francou",
        "imagePosition": "center",
        "link": "https://www.instagram.com/almacenfrancou/",
        "linkType": "instagram",
        "featured": false,
        "source": "https://villaelisa.tur.ar/atractivos/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2021/02/FRANCOU-7_1-scaled.jpg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 6,
        "slug": "almacen-don-leandro",
        "name": "Almacén Don Leandro",
        "category": "Gastronomía rural",
        "description": "Gastronomía de tradición inmigrante, picadas y licores en un antiguo almacén de Colonia Hocker. Una parada para descubrir sabores regionales.",
        "location": "Colonia Hocker, Entre Ríos",
        "image": image6,
        "alt": "Personas junto al mostrador del Almacén Don Leandro",
        "imagePosition": "center",
        "link": "https://www.instagram.com/almacendonleandro/",
        "linkType": "instagram",
        "featured": false,
        "source": "https://villaelisa.tur.ar/atractivos/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2024/11/452511283_792870929727015_3753257931999368561_n.jpg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 7,
        "slug": "alonso-saenz",
        "name": "Bodega Alonso Sáenz",
        "category": "Bodegas",
        "description": "Bodega familiar cercana a Arroyo Barú, con viñedos y vinos de uvas cosechadas a mano. Una propuesta para conocer la vitivinicultura entrerriana.",
        "location": "Ruta 23, km 28, zona de Arroyo Barú",
        "image": image7,
        "alt": "Encuentro al aire libre entre los viñedos de Bodega Alonso Sáenz",
        "imagePosition": "center",
        "link": "https://www.instagram.com/bodegaalonsosaenz/",
        "linkType": "instagram",
        "featured": false,
        "source": "https://sanjose.tur.ar/experiencia-enotermal/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2025/02/fcgbfdh.jpeg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 8,
        "slug": "casona-de-piedra",
        "name": "Bodega Casona de Piedra",
        "category": "Bodegas",
        "description": "Un proyecto de San José que recupera la tradición vitivinícola regional con vinos de uvas entrerrianas y experiencias vinculadas al campo.",
        "location": "Colonia Nueva al Norte, San José",
        "image": image8,
        "alt": "Grupo de visitantes recorriendo el viñedo de Casona de Piedra",
        "imagePosition": "center",
        "link": "https://www.casonadepiedra.com.ar/",
        "linkType": "website",
        "featured": false,
        "source": "https://www.casonadepiedra.com.ar/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2026/06/bodega-casona-de-piedra-13.jpeg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    },
    {
        "id": 9,
        "slug": "vulliez-sermet",
        "name": "Bodega Vulliez Sermet",
        "category": "Bodegas",
        "description": "Viñedos, historia y vinos de elaboración familiar en Colón. Sus visitas permiten conocer el lugar y los procesos de producción.",
        "location": "Ruta 135, km 8, Colón",
        "image": image9,
        "alt": "Entrada y cartel de Bodega Vulliez Sermet entre árboles",
        "imagePosition": "center",
        "link": "https://www.instagram.com/bodegavulliezsermet/",
        "linkType": "instagram",
        "featured": false,
        "source": "https://sanjose.tur.ar/experiencia-enotermal/",
        "imageSource": "https://villaelisa.tur.ar/wp-content/uploads/2021/08/42678838_2137462046277515_1432191891784335360_n.jpg",
        "imageCredit": "Portal oficial de Turismo de Villa Elisa; autor individual no identificado en la página consultada.",
        "imageLicense": "No se identificó una licencia de reutilización; consultar autorización antes de publicar.",
        "verifiedAt": "2026-09-14"
    }
];

// Alias compatible con el ejemplo anterior del carrusel.
export { tourismData, tourismData as dataTourism };

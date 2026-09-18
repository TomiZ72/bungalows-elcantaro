import { Hero } from '../components/Hero.jsx';
import { complexData } from '../data/complexData.js';
import { bungalowsData } from '../data/bungalowsData.js';
import { bungalowsImg } from '../data/bungalowsData.js';
import { tourismData } from '../data/tourismData.js'
import { IntroSection } from '../components/IntroSection.jsx';
import { BungalowCard } from '../components/BungalowCard.jsx';
import { TourismSection } from '../components/TourismSection.jsx'
import { ReviewsSection } from '../components/ReviewSection.jsx'
import { LocationSection } from '../components/LocationSection.jsx';
import { Footer } from '../components/Footer.jsx'


const heroImages = [
    ...complexData.images,

    ...bungalowsImg.images

];
heroImages.flatMap((image) => {
    return {
        src: image.src,
        alt: image.alt,
    };
});

const Home = () => {
    return (
        <>
            <Hero
                images={heroImages}
                description={complexData.description}
                location={`${complexData.location.city}, ${complexData.location.province}`}
            />
            <IntroSection images={heroImages} />
            <BungalowCard bungalows={bungalowsData} />
            <LocationSection />
            <TourismSection places={tourismData} />
            <ReviewsSection />
            <Footer />
        </>)
}
export { Home }
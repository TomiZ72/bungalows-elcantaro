import { Hero } from '../components/Hero.jsx';
import { complexData } from '../data/complexData.js';
import { bungalowsImg } from '../data/bungalowsData.js';
import { IntroSection } from '../components/IntroSection.jsx';


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
            <IntroSection />

        </>)
}
export { Home }
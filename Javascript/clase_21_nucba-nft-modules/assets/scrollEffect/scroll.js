import ScrollReveal from "scrollreveal";

// const heroSection = document.getElementById("hero");
const heroSection = document.querySelector('.hero-card')
const infoSection = document.getElementById("info");
const discoverSection = document.getElementById("discover");
const productsSection = document.getElementById("products");

const revealSection = (section, delay = 200) => {
 ScrollReveal().reveal(section, {
    delay: delay, // Lo que tarda en que arranque el efecto
    duration: 2000, // Duración del efecto
    distance: "100px", // Distancia que recorre el efecto
    origin: "bottom", // Dirección de donde viene el efecto
    opacity: 0, // Opacidad
    reset: true,
    mobile: true
  });
};

export const scrollEffectInit = () => {
 revealSection(heroSection)
 revealSection(infoSection, 450)
 revealSection(discoverSection)
 revealSection(productsSection)
};

import Typewriter from "typewriter-effect/dist/core";

const typewriterSpan = document.querySelector(".typewriter");

const typewriter = new Typewriter(typewriterSpan, {
  loop: true,
  delay: 50,
});

const palabras = ["Crypto", "Tecnología", "Nucba"];

export const typewriterInit = () => {
  typewriter
    .pauseFor(1000)
    .typeString(palabras[0])
    .pauseFor(1500)
    .deleteChars(palabras[0].length)
    .typeString(palabras[1])
    .pauseFor(1500)
    .deleteChars(palabras[1].length)
    .typeString(palabras[2])
    .pauseFor(1500)
    .start();
};

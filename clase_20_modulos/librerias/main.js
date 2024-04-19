import JSConfetti from "js-confetti";
import _ from "lodash";
import { faker } from "@faker-js/faker";

// chunk
const arraySegmentado = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log("Segmentado:", arraySegmentado);

// elegir un numero aleatorio
const aleatorio = _.sample([1, 2, 3, 4, 5]);
console.log("Aleatorio:", aleatorio);

// shuffle
const aleatorio2 = _.shuffle([1, 2, 3, 4, 5]);
console.log("Aleatorio2:", aleatorio2);

// CONFETTI

const jsConfetti = new JSConfetti();
const boton = document.querySelector("#confetti");

boton.addEventListener("click", () => {
  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
    emojiSize: 50,
  });
});

// FAKER
const createRandomUser = () => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 10
})
// console.log(createRandomUser());
console.log(USERS)

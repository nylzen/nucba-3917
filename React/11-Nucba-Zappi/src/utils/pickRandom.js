export const pickRandoms = (products, cantidad) => {
  const randomId = new Set();

  while (randomId.size < cantidad) {
    randomId.add(Math.floor(Math.random() * products.length));
  }

  // return [...randomId].map(index => products[index])
  return Array.from(randomId).map((index) => products[index]);
};

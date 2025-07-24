export function getRandomIndex(excludeIndices = [], max) {
  let index;
  do {
    index = Math.floor(Math.random() * max);
  } while (excludeIndices.includes(index));
  return index;
}

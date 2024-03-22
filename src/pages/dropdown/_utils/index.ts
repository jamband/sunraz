export const generateLetters = (letters: Array<string>) => {
  return [...Array(10)].map(
    () => letters[Math.floor(Math.random() * Math.floor(letters.length))],
  );
};

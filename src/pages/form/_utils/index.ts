export const generateCode = (length: number) => {
  return [...Array(length)]
    .map(() => Math.floor(Math.random() * Math.floor(10)).toString())
    .join("");
};

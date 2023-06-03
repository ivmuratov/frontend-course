export const getRandomID = (): string => `${Math.floor(Math.random() * (1000000000 - 1 + 1)) + 1}`;

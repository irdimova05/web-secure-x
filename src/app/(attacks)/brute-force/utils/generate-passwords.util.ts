import { generateCombinations } from "./generate-combinations.utils";

export function generatePasswords() {
  if (process.env.BRUTE_FORCE_DEMO_DATA === "true") {
    return [
      "asdfsas",
      "djdjdjd",
      "udsguef",
      "378rb33rf0",
      "nd83er3OJ0",
      "ewfdj932J8WD9",
      "admin", // correct pass
      "fenw903Js-",
      "US8ehg0D",
      "eoif8G7i",
    ];
  }

  const chars = [
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
  ];
  const startLen = 8;
  const stopLen = Math.floor(Math.random() * 20);
  const passwords = generateCombinations(chars, startLen, stopLen);

  return passwords.slice(0, 10);
}

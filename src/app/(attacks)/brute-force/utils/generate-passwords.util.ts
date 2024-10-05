import { generateCombinations } from "./generate-combinations.utils";

export function generatePasswords() {
  const chars =
    //[" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~"];
    ["t", "e", "s"];
  const startLen = 8;
  const stopLen = 8; // Math.floor(Math.random() * 20);
  const passwords = generateCombinations(chars, startLen, stopLen);

  return passwords;
}

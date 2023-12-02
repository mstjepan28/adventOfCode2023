import { calibrationInput } from "./calibrationInput";

const replaceWordsWithDigits = (value: string) => {
  return value
    .replaceAll("one", "o1e")
    .replaceAll("two", "t2o")
    .replaceAll("three", "t3e")
    .replaceAll("four", "f4r")
    .replaceAll("five", "f5e")
    .replaceAll("six", "s6x")
    .replaceAll("seven", "s7n")
    .replaceAll("eight", "e8t")
    .replaceAll("nine", "n9e");
};

const getNumberOrUndefined = (char: string) => {
  const isDigit = /^\d$/.test(char);

  if (isDigit) {
    return Number(char);
  }

  return undefined;
};

const extractNumber = (input: string) => {
  const inputArray = input.split("");
  const found = [undefined, undefined] as number[] | undefined[];

  for (let start = 0; start < inputArray.length; start++) {
    const end = inputArray.length - 1 - start;

    found[0] ??= getNumberOrUndefined(inputArray[start]);
    found[1] ??= getNumberOrUndefined(inputArray[end]);

    if (found[0] && found[1]) {
      break;
    }
  }

  return Number(`${found[0]}${found[1]}`);
};

export const trebuchet = () => {
  const result = calibrationInput.reduce((sum, value, index) => {
    const input = replaceWordsWithDigits(value);
    const extractedNumber = extractNumber(input);

    return sum + extractedNumber;
  }, 0);

  console.log("Result: ", result);
};

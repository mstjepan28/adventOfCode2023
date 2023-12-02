import { calibrationInput } from "./calibrationInput";

const getDigit = (value: string) => {
  if (value.length === 1) {
    return value;
  }

  const digit = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  }[value];

  if (!digit) {
    throw new Error(`${value} is not a valid digit`);
  }

  return digit;
};

const extractNumber = (value: string) => {
  // prettier-ignore
  const digitOptions = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  const digitArray = [];
  for (const digit of digitOptions) {
    const index = value.indexOf(digit);

    if (index === -1) {
      continue;
    }

    digitArray[index] = getDigit(digit);
  }

  const filterRes = digitArray.filter(Boolean);

  const num1 = filterRes[0];
  const num2 = filterRes[filterRes.length - 1];

  return Number(`${num1}${num2}`);
};

const test = [
  // "oneight",
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

export const trebuchet = () => {
  const inputList = true ? test : calibrationInput;

  const result = inputList.reduce((sum, value, index) => {
    const number = extractNumber(value);

    console.log(index, value, number);

    return sum + number;
  }, 0);

  console.log("Result: ", result);
};

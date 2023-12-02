import { puzzleInput } from "./puzzleInput";

const RED = "red";
const BLUE = "blue";
const GREEN = "green";

type TColor = "red" | "blue" | "green";

const colorMax = {
  [RED]: 12,
  [GREEN]: 13,
  [BLUE]: 14,
} as const;

const extractNumber = (dirtyId: string) => {
  return Number(dirtyId.replace(/\D/g, ""));
};

const checkIfGameValid = (subsetStr: string) => {
  const subsetList = subsetStr.split(";");

  for (const subset of subsetList) {
    const setList = subset.split(",");

    for (const setValue of setList) {
      const colorNum = extractNumber(setValue);
      const color = setValue.split(" ")[2] as TColor;

      if (colorNum > colorMax[color]) {
        return false;
      }
    }
  }

  return true;
};

const test = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green, ",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

export const cubeConundrum = () => {
  const inputList = true ? test : puzzleInput;

  const res = inputList.reduce((sum, game) => {
    const [dirtyId, subsetStr] = game.split(":");

    const gameId = extractNumber(dirtyId);
    const isGameValid = checkIfGameValid(subsetStr);

    console.log(gameId, subsetStr, isGameValid);
    return sum + (isGameValid ? gameId : 0);
  }, 0);

  console.log("Result: ", res);
};

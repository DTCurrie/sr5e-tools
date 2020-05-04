export interface Die {
  sides: number;
  roll: () => number;
}

export interface DicePoolOptions {
  sides?: number;
  count?: number;
}

export interface DicePool extends Die {
  count: number;
}

export const createDicePool = (
  { count = 1, sides = 6 }: DicePoolOptions = { count: 1, sides: 6 }
): DicePool => {
  return {
    sides,
    count,
    roll: (): number =>
      Array.from(
        { length: count },
        () => 1 + Math.floor(Math.random() * sides)
      ).reduce((previous, current) => previous + current, 0),
  };
};

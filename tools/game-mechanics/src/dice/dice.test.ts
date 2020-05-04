import { createDicePool } from "./dice";

describe("dice", () => {
  describe("createDicePool", () => {
    it("should return a dice pool with the default 1d6", () => {
      const { count, sides } = createDicePool();

      expect(count).toBe(1);
      expect(sides).toBe(6);
    });

    it("should return a dice pool with the default count of 1 and passed sides", () => {
      const { count, sides } = createDicePool({ sides: 8 });

      expect(count).toBe(1);
      expect(sides).toBe(8);
    });

    it("should return a dice pool with the passed count and deafult sides of 6", () => {
      const { count, sides } = createDicePool({ count: 2 });

      expect(count).toBe(2);
      expect(sides).toBe(6);
    });

    it("should return a number between default 1 and 6", () => {
      const { roll } = createDicePool();

      const first = roll();
      const second = roll();
      const third = roll();

      const evaluate = (value: number): boolean => value >= 1 && value <= 6;

      expect(evaluate(first)).toBe(true);
      expect(evaluate(second)).toBe(true);
      expect(evaluate(third)).toBe(true);
    });
  });
});

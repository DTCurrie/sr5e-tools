import { createDicePool } from "./index";

describe("index", () => {
  describe("dice/dice export", () => {
    it("should export createDicePool", () => {
      expect(createDicePool).toBeDefined();
    });
  });
});

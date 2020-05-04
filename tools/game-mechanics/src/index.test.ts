import { rollDice } from './index';

describe('index', () => {
  describe('dice export', () => {
    it('should export rollDice', () => {
      expect(rollDice).toBeDefined();
    });
  });
});

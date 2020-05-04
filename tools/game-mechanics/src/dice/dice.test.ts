import { rollDice } from './dice';

describe('dice', () => {
  it('should return a number between 1 and 6', () => {
    const roll = rollDice();
    expect(roll >= 1 && roll <= 6).toBe(true);
  });
});

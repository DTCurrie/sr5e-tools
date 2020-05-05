export const randomValue = (array: string[]): string => {
  const threshold = Math.random();
  const values = Array.from(array, (_v, i) => i * (1 / length));
  const value = values.filter((val: number) => val < threshold).reverse()[0];

  return array[values.indexOf(value)];
};

import { randomValue } from "@/utils/random-value";

const vehicles: { [index: string]: { pre: string; models: string[] } } = {
  aircraft: {
    pre: "flying on a",
    models: [
      "Agular GX-3AT",
      "Ares Dragon",
      "Nissan Hound",
      "PBY-70 Catalina II",
      "Sea Sprite",
      "SKA-008",
      "Stallion",
    ],
  },
  groundcraft: {
    pre: "riding in a",
    models: [
      "Ares Roadmaster",
      "Chinook",
      "Command(General)",
      "Econovan",
      "Endurance",
      "Goliath",
      "Luxus",
      "Mitsubishi Nightsky",
      "Outback",
      "Preserve",
      "Rhino",
      "Stürmwagon",
    ],
  },
  watercraft: {
    pre: "sailing on a",
    models: [
      "Classic 111",
      "Lake King",
      "Mobius",
      "Panther",
      "Riverine Security",
      "Samuvani Criscraft Otter",
      "Waterking",
    ],
  },
};

const craftTypes = Object.keys(vehicles);

export const movingVehicle = () => {
  const craftType = randomValue(craftTypes);
  const { pre, models } = vehicles[craftType];

  return `${pre} ${randomValue(models)}`;
};

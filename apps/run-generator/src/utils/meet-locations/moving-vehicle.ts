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
const { aircraft, groundcraft, watercraft } = vehicles;

const craftIncrement = 1 / craftTypes.length;
const aircraftIncrement = 1 / aircraft.models.length;
const groundcraftIncrement = 1 / groundcraft.models.length;
const watercraftIncrement = 1 / watercraft.models.length;

const craftTypeValues = Array.from(
  { length: craftTypes.length },
  (_v, i) => i * craftIncrement
);

const craftValues: { [index: string]: number[] } = {
  aircraft: Array.from(
    { length: aircraft.models.length },
    (_v, i) => i * aircraftIncrement
  ),
  groundcraft: Array.from(
    { length: groundcraft.models.length },
    (_v, i) => i * groundcraftIncrement
  ),
  watercraft: Array.from(
    { length: watercraft.models.length },
    (_v, i) => i * watercraftIncrement
  ),
};

export const movingVehicle = () => {
  const craftTypeThreshold = Math.random();
  const vehicleThreshold = Math.random();

  const craftTypeIndex = craftTypeValues.indexOf(
    craftTypeValues
      .filter((val: number) => val < craftTypeThreshold)
      .reverse()[0]
  );

  const craftType = craftTypes[craftTypeIndex];
  const vehicleValues = craftValues[craftType];

  const vehicleIndex = vehicleValues.indexOf(
    vehicleValues.filter((val: number) => val < vehicleThreshold).reverse()[0]
  );

  const { pre, models } = vehicles[craftType];

  return `${pre} ${models[vehicleIndex]}`;
};

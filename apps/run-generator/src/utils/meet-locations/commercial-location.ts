const descriptors = [
  "Abandoned",
  "Closed",
  "Derelict",
  "Empty",
  "Quiet",
  "Rundown",
  "Secluded",
  "Secure",
  "Unfinished",
];

const locations = [
  "Docks",
  "Garage",
  "Hangar",
  "Loading Dock",
  "Parking Garage",
  "Parking Lot",
  "Truck Depot",
  "Warehouse",
];

const descriptorIncrement = 1 / descriptors.length;
const locationIncrement = 1 / locations.length;

const descriptorValues = Array.from(
  { length: descriptors.length },
  (_v, i) => i * descriptorIncrement
);

const locationValues = Array.from(
  { length: locations.length },
  (_v, i) => i * locationIncrement
);

export const commercialLocation = () => {
  const descriptorThreshold = Math.random();
  const locationThreshold = Math.random();

  const descriptorIndex = descriptorValues.indexOf(
    descriptorValues
      .filter((val: number) => val < descriptorThreshold)
      .reverse()[0]
  );

  const locationIndex = locationValues.indexOf(
    locationValues.filter((val: number) => val < locationThreshold).reverse()[0]
  );

  return `${descriptors[descriptorIndex]} ${locations[locationIndex]}`;
};

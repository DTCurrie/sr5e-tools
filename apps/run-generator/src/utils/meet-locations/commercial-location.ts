import { randomValue } from "@/utils/random-value";

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

export const commercialLocation = () =>
  `${randomValue(descriptors)} ${randomValue(locations)}`;

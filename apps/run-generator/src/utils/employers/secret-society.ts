import { randomValue } from "@/utils/random-value";

const societies = [
  "Black Lodge",
  "Human Nation",
  "New Revolution",
  "Ordo Maximus",
  "Ring of the Burning Pheonix",
  "Sai Fan",
  "Sie",
  "Triads",
];

export const secretSociety = () => randomValue(societies);

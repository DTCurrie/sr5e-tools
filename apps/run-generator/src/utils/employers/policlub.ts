import { randomValue } from "@/utils/random-value";

const policlubs = [
  "Alamos 20,000",
  "Alliance for Allah",
  "Astral Space Preservation Society",
  "Council to Rebuild America",
  "Empowerment Coalition",
  "Ghoul Liberation League",
  "Humanis Policlub",
  "Magical Reform Society",
  "Mother Earth Policlub",
  "Mothers of Metahumans",
  "Nationale Aktion",
  "Ork Rights Committee",
  "People for the Ethical Treatment of the Awakened",
  "Sons of Sauron",
  "Stonecutters Guild",
  "Universal Brotherhood",
  "Young Elven Technologists",
];

export const policlub = () => randomValue(policlubs);

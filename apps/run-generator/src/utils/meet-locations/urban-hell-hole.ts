const neighborhoods = [
  "Arakura",
  "Ashitake",
  "Bad Axe",
  "Bellwood",
  "Benavides",
  "Campechana",
  "Chikuni",
  "Dongshen",
  "Easley",
  "Fujisawa",
  "Fukase",
  "Garnett",
  "Hantan",
  "Hettick",
  "Hotei",
  "Hushan",
  "Kawamata",
  "Keshi",
  "Kunigami",
  "La Grande",
  "Lafayette",
  "Laguna",
  "Laughlin",
  "Locos",
  "Long Neck",
  "Macachi",
  "Mashi",
  "Nason",
  "Obert",
  "Ortiga",
  "Osborne",
  "Pote",
  "Qingshi",
  "Ranburne",
  "Rembrandt",
  "Rockwell",
  "Shikama",
  "Temanche",
  "Tigre",
  "Tila",
  "Tsumasaki",
  "Urakawa",
  "Varnell",
  "Virulento",
  "Walden",
  "Weston",
  "Wu-te",
  "Yeh-ho-chan",
  "Yuantou",
  "Zhaoyan",
];

const locations = ["Barrens", "Slums", "Squat"];

const neighboorhoodIncrement = 1 / neighborhoods.length;
const locationIncrement = 1 / locations.length;

const neighborhoodValues = Array.from(
  { length: neighborhoods.length },
  (_v, i) => i * neighboorhoodIncrement
);

const locationValues = Array.from(
  { length: locations.length },
  (_v, i) => i * locationIncrement
);

export const urbanHellHole = () => {
  const neighborhoodThreshold = Math.random();
  const locationThreshold = Math.random();

  const neighborhoodIndex = neighborhoodValues.indexOf(
    neighborhoodValues
      .filter((val: number) => val < neighborhoodThreshold)
      .reverse()[0]
  );

  const locationIndex = locationValues.indexOf(
    locationValues.filter((val: number) => val < locationThreshold).reverse()[0]
  );

  return `${neighborhoods[neighborhoodIndex]} ${locations[locationIndex]}`;
};

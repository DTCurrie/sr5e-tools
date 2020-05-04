const hosts = [
  "BioBotic",
  "BioN",
  "Biometrix",
  "BionicPort",
  "Bioxx",
  "Buzztrix",
  "ChipCycle",
  "Chipline",
  "Chiprific",
  "Commer",
  "Cryptoid",
  "CyberCryptic",
  "CyberCubicle",
  "Cyberum",
  "Cybotics",
  "Databump",
  "DigiCC",
  "DynaCircuit",
  "Geektrix",
  "Hyperzo",
  "Intersocket",
  "Magiccube",
  "Magicker",
  "Magicon",
  "Metable",
  "MiliDex",
  "NMatrix",
  "Nerdork",
  "Neucafe",
  "NeuroPond",
  "Neuromic",
  "Pushbyte",
  "QTech",
  "QuantumBotics",
  "RipGuard",
  "RunMagic",
  "Tapscrypt",
  "Techbrain",
  "WizForce",
];

const hostIncrement = 1 / hosts.length;

const hostValues = Array.from(
  { length: hosts.length },
  (_v, i) => i * hostIncrement
);

export const matrixHostName = () => {
  const hostThreshold = Math.random();

  const hostIndex = hostValues.indexOf(
    hostValues.filter((val: number) => val < hostThreshold).reverse()[0]
  );

  return hosts[hostIndex];
};

let energy = 50;
const getEnergy = () => energy;
const setEnergy = (addEnergy) => {
  energy += addEnergy;
  if (energy > 100) {
    energy = 100;
  }
};

export { setEnergy, getEnergy };

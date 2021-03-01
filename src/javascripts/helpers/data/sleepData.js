import deathScreen from '../../components/deathScreen';

let energy = 50;
const getEnergy = () => energy;
const setEnergy = (addEnergy) => {
  energy += addEnergy;
  if (energy > 100) {
    energy = 100;
  }
  if (energy <= 0) {
    energy = 0;
    deathScreen();
  }
};

export { setEnergy, getEnergy };

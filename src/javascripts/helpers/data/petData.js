import { getFull } from './eatData';
import { getStrength } from './fightData';
import { getFun } from './playData';
import { getEnergy } from './sleepData';

let petsData = '';
const getPetsData = () => petsData;
const setPetsData = (imageUrl) => {
  petsData = imageUrl;
  console.warn(petsData);
};
const getTotalHealth = () => {
  const total = (getEnergy() + getFull() + getStrength() + getFun());
  return total;
};

export { setPetsData, getTotalHealth, getPetsData };

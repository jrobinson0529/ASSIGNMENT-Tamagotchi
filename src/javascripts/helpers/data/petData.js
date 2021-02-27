import { getFull } from './eatData';
import { getStrength } from './fightData';
import { getFun } from './playData';
import { getEnergy } from './sleepData';

const getTotalHealth = () => {
  const total = (getEnergy() + getFull() + getStrength() + getFun());
  return total;
};

export default getTotalHealth;

import eatBuilder from './eatBuilder';
import fightBuilder from './fightBuilder';
import playBuilder from './playBuilder';
import sleepBuilder from './sleepBuilder';

const statUpdate = () => {
  playBuilder();
  eatBuilder();
  fightBuilder();
  sleepBuilder();
};

export default statUpdate;

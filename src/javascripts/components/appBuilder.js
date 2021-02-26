import eatBuilder from './eatBuilder';
import fightBuilder from './fightBuilder';
import playBuilder from './playBuilder';
import sleepBuilder from './sleepBuilder';

const appBuilder = () => {
  eatBuilder();
  fightBuilder();
  playBuilder();
  sleepBuilder();
};

export default appBuilder;

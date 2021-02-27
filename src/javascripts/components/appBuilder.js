import getTotalHealth from '../helpers/data/petData';
import eatBuilder from './eatBuilder';
import fightBuilder from './fightBuilder';
import playBuilder from './playBuilder';
import progressBar from './progressBar';
import sleepBuilder from './sleepBuilder';

const appBuilder = () => {
  eatBuilder();
  fightBuilder();
  playBuilder();
  sleepBuilder();
  progressBar();
  getTotalHealth();
};

export default appBuilder;

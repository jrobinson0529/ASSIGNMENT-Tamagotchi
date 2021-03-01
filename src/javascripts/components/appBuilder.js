import { getTotalHealth } from '../helpers/data/petData';
import progressBar from './progressBar';
import statUpdate from './statUpdate';

const appBuilder = () => {
  statUpdate();
  progressBar();
  getTotalHealth();
};

export default appBuilder;

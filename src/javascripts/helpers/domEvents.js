import sleepBuilder from '../components/sleepBuilder';
import { setEnergy } from './data/sleepData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id === 'btn-nap') {
      setEnergy(50);
      sleepBuilder();
    }
    if (e.target.id === 'btn-slumber') {
      setEnergy(60);
      sleepBuilder();
    }
  });
};

export default domEvents;

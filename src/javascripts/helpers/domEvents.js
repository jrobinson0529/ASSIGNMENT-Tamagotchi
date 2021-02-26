import sleepBuilder from '../components/sleepBuilder';
import { setEnergy } from './data/sleepData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    console.warn(e.target.id);
    if (e.target.id === 'btn-nap') {
      setEnergy(50);
      sleepBuilder();
    }
    // if (e.target.id === 'btn-slumber') {
    //   energy += 60;
    //   if (energy >= 100) {
    //     energy = 100;
    //   }
    //   getEnergy();
    // }
  });
};

export default domEvents;

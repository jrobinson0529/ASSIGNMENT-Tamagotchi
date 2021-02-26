import eatBuilder from '../components/eatBuilder';
import playBuilder from '../components/playBuilder';
import sleepBuilder from '../components/sleepBuilder';
import { setFull } from './data/eatData';
import { setFun } from './data/playData';
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
    if (e.target.id === 'btn-healthy') {
      setFull(10);
      eatBuilder();
    }
    if (e.target.id === 'btn-unhealthy') {
      setFull(-Math.abs(2));
      eatBuilder();
    }
    if (e.target.id === 'btn-super-fun') {
      setFun(50);
      playBuilder();
    }
    if (e.target.id === 'btn-slightly-fun') {
      setFun(2);
      playBuilder();
    }
  });
};

export default domEvents;
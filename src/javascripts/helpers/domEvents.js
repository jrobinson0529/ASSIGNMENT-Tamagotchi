import appBuilder from '../components/appBuilder';
import printPetsImage from '../components/petImage';
import progressBar from '../components/progressBar';
import statUpdate from '../components/statUpdate';
import streetCredBuilder from '../components/streetCredBuilder';
import { removeFull, setFull } from './data/eatData';
import { setStrength } from './data/fightData';
import { getTotalHealth, setPetsData } from './data/petData';
import { setFun } from './data/playData';
import { setEnergy } from './data/sleepData';
import { addStreetCred } from './data/streetCredData';
import ranNum from './ranNum';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id === 'btn-nap') {
      setEnergy(20 + ranNum(21));
      statUpdate();
    }
    if (e.target.id === 'btn-slumber') {
      setEnergy(30 + ranNum(31));
      statUpdate();
    }
    if (e.target.id === 'btn-healthy') {
      const n = ranNum(20);
      setFull(10 + n);
      setEnergy(0 - n * 2);
      setFun(0 - n);
      statUpdate();
    }
    if (e.target.id === 'btn-unhealthy') {
      const n = ranNum(8);
      removeFull(2 + n);
      setStrength(0 - n);
      setFun(n);
      statUpdate();
    }
    if (e.target.id === 'btn-super-fun') {
      const n = ranNum(26);
      const x = ranNum(5);
      setFun(25 + n);
      setEnergy(-1 - x);
      statUpdate();
    }
    if (e.target.id === 'btn-slightly-fun') {
      const n = ranNum(3);
      setFun(1 + n);
      setEnergy(0 - n);
      statUpdate();
    }
    if (e.target.id === 'btn-run') {
      const n = ranNum(2);
      setStrength(1 + n);
      setEnergy(1 + n);
      addStreetCred(0 - n);
      streetCredBuilder();
      statUpdate();
    }
    if (e.target.id === 'btn-fight') {
      const n = ranNum(6);
      setStrength(-10 - n);
      setFull(-1 - n);
      setFun(-1 - n);
      setEnergy(-5 - n);
      addStreetCred(5 + n);
      streetCredBuilder();
      statUpdate();
    }
    getTotalHealth();
    progressBar();
    if (e.target.type === 'submit') {
      e.preventDefault();
      const petImage = document.querySelector('#imageUrl').value;

      setPetsData(petImage);
      document.querySelectorAll('.quad').innerHTML = '';
      appBuilder();
      printPetsImage();
      streetCredBuilder();
    }
  });
};

export default domEvents;

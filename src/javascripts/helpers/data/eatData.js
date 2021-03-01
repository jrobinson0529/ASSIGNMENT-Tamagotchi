import deathScreen from '../../components/deathScreen';

let full = 50;

const getFull = () => full;
const setFull = (addFull) => {
  full += addFull;
  if (full > 100) {
    full = 100;
  }
  if (full < 0) {
    full = 0;
  }
};
const removeFull = (n) => {
  full -= n;
  if (full > 100) {
    full = 100;
  }
  if (full <= 0) {
    full = 0;
    deathScreen();
  }
};

export { getFull, setFull, removeFull };

import deathScreen from '../../components/deathScreen';

let strength = 100;
const getStrength = () => strength;
const setStrength = (addStrength) => {
  strength += addStrength;
  if (strength > 100) {
    strength = 100;
  } else if (strength <= 0) {
    strength = 0;
    deathScreen();
  }
};

export { setStrength, getStrength };

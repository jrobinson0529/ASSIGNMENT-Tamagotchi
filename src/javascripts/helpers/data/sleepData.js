// import printToDom from '../printToDom';

let energy = 50;
const getEnergy = () => energy;
const setEnergy = (addEnergy) => {
  energy += addEnergy;
  if (energy >= 100) {
    energy = 100;
  }
};

// const printEnergy = () => {
//   const domString = `<h2>${energy}</h2>`;
//   printToDom('#energyContainer', domString);
// };

export { setEnergy, getEnergy };

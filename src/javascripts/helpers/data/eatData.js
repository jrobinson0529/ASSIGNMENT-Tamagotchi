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

export { getFull, setFull };

import deathScreen from '../../components/deathScreen';

let fun = 50;
const getFun = () => fun;
const setFun = (addFun) => {
  fun += addFun;
  if (fun > 100) {
    fun = 100;
  }
  if (fun <= 0) {
    fun = 0;
    deathScreen();
  }
};

export { setFun, getFun };

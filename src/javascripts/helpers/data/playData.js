let fun = 50;
const getFun = () => fun;
const setFun = (addFun) => {
  fun += addFun;
  if (fun > 100) {
    fun = 100;
  }
};

export { setFun, getFun };

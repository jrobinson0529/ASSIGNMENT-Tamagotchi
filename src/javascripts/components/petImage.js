import { getPetsData } from '../helpers/data/petData';
import printToDom from '../helpers/printToDom';

const printPetsImage = () => {
  const domString = `<img src="${getPetsData()}" alt=""/>`;

  printToDom('#pet', domString);
};

export default printPetsImage;

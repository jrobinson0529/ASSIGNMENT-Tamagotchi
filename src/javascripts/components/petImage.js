import { getPetsData } from '../helpers/data/petData';
import printToDom from '../helpers/printToDom';

const printPetsImage = () => {
  const domString = `<img src="${getPetsData()}" alt=""/>
                      <h3 class="street-cred" id="streetCred"></h3>`;

  printToDom('#pet', domString);
};

export default printPetsImage;

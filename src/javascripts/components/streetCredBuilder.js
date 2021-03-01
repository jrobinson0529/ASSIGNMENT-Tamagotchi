import { getStreetCred } from '../helpers/data/streetCredData';

const streetCredBuilder = () => {
  const domString = `You have ${getStreetCred()} street cred.`;
  document.querySelector('#streetCred').innerHTML = domString;
};

export default streetCredBuilder;

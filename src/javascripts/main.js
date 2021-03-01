import '../styles/main.scss';
import petImageForm from './components/petImageForm';
import domEvents from './helpers/domEvents';

const init = () => {
  domEvents();
  petImageForm();
};

init();
export default init;

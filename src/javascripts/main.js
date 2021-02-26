import '../styles/main.scss';
import appBuilder from './components/appBuilder';
import domEvents from './helpers/domEvents';

const init = () => {
  appBuilder();
  domEvents();
};

init();

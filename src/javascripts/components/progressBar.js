import { getTotalHealth } from '../helpers/data/petData';
import printToDom from '../helpers/printToDom';

const progressBar = () => {
  const domString = `<div class="progress">
 <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${getTotalHealth() / 4}" aria-valuemin="0" aria-valuemax="100" style="width: ${getTotalHealth() / 4}%"></div>
</div>`;
  printToDom('#progress', domString);
};

export default progressBar;

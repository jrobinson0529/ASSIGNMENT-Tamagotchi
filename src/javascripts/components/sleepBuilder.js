import { getEnergy } from '../helpers/data/sleepData';
import printToDom from '../helpers/printToDom';

const sleepBuilder = () => {
  const domString = `<div class="header">
                        <h1>SLEEP</h1>
                     </div>
                     <p>Energy</p>
                     <div class="body d-flex justify-content-around">
                        <button type="button" class="btn btn-success" id="btn-nap">NAP</button>
                          <div class="full-container w-25">
                            <h2>${getEnergy()}</h2>
                          </div>
                        <button type="button" class="btn btn-success" id="btn-slumber">SLUMBER</button>
                     </div>`;
  printToDom('#sleep', domString);
};

export default sleepBuilder;
